import { Component, Input } from '@angular/core';
import { IPost } from 'src/app/models/models';
import { PostService } from 'src/app/services/post-service';
import {Router} from "@angular/router";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  faTrashAlt = faTrashAlt;
  @Input() post: IPost;
  posts: IPost[] = [];

  constructor(private router : Router,private postService: PostService){}

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
  deletePost(post_id: number) {
    this.postService.deletePost(post_id).subscribe(() => {
      this.posts = this.posts.filter((post) => post.id !== post_id);
    });
  }
}
