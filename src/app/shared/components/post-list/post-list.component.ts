import { Component, OnInit, HostListener } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];
  innerWidth: number;
  innerHeight: number;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    this.posts = this.getPosts();
  }

  getPosts(): Post[] {
    return this.postService.getPosts();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    console.log(this.innerWidth);
    console.log(this.innerHeight);
  }
}
