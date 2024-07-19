export class AddUser {
    static readonly type = '[User] Add';
    constructor(public payload: { id: number; name: string; workouts: { type: string; minutes: number }[] }) {}
  }
  