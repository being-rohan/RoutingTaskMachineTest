import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { Iproducts } from '../../cont/interface';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  proid!: string;
  proobj!: Iproducts
  constructor(private _activated: ActivatedRoute, private _product: ProductService) { }

  ngOnInit(): void {

    // this.proid = this._activated.snapshot.params['pid']
    // this.proobj = this._product.fetchuser(this.proid)
    this._activated.params
      .subscribe((res => {
        console.log(res);
        
        this.proid = res['pid'],
          this.proobj = this._product.fetchuser(this.proid)

      }))
  }



}
