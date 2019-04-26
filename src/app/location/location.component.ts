import { Component, OnInit, ViewChild } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { Router } from '@angular/router';
import { ApiCallsService } from '../services/httpcalls/api-calls.service';
import { MatTableDataSource, MatPaginator, MatDialogConfig, MatDialog } from '@angular/material';
import { Location} from '../models/model';
import { Message } from '../constants/messages';
import { AddLocationComponent } from './dialog/add-location/add-location.component';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})

export class LocationComponent implements OnInit {
  public loading = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['sn', 'location', 'status', 'action'];
  dataSource = new MatTableDataSource();
  formatedLocationData;
  constructor(private serviceCall: ApiCallsService,
    private toasterservice: ToasterService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.loadLocation();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadLocation() {
    this.loading = true;
    this.serviceCall.getLocations_admin().subscribe(data => {
      if (data.success) {
        this.loading = false;
        this.formatLocation(data.data);
      } else {
        this.loading = false;
        this.toasterservice.pop('error', Message.error_title, data.msg);
      }
    },
      error => {
        this.loading = false;
        this.toasterservice.pop('error', Message.error_title, error.error);
      }
    );

  }

  formatLocation(location) {
    let sn;
    let locationData = [];
    for (let i = 0; i < location.length; i++) {
      let tableData = {
        sn: (i + 1),
        title: location[i].title,
        status: location[i].status,
        id: location[i]._id

      };
      locationData.push(tableData);
    }

    this.dataSource.data = locationData;
    this.formatedLocationData = locationData;
  }
  editLocation(id) {
    let loc = this.getLocationById(id);
    this.openLocationDialog(loc, 'Edit');
  }
  getLocationById(id) {
    let myLocation;
    for (let location of this.formatedLocationData) {
      if (location.id == id) {
        myLocation = location;
      }
    }
    return myLocation;
  }
  openLocationDialog(locationData, action) {
    const dialogConfig = new MatDialogConfig();
          dialogConfig.disableClose = true;
          dialogConfig.autoFocus = true;
          dialogConfig.width = "500px";
          dialogConfig.data = {
          dialogData: { title: action },
          locationData: locationData
          }
    const dialogRef = this.dialog.open(AddLocationComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        if(data && data.action == "Add"){
          this.addLocation(data.location);
        }else if(data && data.action == "Edit"){
          this.updateLocation(data.location, data.id);          
        }
        
      }


    );
  }
  addLocation(data) {
    this.loading = true;
    this.serviceCall.createLocation(data).subscribe(
      data => {
        if (data.success) {
          this.loading = false;
          this.toasterservice.pop("success", Message.success_title, data.msg);
          this.loadLocation();
        } else {
          this.loading = false;
          this.toasterservice.pop("error", Message.error_title, data.msg);
        }
      },
      error => {
        this.loading = false;
        this.toasterservice.pop("error", Message.error_title, error.error);
      }
    );
  }
  updateLocation(data,id){
    this.loading = true;
    this.serviceCall.updateLocation(data, id).subscribe(
      data => {
        if (data.success) {
          this.loading = false;
           this.loadLocation();
           this.toasterservice.pop("success",Message.success_title, data.msg);
        } else {
          this.loading = false;
          this.toasterservice.pop("error", Message.error_title,data.msg);
        }
      },
      error=> {
        this.loading = false;
         this.toasterservice.pop("error", Message.error_title, error.error);
      });
  }


}
