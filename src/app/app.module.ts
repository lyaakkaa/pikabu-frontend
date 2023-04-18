import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { LoginMenuComponent } from './components/login-menu/login-menu.component';
import { PostComponent } from './components/post/post.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { PostCommentsComponent } from './components/post-comments/post-comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { FormsModule } from '@angular/forms';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { BestPostListComponent } from './components/best-post-list/best-post-list.component';
import { NewPostListComponent } from './components/new-post-list/new-post-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthInterceptor} from "./interceptors/auth-interceptor";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostListComponent,
    LoginMenuComponent,
    PostComponent,
    PostCommentsComponent,
    CommentComponent,
    CommentFormComponent,
    PostFormComponent,
    BestPostListComponent,
    NewPostListComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
