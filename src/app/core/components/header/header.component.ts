import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  astrophotographyIsActive: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        switch (val.url) {
          case '/astrophotography': {
            console.log('true');
            this.astrophotographyIsActive = true;
            break;
          }
          default: {
            this.astrophotographyIsActive = false;
            break;
          }
        }
      }
    })
  }

}
