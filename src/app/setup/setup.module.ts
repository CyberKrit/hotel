import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SetupRoutes } from './setup-routes';

import { SetupComp } from './setup';
import { BusinessComp } from './business/business';

@NgModule({
	declarations: [
		SetupComp,
		BusinessComp
	],
	imports: [
		CommonModule,
		RouterModule.forChild(SetupRoutes)
	],
	providers: []
})
export class SetupModule {}