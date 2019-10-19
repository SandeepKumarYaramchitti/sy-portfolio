import { NgModule } from "@angular/core";
import {
  MatCardModule,
  MatDividerModule,
  MatProgressBarModule,
  MatButtonModule,
  MatRadioModule,
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule,
  MatTooltipModule
} from "@angular/material";

@NgModule({
  imports: [
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule
  ],
  exports: [
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatTooltipModule
  ]
})
export class MaterialModule {}
