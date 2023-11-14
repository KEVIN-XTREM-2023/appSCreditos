import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class EmmitterService {

  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  data = new EventEmitter();

  constructor() { }
  send(value: boolean) {
    this.data.emit(value);
  }

  private showUser: boolean = false;
  
  public setShowUser(flag: boolean) {
    this.showUser = flag;
  }

  public getShowUser(): boolean {
    return this.showUser;
  }

  }