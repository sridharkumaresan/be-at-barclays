import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-square-progress',
  templateUrl: './square-progress.component.html',
  styleUrls: ['./square-progress.component.scss']
})
export class SquareProgressComponent {
  @Output() animationCompleted = new EventEmitter<void>(); // Define EventEmitter for notifying parent component
  @Input() animationDuration: number = 2; // Set default animation duration to 2 seconds
  
  onAnimationEnd(): void {
    this.animationCompleted.emit(); // Notify parent component when animation is completed
  }
}
