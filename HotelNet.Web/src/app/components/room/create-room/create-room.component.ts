import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { NgForm } from '@angular/forms';
import { Room } from 'src/app/models/room';
import { ToastrService } from 'ngx-toastr';
import { RoomType } from 'src/app/models/room-type';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {
  roomTypes: RoomType[];

  constructor(private roomService: RoomService, private toastr: ToastrService) { }

  ngOnInit() {
    this.roomService.GetRoomTypes();
  }

  onSubmit(form: NgForm) {
    this.roomService.PostRoom(form.value).subscribe(
      (res: Room) => {
        this.toastr.success('You have been inserted the room successfully.', 'Successfully');
        this.roomService.GetRooms();
        form.reset();
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
