import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Option } from '../models/option';

@Injectable({
  providedIn: 'root'
})
export class OptionService {
  private readonly url = 'https://localhost:44379/api/paymentoptions/';

  constructor(private http: HttpClient) { }

  GetPaymentOptions() {
    return this.http.get(this.url);
  }

  PostPaymentOption(option: Option) {
    return this.http.post(this.url, option);
  }

  DeletePaymentOption(id: number) {
    return this.http.delete(this.url + id);
  }
}
