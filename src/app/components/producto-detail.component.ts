import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto'
import { GLOBAL } from '../services/global';

@Component({
    selector: 'producto-detail',
    templateUrl: '../views/producto-detail.html',
    providers: [ProductoService]
})
export class ProductoDetailComponent{
    public producto: Producto;

    constructor(private _route: ActivatedRoute, private _router: Router, private _productoService: ProductoService) 
    {

    }

    ngOnInit()
    {
        console.log('producto-detail.Component.ts cargado...')
    }
}