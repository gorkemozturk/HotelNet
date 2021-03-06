import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoomType } from '../models/room-type';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  rooms: Room[];
  roomTypes: RoomType[];

  private readonly typeUrl = 'https://localhost:44379/api/roomtypes/';
  private readonly roomUrl = 'https://localhost:44379/api/rooms/';

  constructor(private http: HttpClient) { }

  GetRoomTypes() {
    return this.http.get(this.typeUrl).toPromise().then(res => this.roomTypes = res as RoomType[]);
  }

  PostRoomType(type: RoomType) {
    return this.http.post(this.typeUrl, type);
  }

  DeleteRoomType(id: number) {
    return this.http.delete(this.typeUrl + id);
  }

  GetRooms() {
    return this.http.get(this.roomUrl).toPromise().then(res => this.rooms = res as Room[]);
  }

  PostRoom(room: Room) {
    return this.http.post(this.roomUrl, room);
  }

  DeleteRoom(id: number) {
    return this.http.delete(this.roomUrl + id);
  }
}
