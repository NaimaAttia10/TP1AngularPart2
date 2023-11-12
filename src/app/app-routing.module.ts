import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './components/home/home.component';
import { RouterParamComponent } from './components/router-param/router-param.component';
import { FrontComponent } from './components/front/front.component';
import { Nf404Component } from './components/nf404/nf404.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: '', component:FrontComponent, children:[
    { path: 'cv', component: CvComponent },
    { path: 'route/:quelquechose', component: RouterParamComponent },
  ]},
    { path: '**', component: Nf404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
