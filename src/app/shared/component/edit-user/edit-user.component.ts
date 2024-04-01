import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../service/users.service';
import { Iusers } from '../../cont/interface';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userid!: string;
  userobj!: Iusers
  userform!: FormGroup
  canedit: boolean = false
  constructor(private _activate: ActivatedRoute,
    private _router: Router,
    private _userservice: UsersService) { }

  ngOnInit(): void {
    this.cretaform()
    this.userid = this._activate.snapshot.params['userid']
    this._activate.queryParams
      .subscribe((res => {
        if (res['canrole'] === "admin") {
          this.userform.disable()
          this.canedit = true

        } else {
          this.userform.enable()
          this.canedit = false
        }
      }))
    this.userobj = this._userservice.fetchuser(this.userid)
    this.userform.patchValue(this.userobj)
  }

  cretaform() {
    this.userform = new FormGroup({
      username: new FormControl(null, [Validators.required])
    })
  }
  onupdate() {
    let updatedobj: Iusers = { ... this.userform.value, userid: this.userid }
    this._userservice.updatedId(updatedobj);
    this._router.navigate(['users'])
  }
}
