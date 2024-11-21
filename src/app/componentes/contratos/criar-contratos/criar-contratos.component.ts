import { ContratosService } from './../../service/contratos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-contratos',
  standalone: true,
  imports: [],
  templateUrl: './criar-contratos.component.html',
  styleUrl: './criar-contratos.component.css'
})
export class CriarContratosComponent implements OnInit {
  contrato = {
    id: '',
    nome:'',
    email:'',
    telefone: '',
  }
  router: any;

  constructor( private contratosService: ContratosService ) { }

  ngOnInit(): void {
  }

  criarContrato (){
    this.contratosService.criarContrato(this.contrato).subscribe(
      response => {
        console.log('Contrato criado com sucesso:', response);
        
      },
      error => {
        console.error('Erro ao criar contrato:', error);
      }
    );
  }

  cancelar() {
    this.router.navigate(['/home'])
  }

}
