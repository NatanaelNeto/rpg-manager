import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { SessionComponent } from './pages/session/session.component';
import { DatabaseComponent } from './pages/database/database.component';
import { DatabaseMainComponent } from './pages/database/database-main/database-main.component';
import { DatabaseListComponent } from './pages/database/database-list/database-list.component';
import { DatabaseAddComponent } from './pages/database/database-add/database-add.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: 'session', component: SessionComponent },
      {
        path: 'database', component: DatabaseComponent, children: [
          { path: '', component: DatabaseMainComponent },
          { path: 'add', component: DatabaseAddComponent },
          { path: 'list', component: DatabaseListComponent },
          { path: 'edit', component: DatabaseListComponent },
          { path: 'delete', component: DatabaseListComponent },
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
