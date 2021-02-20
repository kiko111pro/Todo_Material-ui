import React from 'react';
import { GoogleLogout } from "react-google-login";

const clientId = 'hidden.apps.googleusercontent.com'

function Logout() {

    const onSuccess = () => {
        alert('LogoutSuccesful');
    }

    return (
        <GoogleLogout
            clientId={clientId}
            // buttonText="Logout"
            onLogoutSuccess={onSuccess}
        />
    )
}

export default Logout
