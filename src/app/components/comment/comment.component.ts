import { Component, Input, OnInit } from '@angular/core';
import {IComment, IPost} from 'src/app/models/models';
import {CommentService} from "../../services/comment-service";
import {ActivatedRoute, Router} from "@angular/router";
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {PostService} from "../../services/post-service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit{
  username: string | null = ''
  @Input() comment: IComment;
  post_id!: number;
  post: IPost;
  faTrashAlt = faTrashAlt;
  comments: IComment[] = [];



  constructor(private commentService: CommentService, private route: ActivatedRoute, private router : Router, private postService: PostService,) {
  }

  ngOnInit(): void {
    this.post_id = this.route.snapshot.params['id'];
    this.postService.getPostDetail(this.post_id.toString()).subscribe((data)=>{
      this.post = data;
    });

    this.username = localStorage.getItem('username')
  }



  isEditable(): boolean {
    let currentId = localStorage.getItem('id');
    let currentRole = localStorage.getItem('role');
    if (currentId == null) return false;
    let numberCurrentId = +currentId;
    // console.log(currentRole)

    return currentRole == 'admin' || numberCurrentId == this.comment.author || this.post.author == numberCurrentId;
  }




  upvote(): void {
    this.comment.comment_likes++;
    this.commentService.updateComment(this.post_id, this.comment).subscribe(comment => {
      this.comment = comment;
    });
  }

  downvote() {
    if(this.comment.comment_likes > 0){
      this.comment.comment_likes--;
      this.commentService.updateComment(this.post_id, this.comment).subscribe(comment => {
        this.comment = comment;
      });
    }
  }
  deleteComment() {
    this.commentService.deleteComment(this.post_id, this.comment.id).subscribe(() => {
      this.comments = this.comments.filter((comment) => comment.id !== comment.id);
    });
  }
}
