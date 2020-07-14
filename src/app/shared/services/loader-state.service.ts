import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderStateService {

  private loading: BehaviorSubject<boolean> = new BehaviorSubject(false);

  get loading$(): Observable<boolean> {
    return new Observable(f => { this.loading.subscribe(f); });
  }

  load() {
    this.loading.next(true);
  }

  finish() {
    this.loading.next(false);
  }
}
