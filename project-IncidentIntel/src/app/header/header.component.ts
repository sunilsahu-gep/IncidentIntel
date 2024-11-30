import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dropdownVisible: boolean = false;

  constructor() { }

  // Lifecycle hook that is called after data-bound properties are initialized
  ngOnInit() {
    // ...existing code...
  }

  // Function to toggle the visibility of the dropdown
  myFunction(element) {
    this.dropdownVisible = !this.dropdownVisible;
  }
}
