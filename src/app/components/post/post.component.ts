import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPost, IUser} from 'src/app/models/models';
import { PostService } from 'src/app/services/post-service';
import {Router} from "@angular/router";
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import {UsersService} from "../../services/users.service";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  @Input() post: IPost;
  @Output() postsChange = new EventEmitter<IPost[]>();
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;

  posts: IPost[] = [];
  user_id: number;
  user: IUser;

  editPost() {
    this.postService.setPostForEdit(this.post);
    this.router.navigate(['/post', this.post.id])
  }

  isEditable(): boolean {
    let currentId = localStorage.getItem('id');
    let currentRole = localStorage.getItem('role');
    if (currentId == null) return false;
    let numberCurrentId = +currentId;
    // console.log(currentRole)

    return numberCurrentId == this.post.author || currentRole == 'admin';
  }


  constructor(private router : Router,private postService: PostService, private usersService: UsersService){}

  ngOnInit(): void {

  }


  upvote(): void {
    this.post.post_likes++;
    this.postService.updatePost(this.post, this.post.id).subscribe(post => {
      this.post = post;
    })
  }

  downvote() {
    if(this.post.post_likes > 0){
      this.post.post_likes--;
      this.postService.updatePost(this.post, this.post.id).subscribe(post => {
        this.post = post;
      })
    }
  }
  listOfComments(post: IPost){
    this.router.navigate(['/posts', post.id, 'comments'])
  }
  deletePost(post_id: number) {
    this.postService.deletePost(post_id).subscribe(() => {
      this.posts = this.posts.filter((post) => post.id !== post_id);
    });
  }
  filterByAuthor(authorId: number) {
    this.router.navigate(['/users', authorId, 'posts'])

  }
  onPostsChanged() {
    this.postsChange.emit(this.posts);
  }




}
