import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { SidebarComponent } from './sidebar/slidebar.component';
import { AuthorComponent } from './components/author/author.component';
import { HomeComponent } from './components/home/home.component';
import { ButtonComponent } from './components/button/button.component';


import { 
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatChipsModule,
  MatOptionModule,
  MatFormFieldModule, 
  MatAutocompleteModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  MatBottomSheetModule,
  
} from '@angular/material';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon'
// import { FlexLayoutModule } from '@angular/flex-layout';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';

// Importar HttpClientModule
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AuthorComponent,
    SidebarComponent,
    HomeComponent,
    ButtonComponent,
  ],
  imports: [
    // FlexLayoutModule,
    // FontAwesomeModule,
    HttpClientModule,

    BrowserModule,
    FormsModule,
    AppRoutingModule,
    
    MatButtonModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    MatRadioModule,
    MatChipsModule,
    MatOptionModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatDialogModule,

    BrowserAnimationsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
