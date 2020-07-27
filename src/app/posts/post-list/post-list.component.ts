import { Component /*,Input*/,OnInit, OnDestroy} from '@angular/core';
import {Post} from '../post.model';
import {Subscription} from 'rxjs';
// import { MyService } from 'src/app/myservice.service';
import {PostService} from 'src/app/posts/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})

export class AppPostList implements OnInit ,OnDestroy{
 /*@Input()*/ posts:Post[] = [
    // {title:'first post',content:'first post content'},
    // {title:'second post',content:'second post content'},
    // {title:'third post',content:'third post content'},
  ];
  // constructor(private example: MyService) {
  //   example.fromService()
  // //   console.log(this.example)
  // }
  private postSub:Subscription ;
  constructor(public postService: PostService) {
  //   console.log(this.example)
  }

  ngOnInit(){
    /*this.posts =*/this.postService.getPosts();
    this.postSub=this.postService.getPostUpdateListener()
    .subscribe((posts:Post[])=>{
      this.posts = posts;
    });
  }
  ngOnDestroy(){
    this.postSub.unsubscribe();
  }

}
