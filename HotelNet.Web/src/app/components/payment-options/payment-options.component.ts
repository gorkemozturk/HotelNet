import { Component, OnInit } from '@angular/core';
import { OptionService } from 'src/app/services/option.service';
import { NgForm } from '@angular/forms';
import { Option } from 'src/app/models/option';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.css']
})
export class PaymentOptionsComponent implements OnInit {
  options: Option[];

  constructor(private optionService: OptionService, private toastr: ToastrService) { }

  ngOnInit() {
    this.optionService.GetPaymentOptions().subscribe((res: Option[]) => this.options = res);
  }

  onSubmit(form: NgForm) {
    this.optionService.PostPaymentOption(form.value).subscribe(
      (res: Option) => {
        this.options.push(res);
        this.toastr.success('You have been inserted the payment option successfully.', 'Successfully');
        form.reset();
      },
      err => {
        console.log("An error occurred.")
        alert(err);
      }
    );
  }

  onDelete(id:number, option: Option) {
    this.optionService.DeletePaymentOption(id).subscribe(
      res => {
        const index = this.options.indexOf(option);
        this.options.splice(index, 1); 
        this.toastr.warning('You have been deleted the payment option successfully.', 'Successfully');
      },
      err => {
        console.log("An error occurred.")
        alert(err);
      }
    );
  }

  reset(form: NgForm) {
    form.reset();
  }

}
