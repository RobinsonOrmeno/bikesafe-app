import { analyzeFile } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  public phone = '[ +56954774589 ]'
  public title = ' [ Hola, estoy interesado en reservar un espacio porfavor ]';

  firstFormGroup:FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder ) {

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
 
  }

  ngOnInit() {
    
  }

  saveit(){
    // the url,html tag should be called from here , how ?
    window.open('https://api.whatsapp.com/send?phone=34123456789');
    }
  

}
