import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CentralStoreComponent } from './central-store/central-store.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path: '', redirectTo: "/home", pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'centralstore', component: CentralStoreComponent },
  { path: '**', component: PagenotfoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
