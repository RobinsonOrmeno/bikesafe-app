import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootNavComponent } from './root-nav/root-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './pages/login/login.component';
import { ReviewComponent } from './pages/review/review.component';
import { AboutComponent } from './pages/about/about.component';
import { TermsConditionComponent } from './pages/terms-condition/terms-condition.component';
import { HomeComponent } from './pages/home/home.component';
import { ParkingComponent } from './pages/parking/parking.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PagosComponent } from './pages/pagos/pagos.component';

@NgModule({
  declarations: [
    AppComponent,
    RootNavComponent,
    LoginComponent,
    ReviewComponent,
    AboutComponent,
    TermsConditionComponent,
    HomeComponent,
    ParkingComponent,
    PerfilComponent,
    PagosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
