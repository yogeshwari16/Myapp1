import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { DashboardCrmComponent } from '../dashboard-crm/dashboard-crm.component';
import { LocationComponent } from '../location/location.component';
import { DepartmentComponent } from '../department/department.component';
import { DesignationComponent } from '../designation/designation.component';
import { ShiftComponent } from '../shift/shift.component';
import { EmployeeComponent } from '../employee/employee.component';
import { MealCategoryComponent } from '../meal-category/meal-category.component';
import { FoodItemComponent } from '../food-item/food-item.component';
import { SetMenuComponent } from '../set-menu/set-menu.component';
import { FoodQuantityComponent } from '../food-quantity/food-quantity.component';
import { DisplayMenuComponent } from '../display-menu/display-menu.component';
import { BillCancelComponent } from '../bill-cancel/bill-cancel.component';
import { AddReportsComponent } from '../add-reports/add-reports.component';
import { ReportsComponent } from '../reports/reports.component';
import { AddPrevilagesComponent } from '../add-previlages/add-previlages.component';
import { ApprovalComponent } from '../approval/approval.component';


export const appRoutes: Routes = [{
    path: '', component: AuthComponent, children: [
        // { path: 'dashboard', component: DashboardCrmComponent },
        { path: 'location', component: LocationComponent }, 
        { path: 'department', component: DepartmentComponent }, 
        { path: 'Designation', component: DesignationComponent }, 
        { path: 'Shift', component: ShiftComponent }, 
        { path: 'employee', component: EmployeeComponent },
        { path: 'meal-category', component: MealCategoryComponent }, 
        { path: 'food-item', component: FoodItemComponent }, 
        { path: 'set-menu', component: SetMenuComponent }, 
        { path: 'food-quantity', component: FoodQuantityComponent },
        { path: 'display-menu', component: DisplayMenuComponent },
        { path: 'bill-cancel', component: BillCancelComponent },
        { path: 'add-reports', component: AddReportsComponent },
        { path: 'reports', component: ReportsComponent },
        { path: 'add-previlages', component: AddPrevilagesComponent },
        { path: 'approval', component: ApprovalComponent },
        { path: 'tables', loadChildren: '../tables/tables.module#TablesModule' },
        { path: 'forms', loadChildren: '../forms/forms.module#FormModule' }, 
    ]
}];
