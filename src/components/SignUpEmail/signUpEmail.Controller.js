import React from 'react'
import SignUpEmail from './signUpEmail'
export default function SignUpEmailController() {

    const onSignUpEmail = (params) => {
        const { name, email, password } = params
        requestPostSignUpApi(name, email, email, password)
    }

    const requestPostSignUpApi = async (name, email, confirmEmail, password) => {
        fetch('http://localhost:5000/api/account/register/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                confirmEmail: confirmEmail,
                password: password,
                name: name,
                gender: "male",
                dateOfBirth: "09/16/1999",
                city: "HCM",
                country: "Vietnam"
            })
        })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .catch((error) => console.error(error));
    }

    return (
        <SignUpEmail onSignUpEmail={onSignUpEmail} />
    )
}
