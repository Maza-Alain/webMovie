import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatListModule} from '@angular/material/list'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatInputModule} from '@angular/material/input'; 

@NgModule({

  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatInputModule
  ]
})
export class MaterialModule { }
