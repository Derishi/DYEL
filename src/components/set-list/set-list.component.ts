import { Component } from '@angular/core';

@Component({
  selector: 'set-list',
  templateUrl: 'set-list.component.html'
})
export class SetListComponent {
    public setList = [
        {repGoal: 5},
        {repGoal: 5},
        {repGoal: 8},
        {repGoal: 12},
        {repGoal: 5}
    ]

  constructor() {}

}
