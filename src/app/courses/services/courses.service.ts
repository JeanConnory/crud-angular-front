import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../model/course';
import { delay, tap, first } from 'rxjs/operators';
import { CoursePage } from '../model/CoursePage';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/Course';

  constructor(private httpClient: HttpClient) { }

  list(pageIndex= 0, pageSize = 5) {
    return this.httpClient.get<CoursePage>(this.API, { params: {pageIndex, pageSize}})
      .pipe(
        first(),
        //delay(5000),
      );
  }

  loadById(id: string) {
    return this.httpClient.get<Course>(`${this.API}/${id}`);
  }

  save(record: Partial<Course>) {
    console.log(record);
    if(record._id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Course>) {
    return this.httpClient.post<Course>(this.API, record)
      .pipe(first());
  }

  private update(record: Partial<Course>) {
    return this.httpClient.put<Course>(`${this.API}/${record._id}`, record)
      .pipe(first());
  }

  public remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`)
      .pipe(first());
  }
}
