import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { ArtComponent } from 'src/app/art/art.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'art', component: ArtComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
