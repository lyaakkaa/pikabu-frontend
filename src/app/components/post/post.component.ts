import { Component, Input } from '@angular/core';
import { IPost } from 'src/app/models/models';
import { PostService } from 'src/app/services/post-service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post: IPost;

  constructor(private router : Router){}

  upvote() {
    this.post.post_likes++;
  }

  downvote() {
    if(this.post.post_likes > 0){
      this.post.post_likes--;
    }
  }
  listOfComments(post: IPost){
    this.router.navigate(['/posts', post.id, 'comments'])
  }
}
