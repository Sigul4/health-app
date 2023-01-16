import { IUser } from './../../../../interfaces/user-data.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-inf',
  templateUrl: './user-inf.component.html',
  styleUrls: ['./user-inf.component.scss'],
})
export class UserInfComponent {
  
  @Input() public user: IUser
}
