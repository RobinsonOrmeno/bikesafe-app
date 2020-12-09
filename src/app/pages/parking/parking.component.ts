import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {

  lat = -33.5461501;
  lng = -70.5873854;
  zoom = 16;
  markers:any[] = [];

  constructor(public dialog: MatDialog) { 
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });

      this.markers.push({lat:-33.5461501, lng:-70.5873854});
      this.markers.push({lat:-33.4461501, lng:-70.4873854});
      this.markers.push({lat:-33.3461501, lng:-70.3873854});
    }
  }

  ngOnInit(): void {
  }

  public show:boolean = false;
  public buttonName:any = 'Selecciona';



  markerClicked($event:any){
    console.log($event);
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    
  }

  
}

