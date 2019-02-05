import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { RoomType } from 'src/app/models/room-type';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  roomTypes: RoomType[];

  constructor(private roomService: RoomService, private toastr: ToastrService) { }

  ngOnInit() {
    this.roomService.GetRoomTypes().subscribe((res: RoomType[]) => this.roomTypes = res);
  }

  onSubmit(form: NgForm) {
    this.roomService.PostRoomType(form.value).subscribe(
      (res: RoomType) => {
        this.roomTypes.push(res);
        this.toastr.success('You have been inserted the room type successfully.', 'Successfully');
        form.reset();
      },
      err => {
        console.log("An error occurred.")
        alert(err);
      }
    );
  }

  onDelete(id: number, type: RoomType) {
    if (confirm('Are you sure to delete this room type?')) {
      this.roomService.DeleteRoomType(id).subscribe(
        (res: RoomType) => {
          const index = this.roomTypes.indexOf(type);
          this.roomTypes.splice(index, 1);
          this.toastr.warning('You have been deleted the room type successfully.', 'Successfully');
        },
        err => {
          console.log("An error occurred.");
          alert(err);
        }
      );
    }
  }

  reset(form: NgForm) {
    form.reset();
  }

}
