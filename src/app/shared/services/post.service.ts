import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { POSTS } from '../mock-data/mock-post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts(): Post[] {
    return POSTS;
  }
}
