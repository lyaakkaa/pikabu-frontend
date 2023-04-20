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

  getComments(id: number): Observable<IComment[]>{
    return this.client.get<IComment[]>(`${this.BASE_URL}/api/posts/${id}/comments/`);
  }

  createComment(id: number, comment: object): Observable<any> {
    return this.client.post(`${this.BASE_URL}/api/posts/${id}/comments/`, comment);
  }

  updateComment(id: number, comment: IComment): Observable<any>{
    return this.client.put(`${this.BASE_URL}/api/posts/${id}/comments/${comment.id}/`, comment);
  }

  deleteComment(id: number, commentId: number): Observable<any>{
    return this.client.delete(`${this.BASE_URL}/api/posts/${id}/comments/${commentId}/`);
  }
}
