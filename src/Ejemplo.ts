class factura{
    Producto: string;
    ValorSinImp: number;

    constructor(Producto: string, ValorSinImp: number){
        this.Producto=Producto;
        this.ValorSinImp=ValorSinImp;
    }

    obtenerDatos (): void {
        const ValImpu:number= this.ValorSinImp*0.12;
        const ValTot:number=ValImpu+this.ValorSinImp;
        console.log('El producto: ',this.Producto,' tiene:\n')
        console.log('Subtotal: ',this.ValorSinImp,'\n')
        console.log('Impuesto (12%) : ',ValImpu,'\n')
        console.log('Valor total: ',ValTot)

    }
}



const Audifonos = new factura('Sony',60);
Audifonos.obtenerDatos()