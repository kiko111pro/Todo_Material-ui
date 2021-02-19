import React from 'react';
import { GoogleLogout } from "react-google-login";

const clientId = '476947383029-4lthbd4um1qimtilg3qeeu08en1b8a5a.apps.googleusercontent.com'

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
