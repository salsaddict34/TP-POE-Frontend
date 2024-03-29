import { Component } from '@angular/core';
import { Poe } from './types/poe.types';
import { PoeService } from './services/poe.service';
import { take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poe',
  templateUrl: './poe.component.html',
  styleUrl: './poe.component.scss'
})
export class PoeComponent {
  /**
     * @var Array<Poe>
     * Array of Poe to be displayed
     */
  public poes: Array<Poe> = []
  constructor(
    private _service: PoeService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._service.findAll()
      .pipe(
        take(1)
      )
      .subscribe((poes: Poe[]) => {
        this.poes = poes
      })
  }

  onClick(): void {
    this._router.navigate(['/poe-add'])
  }
}
