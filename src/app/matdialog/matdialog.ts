import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-matdialog',
  templateUrl: './matdialog.html',
  styleUrl: './matdialog.css'
})
export class Matdialog {

  constructor(
    private dialogRef: MatDialogRef<Matdialog>
  ) {}

  closePop() {
    this.dialogRef.close();
  }
}