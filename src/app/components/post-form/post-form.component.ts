import { Component } from '@angular/core';
import {PostService} from "../../services/post-service";
import {Router} from "@angular/router";
import {IPost, IUser} from "../../models/models";


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  title: string = '';
  postText: string = '';
  message: string = 'hello';

  constructor(private postService: PostService) {
  }

  createPost(): void {
    this.title = this.title.trim();
    this.postText = this.postText.trim();
    if (!this.title || !this.postText) {
      this.message = 'Post title and content shouldn\'t be empty, and you should select the topic!';
      return;
    }

    const data = {
      title: this.title,
      body: this.postText,
      author:  localStorage.getItem('id'),
      category: 0,
      post_likes: 0,
      created_date: (new Date()).toISOString(),
    };
    this.postService.createPost(data).subscribe(post => {
      this.message = `Post was created with id ${post.id}!`;
      this.title = '';
      this.postText = '';
    }, error => {
      this.message = error.message + (error.error ? ` (${JSON.stringify(error.error)})` : '');
    });
  }
}
