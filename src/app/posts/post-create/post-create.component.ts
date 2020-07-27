import {Component,/*EventEmitter,Output*/OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import {PostService} from  "src/app/posts/post.service";
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],


})
export class PostCreateComponent{
  enteredTitle = '';
  enteredContent = '';
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
this.postService.addPost(form.value.title,form.value.content);
form.resetForm();
}


}
