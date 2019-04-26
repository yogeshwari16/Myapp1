import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { Router } from '@angular/router';
import { ApiCallsService } from '../services/httpcalls/api-calls.service';
import { MatTableDataSource, MatPaginator, MatDialogConfig, MatDialog, MatTabChangeEvent } from '@angular/material';
import { Location } from '../models/model';
import { Message } from '../constants/messages';
import { AddDepartmentComponent } from './dialog/add-department/add-department.component';
import { AddSectionComponent } from './dialog/add-section/add-section.component';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  public loading = false;
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('paginator2') paginator2: MatPaginator;
  @Output() selectedTabChange: EventEmitter<MatTabChangeEvent>;
  displayedColumnsDept: string[] = ['sn', 'department', 'status', 'action'];
  displayedColumnsSec: string[] = ['sn', 'department', 'section', 'status', 'action'];
  dataSourceDepartment = new MatTableDataSource;
  dataSourceSection = new MatTableDataSource;
  formatedDepartmentData;
  formatedSectionData;
  constructor(private serviceCall: ApiCallsService,
    private toastservice: ToasterService,
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.loadDepartment();
  }
  ngAfterViewInit(): void {
    this.dataSourceDepartment.paginator = this.paginator;
    this.dataSourceSection.paginator = this.paginator2;
  }
  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    if (tabChangeEvent.index == 0) {
      this.loadDepartment();
    } else if (tabChangeEvent.index == 1) {
      this.loadSection();
    }
    this.pageInit(tabChangeEvent.index);
  }
  pageInit(pageIndex) {
    switch (pageIndex) {
      case 0:
        !this.dataSourceDepartment.paginator ? this.dataSourceDepartment.paginator = this.paginator : null;
        break;
      case 1:
        !this.dataSourceSection.paginator ? this.dataSourceSection.paginator = this.paginator2 : null;
        break;
    }
  }
  applyFilterDept(filterValue: string) {
    this.dataSourceDepartment.filter = filterValue.trim().toLowerCase();
  }
  applyFilterSec(filterValue: string) {
    this.dataSourceSection.filter = filterValue.trim().toLowerCase();
  }
  loadDepartment() {
    this.loading = true;
    this.serviceCall.getDepartment_admin().subscribe(
      data => {
        this.loading = false;
        if (data.success) {
          this.formatDepartment(data.data);
        } else {
          this.toastservice.pop('error', Message.error_title, data.msg);
        }
      }, error => {
        this.loading = false;
        this.toastservice.pop('error', Message.error_title, error.error);
      }
    );
  }
  loadSection() {
    this.loading = true;
    this.serviceCall.getSection_admin().subscribe(
      data => {
        this.loading = false;
        if (data.success) {
          this.formatSection(data.data);
        } else {
          this.toastservice.pop("error", Message.error_title, data.msg);
        }
      }, error => {
        this.loading = false;
        this.toastservice.pop("error", Message.error_title, error.error);
      });
  }
  formatDepartment(department) {
    let sn;
    let departmentData = [];
    for (let i = 0; i < department.length; i++) {
      let tableData = {
        sn: (i + 1),
        title: department[i].title,
        status: department[i].status,
        id: department[i]._id
      };
      departmentData.push(tableData);
    }
    this.dataSourceDepartment.data = departmentData;
    this.formatedDepartmentData = departmentData;
  }
  formatSection(section) {
    let sn;
    let sectionData = [];
    for (let i = 0; i < section.length; i++) {
      let tableData = {
        sn: (i + 1),
        departmentTitle: section[i].parentId.title,
        title: section[i].title,
        status: section[i].status,
        id: section[i]._id,
        parentId: section[i].parentId._id,
      };
      sectionData.push(tableData);
    }
    this.dataSourceSection.data = sectionData;
    this.formatedSectionData = sectionData;
  }
  editDepartment(id) {
    let dep = this.getDepartmentById(id);
    this.openDepartmentDialog(dep, 'Edit');
  }
  getDepartmentById(id) {
    let myDepartment;
    for (let department of this.formatedDepartmentData) {
      if (department.id == id) {
        myDepartment = department;
      }
    }
    return myDepartment;

  }
  editSection(id) {
    let sec = this.getSectionById(id);
    this.openDialogSection(sec, 'Edit');
  }
  getSectionById(id) {
    let mySection;
    for (let section of this.formatedSectionData) {
      if (section.id == id) {
        mySection = section;
      }
    }
    return mySection;
  }
  openDepartmentDialog(departmentData, action) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "500px";
    dialogConfig.data = {
      dialogData: { title: action },
      departmentData: departmentData
    }
    const dialogRef = this.dialog.open(AddDepartmentComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        if (data && data.action == "Add") {
          this.addDepartment(data.department);
        } else if (data && data.action == "Edit") {
          this.updateDepartment(data.department, data.id);
        }
      }
    );
  }
  addDepartment(data) {
    this.loading = true;
    this.serviceCall.createDepartment(data).subscribe(
      data => {
        if (data.success) {
          this.loading = false;
          this.toastservice.pop("success", Message.success_title, data.msg);
          this.loadDepartment();
        } else {
          this.loading = false;
          this.toastservice.pop("error", Message.error_title, data.msg);
        }
      }, error => {
        this.toastservice.pop("error", Message.error_title, error.error);
      }
    );
  }
  updateDepartment(data, id) {
    this.loading = true;
    this.serviceCall.updateDepartment(data, id).subscribe(
      data => {
        this.loading = false;
        if (data.success) {
          this.loadDepartment();
          this.toastservice.pop("success", Message.success_title, data.msg);
        } else {
          this.toastservice.pop("error", Message.error_title, data.msg);
        }
      }, error => {
        this.toastservice.pop("error", Message.error_title, error.error);
      });
  }
  openDialogSection(sectionData, action) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "500px";
    dialogConfig.data = {
      dialogData: { title: action },
      sectionData: sectionData
    }
    const dialogRef = this.dialog.open(AddSectionComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        if (data && data.action == "Add") {
          this.addSection(data.section);
        } else if (data && data.action == "Edit") {
          this.updateSection(data.section, data.id);
        }
      }
    );
  }
  addSection(data) {
    this.loading = true;
    this.serviceCall.createSection(data).subscribe(
      data => {
        this.loading = false;
        if (data.success) {
          this.loadSection();
          this.toastservice.pop("success", Message.success_title, data.msg);
        } else {
          this.toastservice.pop("error", Message.error_title, data.msg);
        }
      }, error => {
        this.toastservice.pop("error", Message.error_title, error.error);
      });

  }
  updateSection(data, id) {
    this.loading = true;
    this.serviceCall.updateSection(data, id).subscribe(
      data => {
        this.loading = false;
        if (data.success) {
          this.loadSection();
          this.toastservice.pop("success", Message.success_title, data.msg);
        } else {
          this.toastservice.pop("error", Message.error_title, data.msg);
        }
      }, error => {
        this.toastservice.pop("error", Message.error_title, error.error);
      });
  }

}
