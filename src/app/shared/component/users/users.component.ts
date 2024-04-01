import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { Iusers } from '../../cont/interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userarr!: Iusers[]
  selectid!: string
  constructor(private _users: UsersService) { }

  ngOnInit(): void {
    this.userarr = this._users.fetchusers()
  }
  selected(id: string) {
    this.selectid = id

  }

}
