import Employee from './Employee';

class MainEmployee extends Employee {
  constructor() {
    super();

    this._loggedIn;
  }

  get loggedIn() {
    return this._loggedIn;
  }

  set loggedIn(loggedIn) {
    this._loggedIn = loggedIn;
  }
}

export default MainEmployee;