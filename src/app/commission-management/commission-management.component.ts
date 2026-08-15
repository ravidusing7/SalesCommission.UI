import { Component } from '@angular/core';

@Component({
  selector: 'app-commission-management',
  templateUrl: './commission-management.component.html',
  styleUrls: ['./commission-management.component.scss']
})
export class CommissionManagementComponent {


  displayedColumns: string[] = [
    'employeeName',
    'sales',
    'commission',
    'status'
  ];

 dataSource = [
    {
      employeeName: 'Sunny',
      sales: 10000,
      commission: 1500,
      status: 'Approved'
    },
    {
      employeeName: 'John',
      sales: 15000,
      commission: 2000,
      status: 'Pending'
    }
  ];
}
