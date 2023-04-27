import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../models/models";
import {PostService} from "../../services/post-service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit{
  posts: IPost[] = [];
  searchText: string = '';

  onPostsChange(posts: IPost[]) {
    this.posts = posts;
  }
  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let urlSegments = this.route.snapshot.url.toString().split('/');
    let currentCategory = urlSegments[urlSegments.length - 1];

    this.postService.getPosts(currentCategory).subscribe((posts) => {
      this.posts = posts;
    });
  }

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
  }
}
