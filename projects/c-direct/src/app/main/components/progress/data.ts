export enum ProgressState {
  'START' = 'start',
  'END' = 'end',
}

export const timerData = {
  [ProgressState.START]: 5,
  [ProgressState.END]: 0,
};
export const progressData = {
  [ProgressState.START]: {
    strokeDashOffset: '0',
  } as Animation,
  [ProgressState.END]: {
    strokeDashOffset: '360',
  } as Animation,
};

export interface Animation {
  strokeDashOffset: any;
}

export interface TimerDone {
  complete: boolean;
  timerId: string;
}
