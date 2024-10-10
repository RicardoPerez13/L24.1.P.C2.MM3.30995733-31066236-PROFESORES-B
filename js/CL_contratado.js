import CL_profesor from "./CL_Profesor.js";
export default class CL_contratado extends CL_profesor{
    constructor(nombre,bono,horas){
        super(nombre,bono);
        this.horas=horas;
    }

    set horas(h){
        return this._horas=+h;
        }
        
        get horas(){
        return this._horas;
        }

        sueldo(){
            return this.horas*10
        }

        ingresoTotal(){
            return this.sueldo()+this.bono;
        }

}