class Auth {
  static authenticateUser(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('username', user.name);
  }

  static isUserAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  static deauthenticateUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }

  static getToken() {
    return localStorage.getItem('token');
  }

  static getUser() {
    return localStorage.getItem('username');
  }
}

export default Auth;