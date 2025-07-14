import { Component, OnInit } from '@angular/core';
import { HeaderLinks } from "../header-links/header-links";
import { LinkModel } from '../../models/linkModel';
import { HeaderLinkService } from '../../services/header-link-service';

@Component({
  selector: 'app-main',
  imports: [HeaderLinks],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main implements OnInit {
  headerLinks!: LinkModel[];

  constructor(private headerLinkService: HeaderLinkService) { }

  ngOnInit(): void {
    this.headerLinks = this.headerLinkService.getLinks();
  }


}
