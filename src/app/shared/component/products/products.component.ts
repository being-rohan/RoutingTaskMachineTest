import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Iproducts } from '../../cont/interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  proobj!: Iproducts[]
  
  selectedid!: string
  constructor(private _proSer: ProductService) { }

  ngOnInit(): void {
    this.proobj = this._proSer.fetcallprodutc()
  }

  selected(id: string) {
    this.selectedid = id
  }
}
