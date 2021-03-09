import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'



//Rutas
import { app_routing } from './app.routes'

//Servicios
import {TransactionsService } from './services/transactions.service'

//Componentes
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    FormsModule
    
  ],
  providers: [
    TransactionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
