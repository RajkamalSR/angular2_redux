import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux'
import { IAppState } from './store';
import { INCREMENT, DECREMENT } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  @select('counter') count;
  constructor(private ngRedux: NgRedux<IAppState>) {
    ngRedux.subscribe(() => {
      var store = ngRedux.getState();
      this.count = store.counter;
    })
  }

  increment() {
    //dispatch an Action
    this.ngRedux.dispatch({type:INCREMENT})
  }

  decrement() {
    //dispatch an Action
    this.ngRedux.dispatch({type:DECREMENT})
  }
}
