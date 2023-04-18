import { Component } from '@angular/core';
import {PostService} from "../../services/post-service";
import {Router} from "@angular/router";
import {IPost, IUser} from "../../models/models";
// import {IPost, IUser} from "../../models/models";
// import {PostService} from "../../services/post-service";


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  title: string = '';
  postText: string = '';
  message: string = 'hello';
  author: IUser = {
    id: 0,
    username: 'userr',
    password: 'password'
  };

  constructor(private postService: PostService) {
  }

  onSubmit() {
    // const author: IUser = {id: 1, username: 'example_user', password: 'password'};
    // const newPost: IPost = {
    //   id: 0, // Assign a default or temporary value here
    //   author: {id: 1, username: 'example_user', password: 'password'},
    //   created_date: new Date(),
    //   title: this.postTitle,
    //   body: this.postContent,
    //   post_likes: 0, // Assign a default or temporary value here
    //   post_comments: 0, // Assign a default or temporary value here
    //   comments: [] // Assign an empty array here
    // };
    // this.postService.createPost(newPost).subscribe(() => {
    //   console.log('Post created successfully!');
    // });
    // console.log()
  }



  createPost(): void {
    this.title = this.title.trim();
    this.postText = this.postText.trim();
    if (!this.title || !this.postText) {
      this.message = 'Post title and content shouldn\'t be empty, and you should select the topic!';
      return;
    }

    // TODO add post-creation interface
    const data = {
      title: this.title,
      body: this.postText,
      author:  this.author,
      category: 1
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
