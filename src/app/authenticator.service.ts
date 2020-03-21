import {UserModel} from './user.model';

import * as firebase from 'firebase';
import {Observable, Observer} from 'rxjs';

export class AuthenticatorService {
  public registerUser(user: UserModel): Observable<boolean> {
    return  Observable.create((observer: Observer<boolean>) => {
      firebase.database().ref(`user_detail/${btoa(user.theEmail)}`)
        .on('value',
          (answer: any) => {
            if (answer.val() === null) {
              firebase.database().ref(`user_detail/${btoa(user.theEmail)}`).set(user)
                .then(() => {
                  observer.next(true);
                });
            } else {
              observer.next(false);
            }
          });
    });
  }
}
