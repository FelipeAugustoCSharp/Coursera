import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-form-sign',
  templateUrl: './form-sign.component.html',
  styleUrls: ['./form-sign.component.scss'],  
})
export class FormSignComponent implements OnInit{

  @Input() pass2!: string;
  @Input() btnAcao!: string;
  @Input() tela!: string;
  @Input() linkpage!:string;
  @Input() nameAction!: string;
  @Input() message!: string;
  @Input() esqueci_senha!: string;
  @Output() grupoFormulario: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

    formulario!: FormGroup;
    constructor(private userService: UsuarioService, private form: FormBuilder) { }

    ngOnInit(): void {
        this.formulario = this.form.group({
          id:[""],
          email:["",[ Validators.required ,Validators.email]],
          senha:["", [Validators.required]]
        })
    }

    enviarFormulario(): void {
      this.grupoFormulario.emit(this.formulario);
      //console.log(this.formulario);
    }
}
