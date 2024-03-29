import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InternService } from '../services/intern.service';
import { Router } from '@angular/router';
import { Intern } from '../types/intern.type';
import { Poe } from '../../poe/types/poe.types';
import { PoeService } from '../../poe/services/poe.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-intern-form',
  templateUrl: './intern-form.component.html',
  styleUrl: './intern-form.component.scss'
})
export class InternFormComponent {
  public internForm: FormGroup = new FormGroup({})
  public poes: Array<Poe> = []
  public selectedPoe: Poe = {
    title: "",
    duration: 1
  }

  constructor(
    private _formBuilder: FormBuilder,
    private _internService: InternService,
    private _router: Router,
    private _poeService: PoeService
  ) { }

  ngOnInit(): void {
    this.internForm = this._formBuilder.group({
      lastname: [
        '', //Default value
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      firstname: [
        '', //Default value
        [
          Validators.required,
        ]
      ]
    })
    this._poeService.findAll()
      .pipe(
        take(1)
      )
      .subscribe((poes: Poe[]) => {
        this.poes = poes
      })
  }

  onChange(): void {

  }

  onSubmit(): void {
    this._internService.add(this.internForm.value)
      .subscribe((intern: Intern) => {
        this._router.navigate(['/home'])
      })
  }
}
