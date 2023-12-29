import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FinanceService } from '../finance.service';
import { log } from 'console';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {

  transactionForm:any = FormGroup;
  allData :any;
  deleteData:any;
  
  constructor(private fb: FormBuilder, private services: FinanceService,private toastr: ToastrService) { }

  ngOnInit(){
    this.transactionForm = this.fb.group({
      description: ['', Validators.required],
      amount: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      type: ['expense', Validators.required], // You can have 'income' as another option
      date: ['', Validators.required],
    });
    
    this.getTransaction();
  }

  get description() {
    return this.transactionForm.get('description');
  }

  get amount() {
    return this.transactionForm.get('amount');
  }

  get type() {
    return this.transactionForm.get('type');
  }

  get date() {
    return this.transactionForm.get('date');
  }

  onSubmit() {
    if (this.transactionForm.valid) {
      this.services.addTransaction(this.transactionForm.value).subscribe((data)=>{
        console.log(data);
        this.getTransaction();
        this.toastr.success('Transaction Save Successfully!');

      })
    }else if(this.transactionForm.invalid){
      this.toastr.info('please, fill up all the fields!');
    }
  }

  getTransaction(){
    this.services.getTransaction().subscribe((data)=>{
      this.allData = data;
    })
  }

  deleteTransaction(id:any){
    this.services.deleteTransaction(this.deleteData=id).subscribe((data)=>{
      this.getTransaction();
      this.toastr.error('Transaction Delete Successfully!');
    })
  }

}
