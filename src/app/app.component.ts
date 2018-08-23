import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Focus-IT';
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyBk-KqV3hZ0GaJFB9Hnb0g92F4DXMY-Wqg",
      authDomain: "focus-33a95.firebaseapp.com",
    })
  }
}
