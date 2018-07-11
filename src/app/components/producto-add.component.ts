import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service' ;
import { Producto } from '../models/producto'

@Component({
    selector: 'producto-add',
    templateUrl: '../views/producto-add.html',
    providers: [ProductoService]
})

export class ProductoAddComponent{
    public titulo: string;
    public producto: Producto;

    constructor(private _route: ActivatedRoute, private _router: Router, private _productoService: ProductoService)
    {
      this.titulo = 'Crear un nuevo producto';
      this.producto = new Producto('0','','',0,'');
    }

    ngOnInit()
    {
  
    }

    onSubmit()
    {
      console.log(this.producto);

      this._productoService.makeFileRequest([], this.filesToUpload).then((result) => 
      {
            console.log(result);
      },
      (error) => { console.log(error);}
        );

      this._productoService.addProducto(this.producto).subscribe(
          response => {
            if(response.code == 200){
                this._router.navigate(['/productos']);
            }else{
                console.log(response);
            }    
          },
          error => {
              console.log(<any>error);
          }
      )
    }

    public filesToUpload;
    public resultUpload;

    fileChangeEvent(fileInput: any)
    {
        this.filesToUpload = <Array<File>>fileInput.target.files;
        console.log(this.filesToUpload);
    }

}
