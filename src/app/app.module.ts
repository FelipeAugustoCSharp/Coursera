import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderStandardComponent } from './components/header-standard/header-standard.component';
import { ComponentsModule } from './components/components.module';
import { HeaderUsuarioComponent } from './components/header-usuario/header-usuario.component';
import { UsuarioService } from './services/usuario.service';
import { HeaderComponent } from './components/templates/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderStandardComponent,
    HeaderUsuarioComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
