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

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    SessionComponent,
    SessionSidebarComponent,
    DatabaseComponent,
    DatabaseMainComponent,
    DatabaseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
