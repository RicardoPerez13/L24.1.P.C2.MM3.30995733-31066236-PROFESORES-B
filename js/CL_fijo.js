import CL_profesor from "./CL_Profesor.js";
export default class CL_fijo extends CL_profesor{
    constructor(nombre,bono,sueldoFijo){
        super(nombre,bono);
        this.sueldoFijo=sueldoFijo;
    }
    set sueldoFijo(s){
        return this._sueldoFijo=+s;
        }
        
        get sueldoFijo(){
        return this._sueldoFijo;
        }

    ingresoTotal(){
        return this.sueldoFijo+this.bono
    }
}