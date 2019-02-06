import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { BookingService } from 'src/app/services/booking.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(public dialog: MatDialog, private bookingService: BookingService, private toastr: ToastrService) { }

  ngOnInit() {
    this.bookingService.GetBookings();
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.panelClass = 'customized-dialog';
    dialogConfig.width = '350px';

    this.dialog.open(CreateBookingComponent, dialogConfig);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this room type?')) {
      this.bookingService.DeleteBooking(id).subscribe(
        res => {
          this.bookingService.GetBookings();
          this.toastr.warning('You have been deleted the booking successfully.', 'Successfully');
        },
        err => {
          console.log("An error occurred.");
          alert(err);
        }
      );
    }
  }

}
