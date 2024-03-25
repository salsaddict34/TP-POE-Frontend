import { Component } from '@angular/core';
import { Intern } from './types/intern.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public interns: Array<Intern> = [
    {
      lastname: 'ARNAUD',
      firstname: 'Manon'
    },
    {
      lastname: 'AUBERT',
      firstname: 'Jean-luc'
    },
    {
      lastname: 'BERNARDIN',
      firstname: 'Bruno'
    },
    {
      lastname: 'BERTON',
      firstname: 'Dorine'
    },
    {
      lastname: 'BETTAN',
      firstname: 'Frédéric'
    },
    {
      lastname: 'BONNET',
      firstname: 'Fabien'
    },
    {
      lastname: 'CHENU',
      firstname: 'Guillaume'
    },
    {
      lastname: 'DE BOUARD',
      firstname: 'Anne-claire'
    },
    {
      lastname: 'DUMONET',
      firstname: 'Vincent'
    },
    {
      lastname: 'EL HACHIMI ALAOUI',
      firstname: 'Imane'
    },
    {
      lastname: 'GORMAND',
      firstname: 'Loïc'
    },
    {
      lastname: 'PROVO',
      firstname: 'Sabine'
    },
    {
      lastname: 'ROCK',
      firstname: 'Bertrand'
    },
    {
      lastname: 'ROFFIDAL',
      firstname: 'Yann'
    },
    {
      lastname: 'TROUCHE',
      firstname: 'Boris'
    },
    {
      lastname: 'TURTI',
      firstname: 'Thomas'
    }
  ]
}
