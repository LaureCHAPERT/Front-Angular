export class User {
  id:number;
  firstname:string;
  lastname:string;
  email:string;
  telephone:string;
  roles:string[];
  password:string;

constructor(
  firstname:string = '',
  lastname:string = '',
  email: string = '',
  telephone: string = '',
  password: string = '',
  roles:string[] = [],
) {
  this.firstname=firstname;
  this.lastname=lastname;
  this.email =email;
  this.telephone = telephone;
  this.password = password;
  this.roles = roles;
}


}
