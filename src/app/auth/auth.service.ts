import {
  Injectable
} from '@angular/core';
import * as firebase from 'firebase';
import {
  ToastrService
} from 'ngx-toastr';
import {
  Router
} from '@angular/router';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  admin: string;
  token: string;
  signUp(email: string, password: string) {
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(data => {
        this.signIn(email, password);
      })
      .catch(err => {
        this.toastr.error(err.message, 'Warning');
      });
  }

  signIn(email: string, password: string) {
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(data => {
        firebase.auth()
          .currentUser
          .getIdToken()
          .then((token: string) => {
            this.token = token;
          });
        this.router.navigate(['status']);
        this.toastr.success('Successfully logged in', 'Success');
      })
      .catch(err => {
        this.toastr.error(err.message, 'Warning');
      });
  }
  logout() {
    firebase.auth().signOut().then(() => {
      this.router.navigate(['auth/signin']);
      this.toastr.success('Successfully logged out', 'Success');
      this.token = null;
    });
  }

  getToken() {
    firebase.auth()
      .currentUser
      .getIdToken()
      .then((token: string) => {
        this.token = token;
      });
    return this.token;
  }

  isAuthenticated(): boolean {
    return this.token != null;
  }
  isAdmin(): boolean {
    return this.getUser() === this.admin
  }
  getUser() {
    return firebase.auth().currentUser.email
  }
  constructor(
    private toastr: ToastrService,
    private router: Router
  ) {
    this.admin = 'minimaanima@gmail.com';
  }
}
