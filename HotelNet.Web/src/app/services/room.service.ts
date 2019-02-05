import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoomType } from '../models/room-type';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private readonly url = 'https://localhost:44379/api/roomtypes/';

  constructor(private http: HttpClient) { }

  GetRoomTypes() {
    return this.http.get(this.url);
  }

  PostRoomType(type: RoomType) {
    return this.http.post(this.url, type);
  }

  DeleteRoomType(id: number) {
    return this.http.delete(this.url + id);
  }
}
