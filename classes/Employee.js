class Employee {
  constructor(){
    this._first_name;
    this._last_name;
    this._id;
    this._email;
  }

  // Getter and Setters

  get first_name(){
    return this._first_name;
  }

  get last_name(){
    return this._last_name;
  }

  get id(){
    return this._id;
  }

  get email(){
    return this._email;
  }

  set first_name(first_name){
    this._first_name = first_name;
  }

  set last_name(last_name){
    this._last_name = last_name;
  }

  set id(id){
    this._id = id;
  }

  set email(email){
    this._email = email;
  }
}

export default Employee;