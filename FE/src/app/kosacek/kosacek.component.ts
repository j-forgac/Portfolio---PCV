import { Component, OnInit } from '@angular/core';

interface IPost {
  titulek: string;
  text: string;
}

@Component({
  selector: 'app-kosacek',
  templateUrl: './kosacek.component.html',
  styleUrls: ['./kosacek.component.css']
})
export class KosacekComponent implements OnInit {
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
