import {Component, OnInit} from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'me-indica-landing-page';

  private firebaseConfig: any = {
    apiKey: 'AIzaSyA5vvUSGp6HmvdQEpY6KaKR8w-PAE8Gc2o',
    authDomain: 'me-indica-987a7.firebaseapp.com',
    databaseURL: 'https://me-indica-987a7.firebaseio.com',
    projectId: 'me-indica-987a7',
    storageBucket: 'me-indica-987a7.appspot.com',
    messagingSenderId: '357905692104',
    appId: '1:357905692104:web:f18930607d6053ad923cfd',
    measurementId: 'G-QZ9RKL91M4'
  };

  ngOnInit(): void {
    firebase.initializeApp(this.firebaseConfig);
  }
}
