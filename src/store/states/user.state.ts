import { Injectable } from '@angular/core';
import { State, StateContext, Action, Selector } from '@ngxs/store';
import { user } from '../../models/user.model';
import { AddUser } from '../user.actions';

interface userModel {
  users: user[];
}

@State<userModel>({
  name: 'user',
  defaults: {
    users: JSON.parse(localStorage.getItem('users') || '[]').length ? JSON.parse(localStorage.getItem('users') || '[]') : [
      {
        id: 1,
        name: 'John Doe',
        workouts: [
          { type: 'Running', minutes: 30 },
          { type: 'Cycling', minutes: 45 }
        ]
      },
      {
        id: 2,
        name: 'Jane Smith',
        workouts: [
          { type: 'Swimming', minutes: 60 },
          { type: 'Running', minutes: 20 }
        ]
      },
      {
        id: 3,
        name: 'Mike Johnson',
        workouts: [
          { type: 'Yoga', minutes: 50 },
          { type: 'Cycling', minutes: 40 }
        ]
      },
    ],
  },
})
@Injectable()
export class UserState {

  @Selector()
  static getAlluser(state: userModel) {
    return state.users;
  }

  @Action(AddUser)
  addUser(ctx: StateContext<userModel>, action: AddUser) {
    const state = ctx.getState();
    const updatedUsers = [...state.users, action.payload];
    ctx.setState({
      ...state,
      users: updatedUsers
    });

    // Save updated state to local storage
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  }
}
