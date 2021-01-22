class AuthenticationService {
    registedSuccessfulLogin(username, password){
        sessionStorage.setItem('authenticatedUser', username);
    }

    logout(username, password){
        sessionStorage.removeItem('authenticatedUser', username);
    }
}

export default new AuthenticationService()