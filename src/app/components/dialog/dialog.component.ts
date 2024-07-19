import { Component,ViewEncapsulation } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { Store } from '@ngxs/store';
@Component({
  selector: 'app-dialog',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [DialogModule, ButtonModule,CardModule,FloatLabelModule, FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  
  
  constructor(private store:Store){

  }
  visible: boolean = false;
  value: string | undefined;
  showDialog() {
      this.visible = true;
  }
}
