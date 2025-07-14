import { Aside } from './components/aside/aside';
import { Component } from '@angular/core';
import { Header } from "./components/header/header";

@Component({
  selector: 'app-root',
  imports: [Header, Aside],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'gmail-clone';
}
