import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() user;
 
  getUser(): string { return this.user; }

  constructor() { }

  ngOnInit() {
    console.log(this.user);
  }

}
