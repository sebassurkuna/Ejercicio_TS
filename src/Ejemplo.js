var elemento = /** @class */ (function () {
    function elemento(IdProducto, Producto, ValorProducto, Cantidad) {
        this.IdProducto = IdProducto;
        this.Producto = Producto;
        this.ValorProducto = ValorProducto;
        this.Cantidad = Cantidad;
    }
    return elemento;
}());
var Lista = [];
var factura = /** @class */ (function () {
    function factura(Elemento) {
        this.Elemento = Elemento;
    }
    factura.prototype.subTotal = function () {
        var SubTotal = 0;
        this.Elemento.forEach(function (element) {
            SubTotal = SubTotal + element.ValorProducto * element.Cantidad;
        });
        return SubTotal;
    };
    factura.prototype.iva = function (Valor) {
        var IVA = Valor * 0.12;
        return IVA;
    };
    factura.prototype.total = function (Valor) {
        var Total = this.subTotal() + this.iva(Valor);
        return Total;
    };
    return factura;
}());
function agregarElemento(Id, Elemento, Valor, Cantidad) {
    if (Lista.length > Id) {
        if (Lista[Id].IdProducto == Id) {
            Cantidad = Lista[Id].Cantidad + 1;
        }
    }
    Lista[Id] = new elemento(Id, Elemento, Valor, Cantidad);
    var NuevoElemento = new factura(Lista);
    console.log("\n\n**********\t Factura \t**********");
    console.log("Elemento\t Cantidad\t Precio [u]");
    if (Lista.length > Id) {
        Lista.forEach(function (element) {
            console.log('\n', element.Producto, '----------', element.Cantidad, '----------', element.ValorProducto);
        });
    }
    console.log('------------------------------------');
    console.log("\nSubtotal : \t", NuevoElemento.subTotal());
    console.log("\nIVA (12%): \t", NuevoElemento.iva(NuevoElemento.subTotal()));
    console.log("\nToatal   : \t", NuevoElemento.total(NuevoElemento.iva(NuevoElemento.subTotal())));
}
agregarElemento(1, 'leche', 0.90, 1);
agregarElemento(1, 'leche', 0.90, 1);
agregarElemento(1, 'leche', 0.90, 1);
agregarElemento(2, 'HuevosC', 3.30, 1);
