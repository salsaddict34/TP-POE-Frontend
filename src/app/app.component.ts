import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title = 'Cyber Dev';

  constructor(
    private _router: Router
  ) { }

  onHomeClick(): void {
    this._router.navigate(['/home'])
  }

  onPoeClick(): void {
    this._router.navigate(['/poe'])
  }
}
