import { Component, OnInit } from '@angular/core';

interface IPost {
  Jmeno: string;
  Popis: string;
  Schopnosti: string;
}

@Component({
  selector: 'app-skyper',
  templateUrl: './skyper.component.html',
  styleUrls: ['./skyper.component.scss']
})
export class SkyperComponent implements OnInit {
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
