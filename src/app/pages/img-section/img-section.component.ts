import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-section',
  templateUrl: './img-section.component.html',
  styleUrls: ['./img-section.component.scss']
})
export class ImgSectionComponent implements OnInit {
  @Input() imgUrl: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
