import { Component, OnInit } from '@angular/core';
import { HeaderLinks } from "../header-links/header-links";
import { LinkModel } from '../../models/linkModel';
import { HeaderLinkService } from '../../services/header-link-service';
import { CommonModule } from '@angular/common';
import { MainItem } from "../main-item/main-item";

@Component({
  selector: 'app-main',
  imports: [CommonModule, HeaderLinks, MainItem],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main implements OnInit {
  headerLinks!: LinkModel[];
  activeId!: number;

  constructor(private headerLinkService: HeaderLinkService) { }

  ngOnInit(): void {
    this.activeId = 0;
    this.headerLinks = this.headerLinkService.getLinks();
  }

  toggleActive(id: number)  {
    this.activeId = id;
    return true;
  }
}
