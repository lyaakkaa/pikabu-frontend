import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { IComment, IPost } from "../models/models";


@Injectable({
    providedIn: 'root'
})
export class PostService {

  BASE_URL = ' http://127.0.0.1:8000';


  constructor(private client: HttpClient) { }

    // getPosts(): Observable<IPost[]> {
    //     const posts: IPost[] = [];
    //
    //     for (let i = 1; i <= 100; i++) {
    //         const post: IPost = {
    //             id: i,
    //             author: { id: i, username: `user${i}`, password: `password${i}` },
    //             created_date: new Date(),
    //             title: `Post ${i}`,
    //             body: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
    //
    //             The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
    //             post_likes: 0,
    //             post_comments: 0,
    //             comments: []
    //         };
    //
    //         for (let j = 1; j <= 3; j++) {
    //             const comment: IComment = {
    //                 id: j,
    //                 author: { id: j, username: `user${j}`, password: `password${j}` },
    //                 created_date: new Date(),
    //                 text: `This is comment ${j} on post ${i}`,
    //                 comment_likes: 0
    //             };
    //             post.comments.push(comment);
    //         }
    //
    //         posts.push(post);
    //     }
    //
    //     return new Observable<IPost[]>(observer => {
    //         observer.next(posts);
    //         observer.complete();
    //     });
    // }

  getPosts(): Observable<IPost[]> {
    return this.client.get<IPost[]>(`${this.BASE_URL}/api/posts/`);
  }

  getPostDetail(id: string): Observable<IPost> {
    return this.client.get<IPost>(`${this.BASE_URL}/api/posts/${id}/`);
  }

  getPostsByCategoryId(id: any): Observable<IPost[]> {
    return this.client.get<IPost[]>(`${this.BASE_URL}/api/categories/${id}/posts/`);
  }
  getComments(id: string): Observable<IComment[]>{
    return this.client.get<IComment[]>(`${this.BASE_URL}/api/posts/${id}/comments/`);
  }

  createComment(id: string, comment: IComment): Observable<any>{
    return this.client.post(`${this.BASE_URL}/api/posts/${id}/comments/`, comment);
  }

  updateComment(id: string, comment: IComment): Observable<any>{
    return this.client.put(`${this.BASE_URL}/api/posts/${id}/comments/${comment.id}/`, comment);
  }

  deleteComment(id: string, commentId: number): Observable<any>{
    return this.client.delete(`${this.BASE_URL}/api/posts/${id}/comments/${commentId}/`);
  }


}
