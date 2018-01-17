import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import * as localforage from 'localforage';
import { Iuser } from './auth-interface';

@Injectable()

export class AuthService implements CanActivate {
	
	constructor() {}

  canActivate(): Promise<boolean> {

    return localforage.getItem('user')
			.then(auth => {
				let getUser: any = auth || {};
				return (!!getUser.userToken && !!getUser.permission) ? true : true;
			});
  }

}