import { Component, EventEmitter, Output, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { IComment, IUser } from 'src/app/models/models';
import { CommentService } from 'src/app/services/comment-service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent {
  @Input() postId: number;

  text: string = '';

  constructor(private commentService: CommentService) {
  }

  onSubmit() {
    this.commentService.createComment(this.postId, { 
      author: Number(localStorage.getItem('id')),
      created_date: (new Date()).toISOString(),
      text: this.text,
      comment_likes: 0,
      post: this.postId,
   }).subscribe((comment) => {
    console.log(comment);
   });
  }
}
