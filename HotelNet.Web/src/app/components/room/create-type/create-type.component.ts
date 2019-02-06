import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RoomService } from 'src/app/services/room.service';
import { NgForm } from '@angular/forms';
import { RoomType } from 'src/app/models/room-type';

@Component({
  selector: 'app-create-type',
  templateUrl: './create-type.component.html',
  styleUrls: ['./create-type.component.css']
})
export class CreateTypeComponent implements OnInit {

  constructor(private roomService: RoomService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  
  onSubmit(form: NgForm) {
    this.roomService.PostRoomType(form.value).subscribe(
      (res: RoomType) => {
        this.toastr.success('You have been inserted the room type successfully.', 'Successfully');
        form.reset();
        this.roomService.GetRoomTypes();
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
