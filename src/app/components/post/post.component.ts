import {Component, Input, OnInit} from '@angular/core';
import {IPost, IUser} from 'src/app/models/models';
import { PostService } from 'src/app/services/post-service';
import {Router} from "@angular/router";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {UsersService} from "../../services/users.service";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  faTrashAlt = faTrashAlt;
  @Input() post: IPost;
  posts: IPost[] = [];
  author: IUser | undefined;




  constructor(private router : Router,private postService: PostService, private usersService: UsersService){}

  ngOnInit(): void {
    // this.usersService.getUser(this.post.author.id).subscribe((data)=>{
    //   console.log(data)
    //   this.author= data;
    // })
  }


  upvote(): void {
    this.post.post_likes++;
    this.postService.updatePost(this.post).subscribe(post => {
      this.post = post;
      console.log(post)
    })
  }

  downvote() {
    if(this.post.post_likes > 0){
      this.post.post_likes--;
      this.postService.updatePost(this.post).subscribe(post => {
        this.post = post;
        console.log(post)
      })
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
