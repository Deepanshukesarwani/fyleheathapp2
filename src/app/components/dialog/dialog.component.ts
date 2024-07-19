import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngxs/store';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { user } from '../../../models/user.model';
import { AddUser } from '../../../store/user.actions';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-dialog',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    DialogModule,
    DropdownModule,
    ButtonModule,
    CardModule,
    FloatLabelModule,
    FormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
  ],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  visible: boolean = false;
  userName: string = '';
  workoutMinutes: number = 0;
  cities: City[] = [];
  selectedCity: City | undefined;

  constructor(private store: Store) {}

  showDialog() {
    this.visible = true;
  }

  AddWorkout() {
    const newUser = {
      id: Math.random(), // Ideally, generate a unique ID
      name: this.userName,
      workouts: [{ type: this.selectedCity?.name || '', minutes: this.workoutMinutes }],
    };

    this.store.dispatch(new AddUser(newUser));

    // Reset form
    this.userName = '';
    this.selectedCity = undefined;
    this.workoutMinutes = 0;
    this.visible = false;
  }

  ngOnInit() {
    this.cities = [
      { name: 'Running', code: 'NY' },
      { name: 'Cycling', code: 'RM' },
      { name: 'Swimming', code: 'LDN' },
      { name: 'Weight lifting', code: 'IST' },
    ];
  }
}
