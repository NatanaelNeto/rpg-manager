import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { SessionComponent } from './pages/session/session.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: 'session', component: SessionComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
