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
import { CreateBookingComponent } from './components/booking/create-booking/create-booking.component';
import { BookingService } from './services/booking.service';
import { PaymentOptionsComponent } from './components/payment-options/payment-options.component';
import { OptionService } from './services/option.service';

const routes: Route[] = [
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
  },
  {
    path: 'payment-options',
    component: PaymentOptionsComponent
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
    BookingComponent,
    CreateBookingComponent,
    PaymentOptionsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatDialogModule
  ],
  entryComponents: [
    CreateRoomComponent,
    CreateTypeComponent,
    CreateBookingComponent
  ],
  providers: [
    RoomService,
    BookingService,
    OptionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
