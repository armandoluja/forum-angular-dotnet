import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router/';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../models/Comment';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  public post: Post;
  public postId: number;
  public commentToCreate: Comment;
  public comments: Comment[];

  constructor(private postService: PostService, private route: ActivatedRoute, private commentService: CommentService) {
    this.commentToCreate = {};
  }

  ngOnInit() {
    try {
      this.postId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
      this.loadPost(this.postId);
    } catch (e) {
      console.log(e);
    }
  }

  private loadPost(postId: number): void {
    this.postService.getById(postId).subscribe(result => {
      this.post = result;
    }, error => console.log(error));

    this.commentService.getCommentsForPost(postId).subscribe(result => {
      this.comments = result;
    }, error => {
      this.comments = [];
      console.log(error);
    });
  }

  public addComment(): void {
    this.commentToCreate.postId = this.postId;
    this.commentToCreate.userId = 1;

    this.commentService.post(this.commentToCreate).subscribe(result => {
      this.comments.push(result);
    }, error => {
      console.log(error);
    });
  }
}
