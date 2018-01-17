import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as localforage from 'localforage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
	ngOnInit() {
		localforage.getItem('user')
			.then(user => {
				if(!user) {
					localforage.setItem('user', { userToken: null, permission: null })
						.catch(err => console.error(err));
				}
			})
	}

}
