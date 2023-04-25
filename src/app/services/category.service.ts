import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICategory} from "../models/models";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private client: HttpClient) {
  }

  getCategories(): Observable<ICategory[]> {
    return this.client.get<ICategory[]>(`${this.BASE_URL}/api/categories/`);
  }

}
