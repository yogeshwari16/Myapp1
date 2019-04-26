import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { appRoutes } from './lazyloader.routes';
import { DashboardCrmModule } from '../dashboard-crm/dashboard-crm.module';
import { CoreModule } from '../core/core.module';
import { LocationModule } from '../location/location.module';
import { DepartmentModule } from '../department/department.module';
import { DesignationModule } from '../designation/designation.module';
import { ShiftModule } from '../shift/shift.module';
import { EmployeeModule } from '../employee/employee.module';
import { MealCategoryModule } from '../meal-category/meal-category.module';
import { FoodItemModule } from '../food-item/food-item.module';
import { SetMenuModule } from '../set-menu/set-menu.module';
import { FoodQuantityModule } from '../food-quantity/food-quantity.module';
import { DisplayMenuModule } from '../display-menu/display-menu.module';
import { BillCancelModule } from '../bill-cancel/bill-cancel.module';
import { AddReportsModule } from '../add-reports/add-reports.module';
import { ReportsModule } from '../reports/reports.module';
import { AddPrevilagesModule } from '../add-previlages/add-previlages.module';
import { ApprovalModule } from '../approval/approval.module';




const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(appRoutes),
        MatToolbarModule,
        DashboardCrmModule,
        LocationModule,
        DepartmentModule,
        DesignationModule,
        ShiftModule,
        EmployeeModule,
        MealCategoryModule,
        FoodItemModule,
        SetMenuModule,
        FoodQuantityModule,
        DisplayMenuModule,
        BillCancelModule,
        AddReportsModule,
        ReportsModule,
        AddPrevilagesModule,
        ApprovalModule,
        MatButtonModule,
        MatIconModule,
        MatTabsModule,
        CoreModule,
        MatSidenavModule,
        PerfectScrollbarModule,
    ],
    declarations: [AuthComponent],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ]
})
export class AuthModule { }
