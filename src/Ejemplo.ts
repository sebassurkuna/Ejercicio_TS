class elemento{
    IdProducto: number;
    Producto: string;
    ValorProducto: number;
    Cantidad: number;

    constructor( IdProducto:number, Producto:string, ValorProducto:number, Cantidad:number){
        this.IdProducto=IdProducto
        this.Producto=Producto
        this.ValorProducto=ValorProducto;
        this.Cantidad=Cantidad;
    }
}

var Lista:Array<elemento>=[];

class factura{
    Elemento:typeof Lista;

    constructor(Elemento:typeof Lista){
        this.Elemento=Elemento;
    }

    subTotal(): number {
        var SubTotal:number=0;
        this.Elemento.forEach(element => {
            SubTotal= SubTotal+element.ValorProducto*element.Cantidad;
        });

        return SubTotal;
    }
    iva(Valor:number): number {
        var IVA:number=Valor*0.12;
        return IVA;
    }
    total(Valor:number): number {
        var Total: number=this.subTotal()+this.iva(Valor);
        return Total;
    }
}


function agregarElemento(Id:number,Elemento:string,Valor:number,Cantidad:number):void {
    if (Lista.length>Id){
        if (Lista[Id].IdProducto==Id) {
        Cantidad=Lista[Id].Cantidad+1;
        }
    }
    Lista[Id]=new elemento(Id,Elemento,Valor,Cantidad)
    var NuevoElemento = new factura(Lista);

    console.log("\n\n**********\t Factura \t**********")
    console.log("Elemento\t Cantidad\t Precio [u]")
    if (Lista.length>Id) {
        Lista.forEach(element => {
            console.log('\n',element.Producto,'----------',element.Cantidad,'----------',element.ValorProducto)
        });
    }
    console.log('------------------------------------')
    console.log("\nSubtotal : \t",NuevoElemento.subTotal())
    console.log("\nIVA (12%): \t",NuevoElemento.iva(NuevoElemento.subTotal()));
    console.log("\nToatal   : \t",NuevoElemento.total(NuevoElemento.iva(NuevoElemento.subTotal())));
}
agregarElemento(1,'leche',0.90,1);
agregarElemento(1,'leche',0.90,1);
agregarElemento(1,'leche',0.90,1);
agregarElemento(2,'HuevosC',3.30,1);