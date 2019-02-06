import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Booking } from 'src/app/models/booking';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {

  constructor(private roomService: RoomService, private bookingService: BookingService, private toastr: ToastrService) { }

  ngOnInit() {
    this.roomService.GetRoomTypes();
  }

  onSubmit(form: NgForm) {
    this.bookingService.PostBooking(form.value).subscribe(
      (res: Booking) => {
        this.toastr.success('You have been inserted the booking successfully.', 'Successfully');
        form.reset();
        this.bookingService.GetBookings();
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
