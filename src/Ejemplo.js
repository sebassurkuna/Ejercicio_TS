var factura = /** @class */ (function () {
    function factura(Producto, ValorSinImp) {
        this.Producto = Producto;
        this.ValorSinImp = ValorSinImp;
    }
    factura.prototype.obtenerDatos = function () {
        var ValImpu = this.ValorSinImp * 0.12;
        var ValTot = ValImpu + this.ValorSinImp;
        console.log('El producto: ', this.Producto, ' tiene:\n');
        console.log('Subtotal: ', this.ValorSinImp, '\n');
        console.log('Impuesto (12%) : ', ValImpu, '\n');
        console.log('Valor total: ', ValTot);
    };
    return factura;
}());
var Audifonos = new factura('Sony', 60);
Audifonos.obtenerDatos();
