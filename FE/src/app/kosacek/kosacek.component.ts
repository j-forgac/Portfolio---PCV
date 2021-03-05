import { Component, OnInit } from '@angular/core';

interface IPost {
  Jmeno: string;
  Popis: string;
  Schopnosti: string;
}

@Component({
  selector: 'app-kosacek',
  templateUrl: './kosacek.component.html',
  styleUrls: ['./kosacek.component.scss']
})
export class KosacekComponent implements OnInit {
  Jmeno = '';

  Popis = '';
  Schopnosti = '';

  posty: IPost[] = [];
  edity: IPost = {Jmeno : '', Popis: '', Schopnosti: ''};

  constructor() { }

  ngOnInit(): void {
  }

  send(): void {
    this.posty.push({Jmeno : this.Jmeno, Popis : this.Popis, Schopnosti: this.Schopnosti});
  }

  edit(pos: IPost): void {
    this.edity = pos;
  }
}
