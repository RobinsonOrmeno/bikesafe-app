import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {

  lat = -33.5461501;
  lng = -70.5873854;
  zoom = 16;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public show:boolean = false;
  public buttonName:any = 'Selecciona';



  markerClicked($event:any){
    console.log($event);
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    
  }

  
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'modal/modal.component.html',
})
export class DialogContentExampleDialog {}