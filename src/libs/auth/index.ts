class AuthClient {
  public isAuthenticated: boolean = false;

  public authenticate(cb: Function) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  }

  public signout(cb: Function) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
}

export default new AuthClient();
