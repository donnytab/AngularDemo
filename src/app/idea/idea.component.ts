import { Component, OnInit } from '@angular/core';
import {Idea} from '../idea';
import {IDEAS} from '../mock-ideas';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnInit {
  /*
  ideaItem : Idea = {
    id: 1,
    keyword: 'Arsene Wenger',
    note: 'Former Arsenal FC manager(1996-2018) and club legend'
  };
  constructor() { }

  ngOnInit() {
  }
  */
  

  ideaItem = IDEAS;
  selectedIdea:Idea;

  constructor() { }

  ngOnInit() {
  }

  onSelect(idea: Idea): void {
    this.selectedIdea = idea;
  }
}


