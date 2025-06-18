
import { Component, OnInit } from '@angular/core';
import {  Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink,RouterLinkActive,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavComponent  implements OnInit {

  isClient:boolean=false
  protected links:Link[] = [];

  constructor(private router : Router) {

   }
   ngOnInit(): void {
    this.links = [
      // { name: 'Catalogue', path:PUBLIC_ROUTES.CATALOGUES, class:"nav-link", ariaCurrent: 'page', isVisible:true},
      { name: 'Mes Commandes', path: '/catalogue/commandes', class:"nav-link", ariaCurrent: 'page', isVisible:this.isClient},
    ]
  }
  async onLogout() {
     this.router.navigateByUrl('.', {
      skipLocationChange: true,
    }).then(
       () => {
         this.router.navigate(['/catalogue']);
       }
     )
     ;
  }

}
interface Link{
  name:string;
  path:string
  class:string
  sublinks?:Array<Link>
  ariaCurrent?:string
  isVisible?:boolean
  }
