import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { CommonService } from './../common.service';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router'

@Component({
	selector: 'app-userdashboard',
	templateUrl: './userdashboard.component.html',
	styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

	constructor( public apiService:ApiService, public commonService:CommonService, private notificationsService:NotificationsService, public router:Router) { }

	mainContentSize:Boolean = false;

	ngOnInit() {
	}
	
	updateHeaderToggle(){
		this.mainContentSize = !this.mainContentSize;
	}

}
