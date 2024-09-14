import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent implements OnInit {
  user: any={};
  userService=inject(UserService)

  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next:(response) => {
        this.user = response.user; // Access the 'user' property from the API response
      },
      error:(error) => {
        console.error('Error fetching user data:', error);
      }
    }
    );
  }

}
