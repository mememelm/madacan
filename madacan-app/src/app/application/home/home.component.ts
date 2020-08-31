import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private locationStrategy: LocationStrategy
  ) {
    this.locationStrategy.onPopState(() => {
      history.pushState(null, null, window.location.href)
    });
  }

  ngOnInit(): void {
  }

  public connexion() {
    this.router.navigateByUrl('connexion')
  }
}