import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.scss']
})
export class MegaMenuComponent implements OnInit {


  category: Array<any> = [{
    catnumber: 1,
    nest: [
      {
        link: 1
      },
      {
        link: 2
      }

    ]
  },
  {
    catnumber: 2,
    nest: [
      {
        link: 1
      },
      {
        link: 2
      },


    ]
  },
  {
    catnumber: 3,
    nest: [
      {
        link: 1
      },
      {
        link: 2
      }

    ]
  },
  ];

  flag = false;
  showmega: boolean;
  vavles: boolean;
  filter: boolean;
  fini: boolean;

  catchEvent(event) {
    this.flag = true;
    console.log(event);
  }

  hide(event) {
    this.flag = false;
  }
  ngOnInit(): void {
  }
  openmega() {
    this.showmega = true;
  }
  closemega() {
    this.showmega = false;
  }
}
