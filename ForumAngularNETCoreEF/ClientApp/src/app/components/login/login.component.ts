import { Component, OnInit } from '@angular/core';

// imports above
declare var window: any;
declare var FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userName = 'Please login';

  constructor() {
    // This function initializes the FB variable
    (function(d, s, id) {
      let js;
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    window.fbAsyncInit = () => {
      console.log('fbasyncinit');

      FB.init({
          appId            : '2011498012402141',
          autoLogAppEvents : true,
          xfbml            : true,
          version          : 'v2.10'
      });
      FB.AppEvents.logPageView();
      // This is where we do most of our code dealing with the FB variable like adding an observer to check when the user signs in
      FB.Event.subscribe('auth.statusChange', () => console.log('status change!'));
    };
  }

  ngOnInit() {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }

  public checkLoginState(): void {
    window.FB.getLoginStatus(response => {
      this.statusChangeCallback(response);
    });
  }

  public testAPI(): void {
    console.log('Welcome!  Fetching your information.... ');
    window.FB.api('/me', response => {
      // use the response variable to get any information about the user and to see the tokens about the users session
      console.log('Successful login for: ' + response.name);
      this.userName = response.name;
    });
  }

  public statusChangeCallback(response): void {
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
      this.testAPI();
    } else {
      this.userName = 'Please log into this app';
    }
  }
}
