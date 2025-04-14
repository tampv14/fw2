export interface IRegister{
  id:string
  name:string
  email:string
  password:string
  comfirmPassword:string | undefined
}
export interface ILogin{
  id:string
  email:string
  password:string
}