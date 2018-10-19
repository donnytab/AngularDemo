import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnInit {
  ideaItem = 'Arsene Wenger';
  constructor() { }

  ngOnInit() {
  }

}
