import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IComment } from '../models/models';

@Injectable({
    providedIn: 'root'
})
export class CommentService {

  BASE_URL = ' http://127.0.0.1:8000';


  constructor(private client: HttpClient) { }

    // getCommentsByPostId(postId: number): Observable<IComment[]> {
    //     const comments: IComment[] = [];
    //
    //     for (let i = 1; i <= 100; i++) {
    //         const comment: IComment = {
    //             id: i,
    //             author: { id: i, username: `user${i}`, password: `qwerty${i}` },
    //             created_date: new Date(),
    //             text: `This is comment ${i} on post ${postId}`,
    //             comment_likes: 0
    //         };
    //         comments.push(comment);
    //     }
    //
    //     return new Observable<IComment[]>(observer => {
    //         observer.next(comments);
    //         observer.complete();
    //     });
    // }

  getComments(id: number): Observable<IComment[]>{
    return this.client.get<IComment[]>(`${this.BASE_URL}/api/posts/${id}/comments/`);
  }

  createComment(id: number, comment: IComment): Observable<any>{
    return this.client.post(`${this.BASE_URL}/api/posts/${id}/comments/`, comment);
  }

  updateComment(id: number, comment: IComment): Observable<any>{
    return this.client.put(`${this.BASE_URL}/api/posts/${id}/comments/${comment.id}/`, comment);
  }

  deleteComment(id: number, commentId: number): Observable<any>{
    return this.client.delete(`${this.BASE_URL}/api/posts/${id}/comments/${commentId}/`);
  }


}
