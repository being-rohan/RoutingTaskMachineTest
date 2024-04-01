import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { Iproducts } from '../../cont/interface';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  pid!: string;
  proobj!: Iproducts
  productForm!: FormGroup
  isedit: boolean = false
  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _proSer: ProductService) { }

  ngOnInit(): void {
    this.cretaeform()
    this.pid = this._route.snapshot.params['pid']
    this._route.queryParams
      .subscribe((res => {
        if (res['canedit'] == 0) {
          this.productForm.disable()
          this.isedit = true
        } else {
          this.productForm.enable()
          this.isedit = false
        }
      }))
    this.proobj = this._proSer.fetchuser(this.pid)
    this.productForm.patchValue(this.proobj)



  }
  cretaeform() {
    this.productForm = new FormGroup({
      productName: new FormControl(null, [Validators.required]),
      pstatus: new FormControl(null, [Validators.required])
    })
  }
  onupdate() {
    let updatedobj: Iproducts = { ... this.productForm.value, pid: this.pid }
    this._proSer.updatedId(updatedobj);
    console.log();

    console.log(updatedobj);

    this._router.navigate(['products'])
  }

}
