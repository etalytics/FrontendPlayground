import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CounterComponent } from '../../counter.component';

@Component({
  imports: [RouterModule, CounterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'etalytics';
}
