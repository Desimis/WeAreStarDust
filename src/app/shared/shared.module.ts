import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatButtonModule, 
  MatCheckboxModule, 
  MatToolbarModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule, 
  MatTableModule, 
  MatStepperModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatOptionModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatGridListModule,
  MatPaginatorModule,
  MatRippleModule,
  MatDialogModule} 
from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogModalComponent } from './components/dialog-modal/dialog-modal.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderStateService } from './services/loader-state.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [DialogModalComponent, LoaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatGridListModule,
    MatPaginatorModule,
    MatRippleModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    InfiniteScrollModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatGridListModule,
    MatPaginatorModule,
    MatRippleModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    LoaderComponent,
    MatDialogModule,
    InfiniteScrollModule
  ],
  providers: [LoaderStateService]
})
export class SharedModule { }
