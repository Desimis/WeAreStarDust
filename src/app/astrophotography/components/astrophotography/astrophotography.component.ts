import { Component, OnInit, SecurityContext } from '@angular/core';
import { AstrophotographyService } from '../../services/astrophotography.service';
import { AstroPhotoOfDay } from 'src/app/core/classes/astro-photo-of-day';
import { LoaderStateService } from 'src/app/shared/services/loader-state.service';
import * as moment from 'moment';
import { MatDialog } from '@angular/material';
import { DialogModalComponent } from 'src/app/shared/components/dialog-modal/dialog-modal.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-astrophotography',
  templateUrl: './astrophotography.component.html',
  styleUrls: ['./astrophotography.component.css']
})
export class AstrophotographyComponent implements OnInit {

  astroPhotosOfDay: AstroPhotoOfDay[] = [];
  lastDate: any;
  throttle = 300;
  scrollDistance = 1;

  constructor(
    private astrophotographyService: AstrophotographyService,
    private loaderStateService: LoaderStateService,
    public dialog: MatDialog,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getPhotoOfTheDay();
  }

  getPhotoOfTheDay() {
    this.loaderStateService.load();
    
    let maxCount: number = 10; 
    for(var i = 0; i < maxCount; i++) {
      this.lastDate = moment();
      this.lastDate.subtract(i, 'day');

      this.astrophotographyService.getPhotoOfTheDay(this.lastDate.format('YYYY-MM-DD')).subscribe(
        data => {
          if(data.media_type === 'video') {
            data.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(data.url);
          }
          this.astroPhotosOfDay.push(data); 
        },
        err => {
          this.loaderStateService.finish();
        },
        () => {
          console.log(this.astroPhotosOfDay);
         }
      );

      if(i === (maxCount - 1)) {
        this.loaderStateService.finish();
      }
    }
  }

  openDialog(astroPhotoOfDay: AstroPhotoOfDay): void {
    const dialogRef = this.dialog.open(DialogModalComponent, {
      minWidth: '100%',
      height: '100%',
      data: {data: astroPhotoOfDay.hdurl, type: 'image', title: astroPhotoOfDay.title, copyright: astroPhotoOfDay.copyright }
    });
  }

  onScrollDown (ev) {
    console.log('scrolling');
    this.loaderStateService.load();

    
    let maxCount: number = 10; 
    for(var i = 0; i < maxCount; i++) {
      this.lastDate.subtract(i, 'day');

      this.astrophotographyService.getPhotoOfTheDay(this.lastDate.format('YYYY-MM-DD')).subscribe(
        data => {
          if(data.media_type === 'video') {
            data.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(data.url);
          }
          this.astroPhotosOfDay.push(data); 
        },
        err => {
          this.loaderStateService.finish();
        },
        () => {
          console.log(this.astroPhotosOfDay);
         }
      );

      if(i === (maxCount - 1)) {
        this.loaderStateService.finish();
      }
    }
  }

  identify(index, item){
    return item.id; 
 }

}
