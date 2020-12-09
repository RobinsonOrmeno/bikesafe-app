import { analyzeFile } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

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

  

}
