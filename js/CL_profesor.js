export default class CL_profesor{
    constructor(nombre,bono){
        this.nombre=nombre
        this.bono=bono
    }

    set nombre(n){
        return this._nombre=n;
        }
        
        get nombre(){
        return this._nombre;
        }

        set bono(b){
            return this._bono=+b;
            }
            
            get bono(){
            return this._bono;
            }

}