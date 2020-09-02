import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  doingOne: boolean
  doingTwo: boolean
  doingThree: boolean

  constructor(private router: Router) {
    this.doingOne = false
    this.doingTwo = false
    this.doingThree = false
  }

  ngOnInit(): void {
  }

  public doing1() {
    this.doingOne = true
    this.doingTwo = false
    this.doingThree = false
  }

  public doing2() {
    this.doingTwo = true
    this.doingOne = false
    this.doingThree = false
  }

  public doing3() {
    this.doingTwo = false
    this.doingThree = true
    this.doingOne = false
  }

  logout() {
    this.router.navigateByUrl('connexion')
  }
}