import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionRecordComponent } from './transaction-record/transaction-record.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'transactions',component:TransactionsComponent},
  {path:'transactionrecord',component:TransactionRecordComponent},
  {path:'home',component:HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
