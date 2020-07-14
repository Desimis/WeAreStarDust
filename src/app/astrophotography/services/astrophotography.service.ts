import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AstroPhotoOfDay } from 'src/app/core/classes/astro-photo-of-day';

const url = 'https://api.nasa.gov/planetary/';
const api_key = '5DSRQDyQtBdxPAfWOSQhEDxZn5VgAh4BrXFvVf7z';

@Injectable({
  providedIn: 'root'
})
export class AstrophotographyService {
  
  constructor(private httpClient: HttpClient) { }

  getPhotoOfTheDay(date: string) {
    return this.httpClient.get<AstroPhotoOfDay>(url + 'apod?date=' + date + '&api_key=' + api_key);
  }
}
