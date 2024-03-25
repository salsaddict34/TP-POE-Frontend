import { Component } from '@angular/core';
import { Intern } from './types/intern.type';
import { InternService } from './services/intern.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  /**
   * @var Array<Itern>
   * Array of Intern to be displayed
   */
  public interns: Array<Intern> = []
  constructor(
    private _service: InternService
  ) { }

  ngOnInit(): void {
    this.interns = this._service.interns
  }
}
