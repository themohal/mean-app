import {Component,OnInit, Inject, OnDestroy} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostService} from '../posts/post.service'

import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { Post } from '../posts/post.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-post-edit',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class PostEditComponent implements OnInit,OnDestroy{

  id:string;
  public title:string;
  public content:string;
  public posts:Post [] = [];
  private postSub:Subscription ;
  private getOnePostSub:Subscription;
  private postUpdateSub:Subscription;
  public titleDb : string;
  public contentDb: string;



  constructor(

    public postService:PostService,
    public dialogRef:MatDialogRef<PostEditComponent>,
    //to recevie data
    @Inject(MAT_DIALOG_DATA) data)
    {
      this.id = data.id as string;

     this.getOnePostSub= this.postService.getOnePost(this.id).subscribe((posts)=>{
        console.log("Got Data: ",posts);
         this.posts = posts.post;

        //editPost.setValue([{title:this.title}])
      })

  }

  onSavePost(editPost:NgForm){

    if (editPost.invalid){
      return;
    }
    if(this.posts['title']!= editPost.value.title || this.posts['content']!= editPost.value.content ){
      this.posts['title'] = editPost.value.title;
      this.posts['content'] = editPost.value.content;
    this.postUpdateSub=this.postService.updatePost(this.id,this.posts['title'],this.posts['content']).subscribe((dataUpdate)=>{
      console.log("Data Update: "+dataUpdate)
    });
    this.dialogRef.close();
    }
    this.postService.getPosts();
    this.postSub=this.postService.getPostUpdateListener()
    .subscribe((posts:Post[])=>{
      this.posts = posts;

    });


  }
  ngOnInit(){

  }

  onCancel(){
    this.dialogRef.close();
    if (!this.getOnePostSub.closed ){

    this.getOnePostSub.unsubscribe();
    }

  }
ngOnDestroy(){
  if (this.postSub!=undefined ||this.postUpdateSub!=undefined){

    this.postSub.unsubscribe();
    this.postUpdateSub.unsubscribe();
    }
}
}
