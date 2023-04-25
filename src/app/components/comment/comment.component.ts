import { Component, Input, OnInit } from '@angular/core';
import { IComment } from 'src/app/models/models';
import {CommentService} from "../../services/comment-service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit{
  username: string | null = ''
  @Input() comment: IComment;
  post_id!: number;

  constructor(private commentService: CommentService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.post_id = this.route.snapshot.params['id'];
    this.username = localStorage.getItem('username')
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
}
