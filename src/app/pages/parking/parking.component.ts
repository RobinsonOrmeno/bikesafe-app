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

  icon:any;

  constructor(public dialog: MatDialog) { 
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });

  

      this.markers.push({lat:-33.52288331691768, lng:-70.55747836929066});
      this.markers.push({lat:-33.51092684120825, lng:-70.61701757813015});
      this.markers.push({lat:-33.44909548614579, lng:-70.65026315097553});
    }

    this.icon = { url: 'https://lh3.googleusercontent.com/proxy/0isvlditpAYKXEh06nEayhTONe0sAaSkGyTuDjp7xDS1aTOGRYFGY0XKnwPa2bTuboZf_iE2DyGaILiGDPa8F0BhWfdXBTXtNC7yF6DL-iyEHUKC9Vpd_zEM8zziKPzWSI8kg_sqczIrcd1-vsgpMpo', scaledSize: {height: 40, width: 40}};
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

