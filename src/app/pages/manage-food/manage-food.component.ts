import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-manage-food',
  standalone: true,
  imports: [
    ButtonModule,
    RouterLink
  ],
  templateUrl: './manage-food.component.html',
  styleUrl: './manage-food.component.css'
})
export class ManageFoodComponent {

}
