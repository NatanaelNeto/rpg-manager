import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SessionComponent } from './pages/session/session.component';
import { SessionSidebarComponent } from './components/session-sidebar/session-sidebar.component';
import { DatabaseComponent } from './pages/database/database.component';
import { DatabaseMainComponent } from './pages/database/database-main/database-main.component';
import { DatabaseListComponent } from './pages/database/database-list/database-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';


import { SexPipe } from './pipes/sex.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatabaseAddComponent } from './pages/database/database-add/database-add.component';
import { FormsModule } from '@angular/forms';
import { AddEquipComponent } from './pages/database/database-add/add-equip/add-equip.component';
import { AddAbilityComponent } from './pages/database/database-add/add-ability/add-ability.component';
import { AlertComponent } from './components/alert/alert.component';
import { DatabaseEditComponent } from './pages/database/database-edit/database-edit.component';
import { EditComponent } from './components/edit/edit.component';
import { DatabaseDeleteComponent } from './pages/database/database-delete/database-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    AlertComponent,
    SessionComponent,
    SessionSidebarComponent,
    DatabaseComponent,
    DatabaseMainComponent,
    DatabaseListComponent,
    DatabaseAddComponent,
    DatabaseEditComponent,
    DatabaseDeleteComponent,
    AddEquipComponent,
    AddAbilityComponent,
    EditComponent,
    SexPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
