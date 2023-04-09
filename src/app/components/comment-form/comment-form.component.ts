import { Component, EventEmitter, Output, OnInit, ChangeDetectorRef } from '@angular/core';
import { IComment, IUser } from 'src/app/models/models';
import { CommentService } from 'src/app/services/comment_service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent{
  @Output() commentCreated = new EventEmitter<IComment>();

  author: string = '';
  text: string = '';

  constructor() { }

  onSubmit() {
    const author: IUser = {
      id: 0, 
      username: this.author,
      password: '' 
    };
    const comment: IComment = {
      id: 0, 
      author,
      created_date: new Date(),
      text: this.text,
      comment_likes: 0 
    };
    this.commentCreated.emit(comment);
    this.author = '';
    this.text = '';
  }
}
