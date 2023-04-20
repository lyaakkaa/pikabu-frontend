import { Component, Input, OnInit } from '@angular/core';
import { IComment } from 'src/app/models/models';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit{
  username: string | null = ''
  ngOnInit(): void {
    this.username = localStorage.getItem('username')
  }
  @Input() comment: IComment;

  upvote() {
    this.comment.comment_likes++;
  }

  downvote() {
    if(this.comment.comment_likes > 0){
      this.comment.comment_likes--;
    }
  }
}
