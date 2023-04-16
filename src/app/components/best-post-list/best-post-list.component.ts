import { Component } from '@angular/core';
import {IPost} from "../../models/models";
import {PostService} from "../../services/post-service";

@Component({
  selector: 'app-best-post-list',
  templateUrl: './best-post-list.component.html',
  styleUrls: ['./best-post-list.component.css']
})
export class BestPostListComponent {
  posts: IPost[];


  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPostsByCategoryId(3).subscribe((posts) => {
      this.posts = posts
    });
  }
}
