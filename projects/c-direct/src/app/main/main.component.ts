import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public timers: { key: string; complete: boolean }[] = [];

  ngOnInit() {
    this.setup();
  }

  timerDone(timer: any) {
    this.timers[this.timers.findIndex((el) => el.key === timer.timerId)] = {
      key: timer.timerId,
      complete: true,
    };
  }

  setup() {
    for (let i = 0; i < 5; i++) {
      this.timers.push({ key: self.crypto.randomUUID(), complete: false });
    }
  }
  animationCompleted() {
    console.log('Completed ');
  }
}
