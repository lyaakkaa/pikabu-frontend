import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { LoginMenuComponent } from './components/login-menu/login-menu.component';
import { PostComponent } from './components/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { PostCommentsComponent } from './components/post-comments/post-comments.component';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostListComponent,
    LoginMenuComponent,
    PostComponent,
    PostCommentsComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
