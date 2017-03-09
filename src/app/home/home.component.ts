import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeTitle = "Welcome to dekz directory!";
  inputValue = "this is a string";
  inputRequired = true;

  constructor() { }

  ngOnInit() {
  }

}
