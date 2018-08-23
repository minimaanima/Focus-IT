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


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  signUp(email: string, password: string) {
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(data => {
        this.router.navigate(['auth/signin'])
        this.toastr.success('Successfully registered', 'Success')
      })
      .catch(err => {
        this.toastr.error(err.message, 'Warning')
      })
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
          })
        this.router.navigate(['status'])
        this.toastr.success('Successfully logged in', 'Success')
      })
      .catch(err => {
        this.toastr.error(err.message, 'Warning')
      })
  }
  logout() {
    firebase.auth().signOut().then(() => {
      this.router.navigate(['auth/signin']);
      this.toastr.success('Successfully logged out', 'Success');
      this.token = null;
    })
  }

  getToken() {
    firebase.auth()
      .currentUser
      .getIdToken()
      .then((token: string) => {
        this.token = token;
      })
    return this.token
  }

  isAuthenticated(): boolean {
    return this.token != null;
  }

  constructor(
    private toastr: ToastrService,
    private router: Router
  ) {}
}
