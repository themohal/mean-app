import { Component /*,Input*/,OnInit, OnDestroy} from '@angular/core';
import {Post} from '../post.model';
import {Subscription, config} from 'rxjs';
// import { MyService } from 'src/app/myservice.service';
import {PostService} from 'src/app/posts/post.service';
import {PostEditComponent} from '../../dialogs/edit-post.component';
//import dialog modal
import {MatDialog,MatDialogConfig} from '@angular/material/dialog'

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
deletePost(id:any) {

    this.postService.deletePost(id._id);
    this.ngOnInit()
    console.log("Delete Clicked:",id._id);
    //refreshing list

  }
  editPost(post:any){
    let idPost = post._id as string;
    const configDialog = new MatDialogConfig();
    configDialog.autoFocus=true;
    configDialog.disableClose=true;
    configDialog.data = {
      id: idPost,
      title: "Data",
  };

    //to open dialog window
    this.dialog.open(PostEditComponent,configDialog,);

  }
  constructor(
    public postService: PostService,
    //for modal dialog
    private dialog:MatDialog,
    ) {
  //   console.log(this.example)

  }

  ngOnInit(){
    /*this.posts =*/
    this.postService.getPosts();
    this.postSub=this.postService.getPostUpdateListener()
    .subscribe((posts:Post[])=>{
      this.posts = posts;

    });
  }
  ngOnDestroy(){
    this.postSub.unsubscribe();
  }

}
