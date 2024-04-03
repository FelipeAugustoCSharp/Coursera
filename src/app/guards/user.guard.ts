import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

export const userGuard: CanActivateFn = (route, state) => {
  if (inject(UsuarioService).mostrarMenu) {
    console.log("passou");    
    return true;
  }else{
    console.log("nao passou");    
    return false;
  }
};
