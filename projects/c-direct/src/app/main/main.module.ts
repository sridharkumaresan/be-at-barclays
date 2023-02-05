import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ProgressComponent } from './components';
import { MaterialExampleModule } from '../material/material.module';
import {FormsModule} from "@angular/forms";
import { ProgressAnimationDirective } from './components/progress/progress-animation.directive';

@NgModule({
  declarations: [MainComponent, ProgressComponent, ProgressAnimationDirective],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialExampleModule,
    FormsModule,
  ],
  exports: [ProgressComponent],
})
export class CDirectMainModule {}
