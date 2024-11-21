import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";
import { FooterComponent } from "./componentes/footer/footer.component";
import { CriarContratosComponent } from "./componentes/contratos/criar-contratos/criar-contratos.component";
import { MatriculaComponent } from "./componentes/contratos/matricula/matricula.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabecalhoComponent, FooterComponent, CriarContratosComponent, MatriculaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gym-front';
}
