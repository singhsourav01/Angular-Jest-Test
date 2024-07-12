import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { CustomPipe } from '../../pipes/custom.pipe';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [ MatButtonModule, CustomPipe],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss'
})
export class CustomButtonComponent {
  @Input() message: string = '';
  @Input() test: string = '';
  name = 'George';

}
