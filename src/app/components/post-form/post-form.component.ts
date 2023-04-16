import { Component } from '@angular/core';
// import {IPost, IUser} from "../../models/models";
// import {PostService} from "../../services/post-service";


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  // postTitle: string = '';
  // postContent: string = '';
  //
  // constructor(private postService: PostService) {
  // }

  // onSubmit() {
  //   const author: IUser = {id: 1, username: 'example_user', password: 'password'};
  //   const newPost: IPost = {
  //     id: 0, // Assign a default or temporary value here
  //     author: {id: 1, username: 'example_user', password: 'password'},
  //     created_date: new Date(),
  //     title: this.postTitle,
  //     body: this.postContent,
  //     post_likes: 0, // Assign a default or temporary value here
  //     post_comments: 0, // Assign a default or temporary value here
  //     comments: [] // Assign an empty array here
  //   };
  //   this.postService.createPost(newPost).subscribe(() => {
  //     console.log('Post created successfully!');
  //   });
  // }
}
