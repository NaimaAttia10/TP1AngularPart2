import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { DetailCvComponent } from './detail-cv/detail-cv.component';
import { ItemComponent } from './item/item.component';
import { EmbaucheComponent } from './embauche/embauche.component';
import { DefaultImagePipe } from './pipe/default-image.pipe';
import { FrontComponent } from './components/front/front.component';
import { HomeComponent } from './components/home/home.component';
import { Nf404Component } from './components/nf404/nf404.component';
import { RouterParamComponent } from './components/router-param/router-param.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListComponent,
    CardComponent,
    DetailCvComponent,
    ItemComponent,
    EmbaucheComponent,
    DefaultImagePipe,
    FrontComponent,
    HomeComponent,
    Nf404Component,
    RouterParamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
