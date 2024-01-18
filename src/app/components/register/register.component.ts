import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/app/sevices/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports:[
    IonicModule,
    CommonModule,
    FormsModule
  ],
  providers: [AuthService]
})
export class RegisterComponent  implements OnInit {

email: string = ""
password: string = ""

  constructor(private authService: AuthService, private Router: Router) { }

  ngOnInit() {}

  register(e:Event){
    this.authService.register(this.email, this.password)
    .then((res:any)=>{
      this.Router.navigate(['/saldo'])
    })
    .catch((err:any)=>{
      alert('error al agregar usuario' + err)
    })
  }

}
