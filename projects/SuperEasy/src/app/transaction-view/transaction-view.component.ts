import { Component, OnInit, ViewChild } from '@angular/core';
import { DataProvider } from '../DataProvider.service';
import { Transaction } from '../Transaction';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';



@Component({
  selector: 'app-transaction-view',
  templateUrl: './transaction-view.component.html',
  styleUrls: ['./transaction-view.component.css']
})
export class TransactionViewComponent implements OnInit {

  
  constructor(private provider: DataProvider) { }

  transactions = new MatTableDataSource<Transaction>(this.provider.transactions);

  displayedColumns: string[] = ["id", "worker", "status", "dateReceived", "dateDelivered"];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.transactions.paginator = this.paginator;
    this.transactions.sort = this.sort;
  }
  

  

}
