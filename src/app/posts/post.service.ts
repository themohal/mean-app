
import {Post} from './post.model';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';


//insted of writing provider for service in app.module.ts u can use injectable
@Injectable({providedIn:'root'})
export class PostService {


  private posts:Post[] = [];
  private postUpdated = new Subject<Post[]> ();
  constructor(private http:HttpClient){}
  getPosts(){
  // return [...this.posts]; //copying array
    this.http.get<{post:Post[]}>('https://gifted-curie-c341f6.netlify.app//api/posts')
    .subscribe((postData)=>{
      this.posts = postData.post;
      this.postUpdated.next([...this.posts]);
    });
  }
  getPostUpdateListener(){
    return this.postUpdated.asObservable();
  }
  addPost(title:string,content:string):void{
    const post:Post = {id:null,title:title,content:content};
    this.http.post<{message:string}>('https://gifted-curie-c341f6.netlify.app//api/posts',post)
    .subscribe((responseData)=>{
      console.log(responseData.message);
      this.getPosts();
    });
    this.posts.push(post);
      this.postUpdated.next([...this.posts]);
  }
  deletePost(id:string){
    this.http.delete<{message:any}>("https://gifted-curie-c341f6.netlify.app/api/posts/"+id).subscribe((data)=>{
      console.log(data);
    this.getPosts();
    });
  }
  getOnePost(id:string){
    return this.http.get<{post:Post[]}>("https://gifted-curie-c341f6.netlify.app/api/posts/"+id);

  }
  updatePost(id:string,title:string,content:string){
    const post:Post = {id:id,title:title,content:content};
    return this.http.put("https://gifted-curie-c341f6.netlify.app/api/posts/"+post.id,post);
   //console.log("OnSave: " +posts.title)
  }
}
