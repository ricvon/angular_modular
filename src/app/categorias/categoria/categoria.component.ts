import { CategoriaService } from './../categoria.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { isValidDate } from 'rxjs/internal/util/isDate';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {
  camposForm: FormGroup;

  constructor(private service: CategoriaService){
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required)
    });
  }

  salvar(){
    this.camposForm.markAllAsTouched();
    if (this.camposForm.valid){
      //console.log('valores digitados: ', this.camposForm.value)
      this.service.salvar(this.camposForm.value)
        .subscribe({
          next: categoria => {
            console.log('Salva com sucesso! ', categoria);
            this.camposForm.reset();
          },
          error: erro => console.log('Ocorreu um erro: ', erro)
        });
    }
  }

  isCampoInvalido(nomeCampo:string):boolean{
    const campo = this.camposForm.get(nomeCampo);
    return (campo?.invalid && campo?.touched && campo?.errors?.['required']);
  }

}
