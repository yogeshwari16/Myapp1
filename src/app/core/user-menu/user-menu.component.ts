import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router'
import { MatDialog, MatDialogConfig} from '@angular/material';
import { AlertDialogComponent } from '../../dialogs/alert-dialog/alert-dialog.component';
@Component({
  selector: 'cdk-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
	isOpen: boolean = false;

  	//currentUser = null;
  	Hri;
  	

  	@Input() currentUser = null;
  	@HostListener('document:click', ['$event', '$event.target'])
  	onClick(event: MouseEvent, targetElement: HTMLElement) {
    	if (!targetElement) {
     		return;
    	}

    	const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    	if (!clickedInside) {
      		this.isOpen = false;
    	}
  	}
  	
    
  	constructor(private elementRef: ElementRef, private router: Router, private dialog: MatDialog) { }


  	ngOnInit() {

	  }
      ConfirmLogoutDialog() {
		let dialogRef = this.dialog.open(AlertDialogComponent,{
		  data: {
			  title:"Confirmation",
			  subTitle:"Are you sure you want to Logout?",
			  buttonCancelName:"Cancel",
			  buttonConfirmName:"Ok",
		  }
		});
		dialogRef.afterClosed().subscribe(result => {
		  if (result == 'confirm') {
			this.logout();
		  }
		})
	  }

	  logout(){
          this.router.navigate(['/login']);
	  }

}
