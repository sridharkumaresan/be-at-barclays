import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subject, fromEvent } from 'rxjs';
import { delay, filter, map, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[imageLazyLoad]',
})
export class ImageLazyLoadDirective implements OnInit, OnDestroy {
  @Input('imageLazyLoad') imageSrc!: string;
  @Input() loadingImageSrc = 'assets/loading.gif';
  @Input() errorImageSrc = 'assets/error.gif';
  private observer!: IntersectionObserver;
  private destroy$ = new Subject<void>();

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    };
    const imgElement = this.el.nativeElement as HTMLImageElement;

    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.loadImage(imgElement);
          observer.unobserve(imgElement);
          observer.disconnect();
        }
      });
    }, options);

    this.observer.observe(imgElement);
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadImage(imgElement: HTMLImageElement): void {
    const image = new Image();

    const imageLoad$ = fromEvent(image, 'load').pipe(
      map(() => this.imageSrc),
      takeUntil(this.destroy$)
    );

    const imageError$ = fromEvent(image, 'error').pipe(
      map(() => ''),
      takeUntil(this.destroy$)
    );

    const loading$ = imageLoad$.pipe(
      filter(Boolean),
      map(() => false),
      takeUntil(this.destroy$)
    );

    const loaded$ = imageLoad$.pipe(
      filter(Boolean),
      map(() => true),
      delay(100),
      takeUntil(this.destroy$)
    );

    const image$ = loaded$.pipe(
      map(() => this.imageSrc),
      takeUntil(this.destroy$)
    );

    image.src = this.imageSrc;

    loading$.subscribe((loading) => {
      imgElement.src = this.loadingImageSrc;
    });

    image$.subscribe((imageSrc) => {
      imgElement.src = imageSrc;
    });

    imageError$.subscribe(() => {
      imgElement.src = this.errorImageSrc;
    });
  }
}
