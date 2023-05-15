import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'c-direct';
  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement.querySelector('#outside');
    console.log('Reference ', this.elementRef);
  }
}
