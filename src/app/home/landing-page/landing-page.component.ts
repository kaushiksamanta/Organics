import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { Observable } from 'rxjs';
import { Tutorial } from '../../store/models/tutorial.model';
import {
  AddTutorial,
  RemoveTutorial,
  LoadTutorial,
} from '../../store/actions/tutorial.action';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  tutorials: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>) {
    this.tutorials = this.store.select('tutorial');
  }

  ngOnInit() {
    this.store.dispatch(new LoadTutorial());
  }

  addTutorial(name: string, url: string) {
    this.store.dispatch(new AddTutorial({ name, url }));
  }

  delTutorial(index: number) {
    this.store.dispatch(new RemoveTutorial(index));
  }
}
