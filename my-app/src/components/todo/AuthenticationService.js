class AuthenticationService {
    registedSuccessfulLogin(username, password){
        sessionStorage.setItem('authenticatedUser', username);
    }

    logout(username, password){
        sessionStorage.removeItem('authenticatedUser', username);
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return false;
        return true;
    }
}

export default new AuthenticationService()