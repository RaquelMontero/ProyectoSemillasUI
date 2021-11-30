import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { SocialUser } from "angularx-social-login";
import { TokenDto } from 'src/app/models/token-dto';
import { OauthService } from 'src/app/services/auth/oauth.service';
import { TokenService } from 'src/app/services/auth/token.service';
import { LoadscriptsService } from 'src/app/services/auth/loadscripts.service';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userLogged: SocialUser;
  loggedIn: boolean = false;

  constructor(
    private authService: SocialAuthService,
    private router: Router,
    private tokenService: TokenService,
    private oauthService: OauthService,
  ) { }


  display = false;
  onPress() {
    this.display = !this.display;
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      data => {
        this.userLogged = data;
        const tokenGoogle = new TokenDto(this.userLogged.idToken);
        this.oauthService.google(tokenGoogle).subscribe(
          res => {
            this.tokenService.setToken(res.value);
            this.loggedIn = true;
            this.router.navigate(['/volunters']);
          },
          err => {
            console.log(err);
            this.logOut();
          }
        );
      }
    ).catch(
      err => {
        console.log(err);
      }
    );
  }

  logOut(): void {
    this.authService.signOut().then(
      data => {
        this.tokenService.logOut();
        this.router.navigate(['/soyvoluntario']);
      }
    );
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((data) => {
      this.userLogged = data;
      //this.loggedIn = (this.userLogged != null);
      this.loggedIn = (this.userLogged != null && this.tokenService.getToken() != null);

    });
  }
}
