class AuthenticationService {
    registedSuccessfulLogin(username,password){
        console.log("registering user successful")
        sessionStorage.setItem('authenticatedUser', username);
    }
}

export default new AuthenticationService()