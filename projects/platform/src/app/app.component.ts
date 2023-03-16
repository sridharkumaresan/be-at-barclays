import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from './shared/services';
import { Subject, takeUntil } from 'rxjs';
import { THEME } from './shared/data/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {

  public get themes() {
    return THEME;
  }
  @HostBinding('class') public cssClass!: THEME;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(readonly themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.theme
      .pipe(takeUntil(this.destroy$))
      .subscribe((theme) => {
        this.cssClass = theme;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  changeTheme(theme: THEME) {
    this.themeService.theme.next(theme);
  }
}
