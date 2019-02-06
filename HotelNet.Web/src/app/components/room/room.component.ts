import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { RoomType } from 'src/app/models/room-type';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Room } from 'src/app/models/room';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateRoomComponent } from './create-room/create-room.component';
import { CreateTypeComponent } from './create-type/create-type.component';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  roomTypes: RoomType[];
  rooms: Room[];

  constructor(private roomService: RoomService, private toastr: ToastrService, public dialog: MatDialog) { }

  ngOnInit() {
    this.roomService.GetRoomTypes();
    this.roomService.GetRooms();
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.panelClass = 'customized-dialog';
    dialogConfig.width = '350px';

    this.dialog.open(CreateRoomComponent, dialogConfig);
  }

  openTypeDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.panelClass = 'customized-dialog';
    dialogConfig.width = '350px';

    this.dialog.open(CreateTypeComponent, dialogConfig);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this room type?')) {
      this.roomService.DeleteRoomType(id).subscribe(
        res => {
          this.roomService.GetRoomTypes();
          this.toastr.warning('You have been deleted the room type successfully.', 'Successfully');
        },
        err => {
          console.log("An error occurred.");
          alert(err);
        }
      );
    }
  }

  onRoomDelete(id: number) {
    if (confirm('Are you sure to delete this room?')) {
      this.roomService.DeleteRoom(id).subscribe(
        res => {
          this.roomService.GetRooms();
          this.toastr.warning('You have been deleted the room successfully.', 'Successfully');
        },
        err => {
          console.log("An error occurred.");
          alert(err);
        }
      );
    }
  }

}
