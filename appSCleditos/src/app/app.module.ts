import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmmitterService } from './services/emitter/emitter.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 
import { LoginModule } from './login/login.module';
import { ReportModule } from "./report/report.module";

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,CommonModule,
    LoginModule,
    ReportModule
  ],
  providers: [EmmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
