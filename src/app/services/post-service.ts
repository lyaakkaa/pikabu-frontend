import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { IPost } from "../models/models";
import { HttpParams } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PostService {

  BASE_URL = ' http://127.0.0.1:8000';

  constructor(private client: HttpClient) {
  }

  private postForEdit: IPost | null;

  setPostForEdit(post: IPost) {
    this.postForEdit = post;
  }

  getPostForEdit(): IPost | null {
    let postForReturn = this.postForEdit;
    this.postForEdit = null;
    return postForReturn;
  }

  getPosts(category: string): Observable<IPost[]> {
    if (category == '') {
      category = 'hot';
    }
    let params = new HttpParams().set('category', category);
    return this.client.get<IPost[]>(`${this.BASE_URL}/api/posts`, {params});
  }

  getPostDetail(id: string): Observable<IPost> {
    return this.client.get<IPost>(`${this.BASE_URL}/api/posts/${id}/`);
  }

  getPostsByCategoryId(id: number): Observable<IPost[]> {
    return this.client.get<IPost[]>(`${this.BASE_URL}/api/categories/${id}/posts/`);
  }
  getPostsByAuthor(authorId: number): Observable<IPost[]> {
    return this.client.get<IPost[]>(`${this.BASE_URL}/api/users/${authorId}/posts`);
  }

  deletePost(id: number): Observable<any> {
    return this.client.delete(
      `${this.BASE_URL}/api/posts/${id}`);
  }

  createPost(data: object): Observable<IPost> {
    return this.client.post<IPost>(`${this.BASE_URL}/api/posts/`, data);
  }

  updatePost(data: object, postId: number): Observable<IPost> {
    return this.client.put<IPost>(`${this.BASE_URL}/api/posts/${postId}/`, data);
  }

  likePost(data: Object): Observable<any> {
    return this.client.post(`${this.BASE_URL}/api/likes`, data);
  }
}
