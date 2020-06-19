import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ViewCardsComponent } from './view-cards/view-cards.component';
import { ServicesComponent } from './services/services.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopupCardComponent } from './topup-card/topup-card.component';
import { LoginComponent } from './login/login.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CreateNewCardComponent } from './view-cards/create-new-card/create-new-card.component';
import { SuccessComponent } from './view-cards/create-new-card/success/success.component'
import {HttpClientModule} from '@angular/common/http'

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: '', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'viewCards', component: ViewCardsComponent ,
    children:[{path:'createNewCard', component: CreateNewCardComponent,
      children:[{path:'success', component: SuccessComponent}]}]},
  { path: 'topupCard', component: TopupCardComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ViewCardsComponent,
    TopupCardComponent,
    LoginComponent,
    CreateNewCardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BrowserModule, 
    FormsModule, 
    MatCheckboxModule, 
    MatTabsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }