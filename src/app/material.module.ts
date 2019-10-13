import { NgModule } from "@angular/core";
import {
  MatCardModule,
  MatDividerModule,
  MatProgressBarModule,
  MatButtonModule,
  MatRadioModule,
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule
} from "@angular/material";

@NgModule({
  imports: [
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule
  ]
})
export class MaterialModule {}
