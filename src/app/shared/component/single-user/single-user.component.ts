import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../service/users.service';
import { Iusers } from '../../cont/interface';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {
  usrid!: string
  useobj!: Iusers
  constructor(private _activat: ActivatedRoute,
    private _user: UsersService) { }

  ngOnInit(): void {
    // this.usrid=this._activat.snapshot.params['userid']
    // this.useobj=this._user.fetchuser(this.usrid)
    this._activat.params
      .subscribe((res => {
        this.usrid = res['userid'],
          this.useobj = this._user.fetchuser(this.usrid)

      }))
  }

}
