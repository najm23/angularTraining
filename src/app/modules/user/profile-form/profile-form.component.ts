import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {
  
  profileForm: FormGroup = {} as FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUser();
    this.initform('values');
  }

  initform(values : any): void{
    this.profileForm = new FormGroup({​​
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl(''),
    }​​);
  }

  onSubmit(): void {
    console.log(this.profileForm.valid)
    console.log(this.profileForm.value)
  }

  loadUser():void{
    this.userService.hello();
    this.userService.getUser().subscribe(r => console.log('user', r));
  }
}
