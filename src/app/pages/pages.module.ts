import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavSectionComponent } from './nav-section/nav-section.component';
import { ImgSectionComponent } from './img-section/img-section.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    MainComponent,
    NavSectionComponent,
    ImgSectionComponent
    
  ],

  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule
  ],

  exports: [

  ],

})

export class PagesModule {}
