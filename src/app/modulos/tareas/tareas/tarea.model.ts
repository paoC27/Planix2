export interface Tarea {
  id?: string;
  titulo: string;
  fecha: Date;
  descripcion: string;
  estado: "pendiente" | "realizada";
}
