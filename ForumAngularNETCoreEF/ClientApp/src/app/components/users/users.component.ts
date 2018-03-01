import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: User[];
  public userToCreate: User;

  constructor(private userService: UserService) {
    this.userToCreate = {};
  }

  ngOnInit() {
    this.userService.get().subscribe(result => {
      this.users = result;
    }, error => console.log(error));
  }

  public createUser(): void {
    this.userService.post(this.userToCreate).subscribe(result => {
      this.users.push(result);
    }, error => console.log(error));
  }

}
