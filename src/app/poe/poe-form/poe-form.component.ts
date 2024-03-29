import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PoeService } from '../services/poe.service';
import { Router } from '@angular/router';
import { Poe } from '../types/poe.types';

@Component({
  selector: 'app-poe-form',
  templateUrl: './poe-form.component.html',
  styleUrl: './poe-form.component.scss'
})
export class PoeFormComponent {
  public poeForm: FormGroup = new FormGroup({})

  constructor(
    private _formBuilder: FormBuilder,
    private _poeService: PoeService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.poeForm = this._formBuilder.group({
      title: [
        '', //Default value
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      duration: [
        1, //Default value
        [
          Validators.required,
          Validators.min(1)
        ]
      ]
    })
  }

  onSubmit(): void {
    this._poeService.add(this.poeForm.value)
      .subscribe((poe: Poe) => {
        this._router.navigate(['/poe'])
      })
  }

}
