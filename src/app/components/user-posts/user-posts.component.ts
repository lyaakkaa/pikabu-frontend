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
  author_id!: number;
  searchText: string = '';


  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.author_id = this.route.snapshot.params['id'];
    this.postService.getPostsByAuthor(this.author_id).subscribe(posts => {
      this.posts = posts;
    });
  }

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
  }
}
