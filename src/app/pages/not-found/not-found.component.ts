import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/layout/header/header.component";
import { FooterComponent } from "../../components/layout/footer/footer.component";

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

}
