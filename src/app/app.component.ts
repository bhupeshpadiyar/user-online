import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'User Online';

  allUsers: Array<any>;

  constructor(private userService: UserService) {

  }

  ngOnInit() {

    this.getAllUsers();

  }

  getAllUsers() {
        this.userService.getAllUsers().subscribe( response => {
                console.log(response);

                this.allUsers = response.body;
        },
        error => {
                console.log(error);
        });
  }

  submitUserForm(data) {

    console.log(data.value);

    const userObject = data.value;
    this.userService.createUpdateUser(userObject).subscribe( response => {
                console.log(response);

                this.getAllUsers();

        },
        error => {
                console.log(error);
        });

  }
}
