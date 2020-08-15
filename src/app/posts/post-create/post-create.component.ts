import {Component,/*EventEmitter,Output*/OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import {PostService} from  "src/app/posts/post.service";
import {Post} from '../post.model';

import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],


})
export class PostCreateComponent{
  posts:Post[] = [];
  enteredTitle = '';
  enteredContent = '';
  private postSub:Subscription ;
  // @Output() postCreated = new EventEmitter<Post>();

  constructor(public postService:PostService){

  }
// onAddPost(postInput:HTMLTextAreaElement){
//     this.newPost = postInput.value;
//   }
onAddPost(form:NgForm){
  if (form.invalid){
    return;
  }
//const post:Post = {title:form.value.title,content:form.value.content};
// this.postCreated.emit(post);
 //adding to list



 this.postService.addPost(form.value.title,form.value.content);
 this.postService.getPosts();
 this.postSub=this.postService.getPostUpdateListener()
    .subscribe((posts:Post[])=>{
      this.posts = posts;

    });
form.resetForm();

}


}
