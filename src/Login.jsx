import React from 'react';
import { GoogleLogin } from "react-google-login";

const clientId = 'It is something to hide.apps.googleusercontent.com'

function Login() {

    const onSuccess = res => {
        console.log('[Login Success] current user:', res.profileObj);
    }
    const onFailure = res => {
        console.log('Login Failed : ', res);
    }

    return (
        <GoogleLogin 
            clientId={clientId}
            // buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        />
    )
}

export default Login
