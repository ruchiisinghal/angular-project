import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { UsersService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user$ = this.usersService.currentUserProfile$;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}
}
