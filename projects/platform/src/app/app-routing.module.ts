import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { ModuleLoadingStrategyService } from './module-loading-strategy.service';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: MainComponent,
  },
  {
    path: 'one-employee',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        type: 'module',
        exposedModule: './OneEmployeeModule',
      }).then((m) => {
        return m.OneEmployeeMainModule;
      }),
    data: { preload: true, loadAfterSeconds: 5 }
  },
  {
    path: 'colleague-direct',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        type: 'module',
        exposedModule: './CDirectModule',
      }).then((m) => {
        return m.CDirectMainModule;
      }),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: ModuleLoadingStrategyService,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
