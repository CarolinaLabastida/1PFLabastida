import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { CreateDialogComponent } from './create-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    CreateDialogComponent
  ]
})
export class CreateDialogModule { }
