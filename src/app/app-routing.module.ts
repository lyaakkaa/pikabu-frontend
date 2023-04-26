import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostCommentsComponent } from './components/post-comments/post-comments.component';
import { PostFormComponent } from "./components/post-form/post-form.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { UserInfoComponent } from "./components/user-info/user-info.component";

const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'best', component: PostListComponent },
  { path: 'new', component: PostListComponent },
  { path: 'search', component: SearchBarComponent },
  { path: 'posts/:id/comments', component: PostCommentsComponent },
  { path: 'post/add', component: PostFormComponent },
  { path: 'user-info', component: UserInfoComponent },
  { path: 'post/:id', component: PostFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
