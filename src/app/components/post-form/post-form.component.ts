import {Component, OnInit} from '@angular/core';
import {PostService} from "../../services/post-service";
import {Router} from "@angular/router";
import {ICategory, IPost, IUser} from "../../models/models";
import {CategoryService} from "../../services/category.service";


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements  OnInit{
  title: string = '';
  postText: string = '';
  categories: ICategory[];
  selectedCategory: ICategory | null;

  constructor(private postService: PostService, private categoryService: CategoryService,) {
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  createPost(): void {
    this.title = this.title.trim();
    this.postText = this.postText.trim();
    if (!this.title || !this.postText || !this.selectedCategory) {
      window.alert('Post title and content shouldn\'t be empty, and you should select the category!');
      return;
    }
    const data = {
      title: this.title,
      body: this.postText,
      author:  localStorage.getItem('id'),
      category: this.selectedCategory.id,
      post_likes: 0,
      created_date: (new Date()).toISOString(),
    };
    this.postService.createPost(data).subscribe(post => {
      this.title = '';
      this.postText = '';
      this.selectedCategory = null;
    });
    window.alert("Successfully added");
  }


}
