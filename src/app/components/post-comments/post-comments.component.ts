import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComment } from 'src/app/models/models';
import { CommentService } from 'src/app/services/comment-service';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent {
  comments: IComment[];
  private postId: number;

  constructor(private commentService: CommentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.postId = parseInt(this.route.snapshot.paramMap.get('id') ?? '0');

    this.commentService.getCommentsByPostId(this.postId).subscribe((comments) => {
      this.comments = comments
    });
  }
}
