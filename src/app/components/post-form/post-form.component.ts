import { Component, OnInit } from '@angular/core';
import { PostService } from "../../services/post-service";
import { Router, UrlSegment } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

import { ICategory, IPost, IUser } from "../../models/models";
import { CategoryService } from "../../services/category.service";


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  title: string = '';
  postText: string = '';
  categories: ICategory[];
  selectedCategory: ICategory | undefined;
  private postForEdit: IPost | null;

  constructor(private postService: PostService, private categoryService: CategoryService, private route: ActivatedRoute) {
  }

  isEditing: boolean = false;

  ngOnInit(): void {
    this.getCategories();
    if (!this.route.snapshot.url.toString().includes('add')) {
      this.isEditing = true;
    }
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
      this.postForEdit = this.postService.getPostForEdit();
      if (this.postForEdit != null) {
        this.title = this.postForEdit.title;
        this.postText = this.postForEdit.body;
        this.selectedCategory = this.categories.find(category => category.id == this.postForEdit?.category);
      }
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
      author: localStorage.getItem('id'),
      category: this.selectedCategory.id,
      post_likes: 0,
      created_date: (new Date()).toISOString(),
    };
    this.postService.createPost(data).subscribe(post => {
      this.title = '';
      this.postText = '';
      this.selectedCategory = undefined;
    });
    window.alert("Successfully added");
  }

  editPost(): void {
    this.title = this.title.trim();
    this.postText = this.postText.trim();
    if (!this.title || !this.postText || !this.selectedCategory) {
      window.alert('Post title and content shouldn\'t be empty, and you should select the category!');
      return;
    }
    const data = {
      title: this.title,
      body: this.postText,
      author: this.postForEdit!.author,
      category: this.selectedCategory.id,
      post_likes: this.postForEdit!.post_likes,
      created_date: this.postForEdit!.created_date,
    };
    this.postService.updatePost(data, this.postForEdit!.id).subscribe(post => {
      this.title = '';
      this.postText = '';
      this.selectedCategory = undefined;
    });
    window.alert("Successfully edited");
  }
}
