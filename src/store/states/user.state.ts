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
    users: JSON.parse(localStorage.getItem('users') || '[]'),
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
