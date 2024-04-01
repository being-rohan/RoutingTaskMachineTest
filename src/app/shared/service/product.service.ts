import { Injectable } from '@angular/core';
import { Iproducts, Istatus } from '../cont/interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productArr: Iproducts[] = [
    {
      productName: 'oppo',
      pid: "123",
      pstatus: Istatus.inprogress,
      canRetu:1
    },
    {
      productName: 'samsung',
      pid: "1233",
      pstatus: Istatus.dispatched,
      canRetu:1
    },
    {
      productName: 'vivio',
      pid: "12333",
      pstatus: Istatus.ordered,
      canRetu:0
    }
  ]
  constructor() { }

  fetcallprodutc() {
    return this.productArr
  }
  fetchuser(id: string): Iproducts {
    return this.productArr.find(user => user.pid === id) as Iproducts;

  }
  updatedId(updatedobj: Iproducts) {
    let getindex = this.productArr.findIndex(prod => prod.pid === updatedobj.pid)
    this.productArr[getindex] = updatedobj
    // this.productArr.forEach(prod => {
    //   if (prod.pid === updatedobj.pid) {
    //     prod = updatedobj
    //   } 
    // })
  }
}
