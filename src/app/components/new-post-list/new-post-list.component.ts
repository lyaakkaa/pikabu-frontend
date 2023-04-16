import { Component } from '@angular/core';
import {IPost} from "../../models/models";
import {PostService} from "../../services/post-service";

@Component({
  selector: 'app-new-post-list',
  templateUrl: './new-post-list.component.html',
  styleUrls: ['./new-post-list.component.css']
})
export class NewPostListComponent {
  posts: IPost[];


  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPostsByCategoryId(4).subscribe((posts) => {
      this.posts = posts
    });
  }
}
