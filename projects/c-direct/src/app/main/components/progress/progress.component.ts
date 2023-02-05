import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { Subject, takeUntil, timer } from 'rxjs';
import { ProgressState, timerData, TimerDone } from './data';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent implements OnDestroy {
  @Input() timerId: string = self.crypto.randomUUID();
  @Input() timer: number = timerData[ProgressState.START];
  @Output() timerDone: EventEmitter<TimerDone> = new EventEmitter<TimerDone>();
  public initAnimation!: boolean;
  private unsubscribe$ = new Subject<boolean>();

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  public start(timerId?: string): void {
    timer(this.timer * 1000)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => {
        this.initAnimation = false;
        this.timerDone.emit({
          timerId: timerId || this.timerId,
          complete: true,
        } as TimerDone);
      });
    this.initAnimation = true;
  }
}
