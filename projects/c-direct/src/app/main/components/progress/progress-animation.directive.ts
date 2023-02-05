import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { progressData, ProgressState, timerData } from './data';

@Directive({
  selector: '[appResetAnimation]',
})
export class ProgressAnimationDirective implements OnChanges {
  @Input() timer!: number;
  @Input() initAnimation!: boolean;

  constructor(
    private host: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    this.setAnimation(this.initAnimation, this.timer);
  }

  setAnimation(initAnimation: boolean, timer: number) {
    this.renderer.setStyle(
      this.host.nativeElement,
      'stroke-dashoffset',
      !!initAnimation
        ? progressData[ProgressState.START].strokeDashOffset
        : progressData[ProgressState.END].strokeDashOffset
    );
    this.renderer.setStyle(
      this.host.nativeElement,
      'animation-duration',
      `${!!initAnimation ? timer : timerData[ProgressState.END]}s`
    );
  }
}
