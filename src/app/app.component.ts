import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from './models';
import { MatCardModule } from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
    MatMenuModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'phone', 'status', 'job', 'actions'];
  labels = [
    {
      id: 'name',
      label: 'الاسم',
    },
    {
      id: 'phone',
      label: 'الهاتف',
    },
    {
      id: 'status',
      label: 'الحالة',
    },
    {
      id: 'job',
      label: 'الوظيفة',
    },
    {
      id: 'actions',
      label: '',
    },
  ];
  dataSource: MatTableDataSource<User>;
  @ViewChild(MatSort) sort!: MatSort;

  users = [
    {
      name: 'محمد مصطفي',
      phone: '01000000000',
      status: 'متصل',
      job: 'مهندس برمجيات',
      addresses: ['القاهرة', 'الجيزة'],
    },
    {
      name: 'احمد محمد',
      phone: '01000000001',
      status: 'غير متصل',
      job: 'مهندس معماري',
      addresses: ['القاهرة', 'الجيزة'],
    },
    {
      name: 'احمد محمد',
      phone: '01000000002',
      status: 'مشغول',
      job: 'مهندس معماري',
      addresses: ['القاهرة', 'الجيزة'],
    },
    {
      name: 'احمد محمد',
      phone: '01000000003',
      status: 'مشغول',
      job: 'مهندس معماري',
      addresses: ['القاهرة', 'الجيزة'],
    },
  ];

  constructor(private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.users);
  }

  getLabel(column: string) {
    return this.labels.find((x) => x.id === column)?.label;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
