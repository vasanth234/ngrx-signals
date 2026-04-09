import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Matdialog } from './matdialog/matdialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(Matdialog, {
      width: '400px',
      height:'400px',
     data:{message:"thus is dialoaf component"}
    });
  }
}