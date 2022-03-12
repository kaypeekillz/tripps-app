import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  colorCode = '';
  imgUrl = '';
  
  constructor() { }

  ngOnInit(): void {
    
  }

  sendData(item: any) {
    this.colorCode = item.colorCode;
    this.imgUrl = item.imgUrl;
  }

}
