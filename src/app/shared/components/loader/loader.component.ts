import { Component, OnInit } from '@angular/core';
import { LoaderStateService } from '../../services/loader-state.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  loading: boolean;

  constructor(private loaderStateService: LoaderStateService) { }

  ngOnInit() {
    this.loaderStateService.loading$.subscribe(
      state => {
        this.loading = state;
      }
    );
  }

}
