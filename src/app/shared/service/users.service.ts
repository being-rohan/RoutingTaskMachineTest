import { Injectable } from '@angular/core';
import { Iusers } from '../cont/interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userarry: Iusers[] = [
    {
      username: "rohan panchal",
      userid: "1",
      userRole:"candidate"
    },
    {
      username: "anuja bhosle",
      userid: "2",
      userRole:"candidate"
    },
    {
      username: "nikhil singe",
      userid: "3",
      userRole:"admin"
    }
  ]
  constructor() { }

  fetchusers() {
    return this.userarry
  }
  fetchuser(id:string):Iusers{
     return this.userarry.find(user=>user.userid===id) as Iusers;  
  }
  updatedId(updatedobj: Iusers) {
    let getindex = this.userarry.findIndex(prod => prod.userid === updatedobj.userid)
    this.userarry[getindex] = updatedobj
    // this.productArr.forEach(prod => {
    //   if (prod.pid === updatedobj.pid) {
    //     prod = updatedobj
    //   } 
    // })
  }
}




