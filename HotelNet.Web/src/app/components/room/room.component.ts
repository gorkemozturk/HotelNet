import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { RoomType } from 'src/app/models/room-type';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Room } from 'src/app/models/room';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  roomTypes: RoomType[];
  rooms: Room[];

  constructor(private roomService: RoomService, private toastr: ToastrService) { }

  ngOnInit() {
    this.roomService.GetRoomTypes().subscribe((res: RoomType[]) => this.roomTypes = res);
    this.roomService.GetRooms().subscribe((res: Room[]) => this.rooms = res);
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

  onRoomSubmit(form: NgForm) {
    this.roomService.PostRoom(form.value).subscribe(
      (res: Room) => {
        this.rooms.push(res);
        this.toastr.success('You have been inserted the room successfully.', 'Successfully');
        form.reset();
      },
      err => {
        console.log("An error occurred.")
        alert(err);
      }
    );
  }

  onRoomDelete(id: number, room: Room) {
    if (confirm('Are you sure to delete this room?')) {
      this.roomService.DeleteRoom(id).subscribe(
        (res: Room) => {
          const index = this.rooms.indexOf(room);
          this.rooms.splice(index, 1);
          this.toastr.warning('You have been deleted the room successfully.', 'Successfully');
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
