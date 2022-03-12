import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-section',
  templateUrl: './nav-section.component.html',
  styleUrls: ['./nav-section.component.scss']
})
export class NavSectionComponent implements OnInit {
  @Output() public sendData = new EventEmitter<string>()
  data: any[] = []
  isActive1 = true;
  isActive2 = false;
  isActive3 = false;
  isActive4 = false;

  constructor() { }

  ngOnInit(): void {
    this.data = [
      {
        id: 1,
        colorCode: '#0e1d33',
        imgUrl: '../../../assets/images/img-1.png'
      },
      {
        id: 2,
        colorCode: '#543000',
        imgUrl: '../../../assets/images/img-2.png'
      },
      {
        id: 3,
        colorCode: '#420422',
        imgUrl: '../../../assets/images/img-3.png'
      },
      {
        id: 4,
        colorCode: '#230a22',
        imgUrl: '../../../assets/images/img-4.jpg',
      }
    ]
    this.display(1);
  }

  display(id: number) {
    this.setCurrentActiveNav(id);
    for(const item of this.data) {
      if (item.id === id) {
        this.sendData.emit(item);
      }
    }
  }


  setCurrentActiveNav(id: number) {
    if (id === 1) {
      this.isActive1 = true;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive4 = false;
    } else if (id === 2) {
      this.isActive1 = false;
      this.isActive2 = true;
      this.isActive3 = false;
      this.isActive4 = false;
    } else if (id === 3) {
      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive3 = true;
      this.isActive4 = false;
    } else if (id === 4) {
      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive4 = true;
    }
  }

}
