import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ProgressComponent } from './components';
import { MaterialExampleModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { ProgressAnimationDirective } from './components/progress/progress-animation.directive';
import { CardComponent } from './components/card/card.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { SquareProgressComponent } from './components/square-progress/square-progress.component';
import { ImageLazyLoadDirective } from './directives';

@NgModule({
  declarations: [
    MainComponent,
    ProgressComponent,
    ProgressAnimationDirective,
    CardComponent,
    CardsListComponent,
    SquareProgressComponent,
    ImageLazyLoadDirective,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialExampleModule,
    FormsModule,
    NgOptimizedImage,
  ],
  exports: [ProgressComponent],
})
export class CDirectMainModule {}
