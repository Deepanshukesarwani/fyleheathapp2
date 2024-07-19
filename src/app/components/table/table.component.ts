import { Component } from '@angular/core';

import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { UserState } from '../../../store/states/user.state';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  // customer$;
  constructor(private store:Store){
    this.store.select(UserState.getAlluser).subscribe(data=>{
      console.log(data);
    })
  }
  customer: any = [
    {
      name: 'Deepanshu',
      country: {
        name: 'India',
        code: 'dz',
      },
      company: 'xyz',
      representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png',
      },
    },
    {
      name: 'Deepanshu 2',
      country: {
        name: 'India 2',
        code: 'dz',
      },
      company: 'xyz 2',
      representative: {
        name: 'Ioni Bowche 2',
        image: 'ionibowcher.png',
      },
    },
    {
      name: 'Deepanshu 3',
      country: {
        name: 'India 3',
        code: 'dz',
      },
      company: 'xyz 3',
      representative: {
        name: 'Ioni Bowche 3',
        image: 'ionibowcher.png',
      },
    },
    {
      name: 'Deepanshu 4',
      country: {
        name: 'India 4',
        code: 'dz',
      },
      company: 'xyz 4',
      representative: {
        name: 'Ioni Bowche 4',
        image: 'ionibowcher.png',
      },
    },
    {
      name: 'Deepanshu 5',
      country: {
        name: 'India 5',
        code: 'dz',
      },
      company: 'xyz 5',
      representative: {
        name: 'Ioni Bowche 5',
        image: 'ionibowcher.png',
      },
    },
  ];

  // constructor(private customerService: CustomerService) {}

  // ngOnInit() {
  //     this.customerService.getCustomersLarge().then((customers) => (this.customers = customers));
  // }
}
