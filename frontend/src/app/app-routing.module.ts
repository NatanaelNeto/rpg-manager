import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { SessionComponent } from './pages/session/session.component';
import { DatabaseComponent } from './pages/database/database.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: 'session', component: SessionComponent },
      { path: 'database', component: DatabaseComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
