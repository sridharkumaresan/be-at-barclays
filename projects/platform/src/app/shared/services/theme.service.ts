import { ApplicationRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { THEME } from '../data/theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public themes: THEME[] = Object.values(THEME);
  public theme: BehaviorSubject<THEME> = new BehaviorSubject<THEME>(
    THEME.LIGHT_THEME
  );

  constructor(private ref: ApplicationRef) {
    const darkModeOn =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (darkModeOn) {
      this.theme.next(THEME.DARK_THEME);
    }

    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    mql.addEventListener('change', (e) => {
      const turnOn = e.matches;
      this.theme.next(turnOn ? THEME.DARK_THEME : THEME.LIGHT_THEME);
      this.ref.tick();
    });
  }
}
