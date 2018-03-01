import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
import { Thread } from '../../models/Thread';
import { ThreadService } from '../../services/thread.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts: Post[];
  public postToCreate: Post;
  public users: User[];
  public threads: Thread[];

  constructor(private postService: PostService,
    private userService: UserService,
    private threadService: ThreadService) {
    this.postToCreate = {};
  }

  ngOnInit() {
    this.postService.get().subscribe(result => {
      this.posts = result;
    }, error => console.log(error));
    this.userService.get().subscribe(result => {
      this.users = result;
    }, error => console.log(error));
    this.threadService.get().subscribe(result => {
      this.threads = result;
    }, error => console.log(error));
  }

  public createPost(): void {
    this.postService.post(this.postToCreate).subscribe(result => {
      this.posts.push(result);
    }, error => console.log(error));
  }

}
