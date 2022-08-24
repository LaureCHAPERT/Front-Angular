import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() user:User;
  roles:string[];

  constructor(
    private userService: UserService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.roles= this.userService.getUserRoles();
  }
  //on vérifie si l'utilisateur en question a un rôle ou non
  //afin de pré-cocher ou non un form
  hasRole(role:string):boolean {
    return this.user.roles.includes(role);
  }
  //vérifier si le rôle sélectionné dans le form est déjà présent ou non
  selectRole($event: Event, role:string) {
    // le user a t'il coché la case ?
    const isChecked:boolean = ($event.target as HTMLInputElement).checked;
    //si oui j'ajoute le rôle
    if(isChecked) {
      this.user.roles.push(role);
      //sinon je l'enlève
    }else {
      //
      const index = this.user.roles.indexOf(role);
      this.user.roles.splice(index, 1);
    }
  }
  isRolesValid(role: string):boolean {
    //si le rôle inférieur  à 1 => empêche le user de décocher seulement la case
    //actuellement cochée
    if(this.user.roles.length == 1 && this.hasRole(role))  {
      return false;
    }
    //si le user a déjà sélectionné 3 coses il faut l'empêcher de sélectionner les
    //autres cases
    //on freeze ici SEULEMENT les autres cases pas encore cochées (l'inverse de la
    //méthode hasRole) pour que l'utilisateur puissent décocher les cochées
    if(this.user.roles.length > 1 && !this.hasRole(role)) {
      return false;
    }
    //sinon on laisse
    return true;
  }
  //je redirige vers la page de l'utilisateur maintenant modifié
  onSubmit() {
    this.userService.updateUser(this.user)
      .subscribe(() => this.router.navigate(['/users']));
  }

}
