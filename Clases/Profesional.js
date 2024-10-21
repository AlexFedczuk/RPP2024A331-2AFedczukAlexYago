import { Persona } from './Persona.js';

export class Profesional extends Persona {
    constructor(id, nombre, apellido, edad, titulo, facultad, añoGraduacion) {
      super(id, nombre, apellido, edad);
  
      if (!titulo || titulo.trim() === '') {
        throw new Error("ERROR: El título no puede estar vacío");
      }
      if (!facultad || facultad.trim() === '') {
        throw new Error("ERROR: La facultad no puede estar vacía");
      }
      if (añoGraduacion <= 1950) {
        throw new Error("ERROR: El año de graduación debe ser mayor a 1950");
      }
  
      this.titulo = titulo;
      this.facultad = facultad;
      this.añoGraduacion = añoGraduacion;
    }
  
    toString() {
      return `${super.toString()}, Título: ${this.titulo}, Facultad: ${this.facultad}, Año Graduación: ${this.añoGraduacion}`;
    }
}
  