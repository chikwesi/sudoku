import { Component, OnInit } from '@angular/core';
import {BoardService} from '../board.service';
import {SettingsService} from '../settings.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showSpinner = false;

  constructor(private boardService: BoardService, private settings: SettingsService, private router: Router) { }

  ngOnInit() {
  }

  isLevel(level) {
    return this.settings.level === level;
  }

  get level() {
    return this.settings.level;
  }

  setLevel(level) {
    this.settings.level = level;
  }

  gameExists() {
    return this.boardService.boardExists;
  }

  startNewGame() {
    this.showSpinner = true;
    this.boardService.newBoard().subscribe(b => {
      this.showSpinner = false;
      this.router.navigate(['/game']);
    });
  }
}
