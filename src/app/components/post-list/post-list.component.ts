import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
