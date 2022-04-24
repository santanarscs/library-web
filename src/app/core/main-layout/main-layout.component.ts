import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular'
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  public isOpen: boolean = false;
  constructor(public keycloak: KeycloakService) {}

  ngOnInit(): void {}

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
  logout() {
    this.keycloak.logout();
  }
}
