import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userNameKey: string = "userName";
  userIdKey: string = "userId";
  JWTTokeyKey: string = "jwtToken";
  userEmailIdKey: string = "userEmail";
  constructor() { }
  saveUserName(userName: string) {
    localStorage.setItem(this.userNameKey, userName);
  }
  saveUserId(userId: string) {
    localStorage.setItem(this.userIdKey, userId);
  }
  saveUserEmail(userEmail: string) {
    localStorage.setItem(this.userEmailIdKey, userEmail);
  }
  saveJWTToken(token) {
    localStorage.setItem(this.JWTTokeyKey, token);
  }
  getUserName() {
    return localStorage.getItem(this.userNameKey);
  }
  getUserId() {
    return localStorage.getItem(this.userIdKey);
  }
  getUserEmail() {
    return localStorage.getItem(this.userEmailIdKey);
  }
  getJWTToken() {
    return localStorage.getItem(this.JWTTokeyKey);
  }
  removeUserName() {
    localStorage.removeItem(this.userNameKey);
  }
  removeUserId() {
    localStorage.removeItem(this.userIdKey);
  }
  removeUserEmail() {
    localStorage.removeItem(this.userEmailIdKey);
  }
  removeJWTToken() {
    localStorage.removeItem(this.JWTTokeyKey);
  }
  removeAll() {
    localStorage.clear();
  }

}
