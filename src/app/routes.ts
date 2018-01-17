import { Routes } from '@angular/router';
import { AuthService } from './auth';

import { 
	LoginComp
} from './login/index';

import {
	SetupComp
} from './setup/index';

export const AppRoutes: Routes = [
	{ path: 'login', component: LoginComp, canActivate: [AuthService] },
	{ path: 'setup', loadChildren: './setup/setup.module#SetupModule' },
];