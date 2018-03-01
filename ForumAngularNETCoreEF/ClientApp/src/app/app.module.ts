import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { UserService } from './services/user.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ThreadService } from './services/thread.service';
import { ThreadsComponent } from './components/threads/threads.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { CommentsComponent } from './components/comments/comments.component';
import { PostService } from './services/post.service';
import { CommentService } from './services/comment.service';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './services/interceptors/auth-intercepter';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    NavBarComponent,
    ThreadsComponent,
    PostsComponent,
    PostDetailComponent,
    CommentsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: 'BASE_URL', useFactory: getBaseUrl },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    UserService,
    ThreadService,
    PostService,
    CommentService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}
