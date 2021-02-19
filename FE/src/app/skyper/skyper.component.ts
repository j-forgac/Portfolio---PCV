import { Component, OnInit } from '@angular/core';

interface IPost {
  titulek: string;
  text: string;
}

@Component({
  selector: 'app-skyper',
  templateUrl: './skyper.component.html',
  styleUrls: ['./skyper.component.css']
})
export class SkyperComponent implements OnInit {
  titulek = '';
  text = '';
  posty: IPost[] = [];
  edity: IPost = {titulek : '', text: ''};

  constructor() { }

  ngOnInit(): void {
  }

  send(): void {
    this.posty.push({titulek : this.titulek, text : this.text});
  }

  edit(pos: IPost): void {
    this.edity = pos;
  }
}
