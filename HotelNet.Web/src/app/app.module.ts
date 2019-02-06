import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RoomComponent } from './components/room/room.component';
import { HomeComponent } from './components/home/home.component';
import { RoomService } from './services/room.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateRoomComponent } from './components/room/create-room/create-room.component';
import { CreateTypeComponent } from './components/room/create-type/create-type.component';
import { BookingComponent } from './components/booking/booking.component';

const routers: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'rooms',
    component: RoomComponent
  },
  {
    path: 'bookings',
    component: BookingComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RoomComponent,
    HomeComponent,
    CreateRoomComponent,
    CreateTypeComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routers),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatDialogModule
  ],
  entryComponents: [
    CreateRoomComponent,
    CreateTypeComponent
  ],
  providers: [
    RoomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
