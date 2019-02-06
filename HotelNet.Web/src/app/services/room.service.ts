import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoomType } from '../models/room-type';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private readonly typeUrl = 'https://localhost:44379/api/roomtypes/';
  private readonly roomUrl = 'https://localhost:44379/api/rooms/';

  constructor(private http: HttpClient) { }

  GetRoomTypes() {
    return this.http.get(this.typeUrl);
  }

  PostRoomType(type: RoomType) {
    return this.http.post(this.typeUrl, type);
  }

  DeleteRoomType(id: number) {
    return this.http.delete(this.typeUrl + id);
  }

  GetRooms() {
    return this.http.get(this.roomUrl);
  }

  PostRoom(room: Room) {
    return this.http.post(this.roomUrl, room);
  }

  DeleteRoom(id: number) {
    return this.http.delete(this.roomUrl + id);
  }
}
