import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component'
import { PostComponent } from './components/post/post.component'

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: ':page', component: HomeComponent },
  {path: 'post', component: PostComponent },
  {path: 'post/:id', component: PostComponent },
  {path: 'postByOrder;sort=:sort', component: PostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
