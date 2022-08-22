export class User {
  id:number;
  firstName:string;
  lastName:string;
  email:string;
  telephone:string;
  roles:string[];
  password:string;


constructor(
  firstName:string = 'Léa',
  lastName:string = 'Erau',
  email: string = 'lea@gmail.com',
  telephone: string = "06517578852",
  roles:string[] = ['USER'],
) {
  this.firstName=firstName;
  this.lastName=lastName;
  this.email =email;
  this.telephone = telephone;
  this.roles = roles;
}

}
