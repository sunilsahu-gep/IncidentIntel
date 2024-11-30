import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  } 

  navigateSignInPage(){
    this.router.navigate(['/copilot'])
  }

  openDocumentation() {
    window.open('https://gep1-my.sharepoint.com/:w:/g/personal/shikhar_raj_gep_com/EfFxoPcGAm9Nk4LdwKBz9YEBRl_7IwawdvTrKsrEJhUZLQ?e=9Xj8KL', '_blank');
  }

}
