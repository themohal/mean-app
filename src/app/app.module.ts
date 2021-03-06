import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppHeaderComponent} from './header/header.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PostCreateComponent} from './posts/post-create/post-create.component';
import {FormsModule} from '@angular/forms';
import {MatInputModule,} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {AppPostList} from './posts/post-list/post-list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {PostService} from './posts/post.service';
import {MatDialogModule} from '@angular/material/dialog';
import {PostEditComponent} from './dialogs/edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    AppHeaderComponent,
    AppPostList,
    PostEditComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
  ],
  providers: [PostService],
  bootstrap: [AppComponent]

})
export class AppModule { }
