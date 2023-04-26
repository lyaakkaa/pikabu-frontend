import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/models/models';
import { PostService } from 'src/app/services/post-service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: IPost[];
  searchText: string = '';





  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
      console.log(posts);
    });
  }

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    // console.log(this.searchText);
  }


}
