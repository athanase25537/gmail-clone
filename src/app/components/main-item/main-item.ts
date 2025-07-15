import { Component, input } from '@angular/core';
import { ContentModel } from '../../models/contentModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-item',
  imports: [CommonModule],
  templateUrl: './main-item.html',
  styleUrl: './main-item.scss'
})
export class MainItem {
  myContent = input<ContentModel>(
    new ContentModel(true, true, "Google notification", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, sequi?", "13:05")
  )

  toggleIsFarorite() {
    this.myContent().isFavorite = !this.myContent().isFavorite;
  }

  toggleImportant() {
    this.myContent().isImportant = !this.myContent().isImportant;
  }

  toggleIsCheck() {
    console.log("here we are")
    this.myContent().isCheck = !this.myContent().isCheck;
  }
}
