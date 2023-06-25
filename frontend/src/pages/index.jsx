import { Button, toaster } from "evergreen-ui";
import { PasswordInput } from "../components/inputs/passwordInput";
import { useState } from "react";
import { TextInputs } from "../components/inputs/TextInputs";
import { Link, useNavigate } from "react-router-dom";
import { CREATE_ACCOUNT, DASHBOARD_HOME_URL } from "../routes/paths";
import { BACKENDURL } from "../utils/constant"


export const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = { email, password };

        const response = await fetch(`${BACKENDURL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        console.log({ response });
        if (response.status == 200) {
            const user = await response.json();
            localStorage.setItem('user', user.token);
            console.log({ user });
            toaster.success('Authenticated successfully')
            navigate(DASHBOARD_HOME_URL);
        } else if (response.status == 400) {
            toaster.danger("Invalid Credentials");
        }
    }

    return (
        <div className="bg-primary h-screen flex items-center drop-shadow-auth border border-lightBlue">
            <div className="flex bg-white justify-center border w-[80vw] lg:w-[30vw] rounded-lg border-lightBlue h-fit py-4 px-8 mx-auto drop-shadow-auth border border-lightBlue">
                <div className="w-full">
                    <img src="/logo.svg" className="mx-auto" alt="logo" width={100} />
                    <h1 className="text-[30px] font-bold text-grey text-center">Login</h1>

                    <form onSubmit={handleSubmit}>
                        <TextInputs
                            keyDown errorMsg="" name="email" placeholder="exaple@email.com" type="email" onChange={({ target }) => setEmail(target.value)} value={email} defaultValue=""
                        />

                        <PasswordInput errorMsg="" defaultValue="" onChange={({ target }) => setPassword(target.value)} value={password} name="password" />
                        <p className="text-sm -mt-1 cursor-pointer mb-4 text-right">Forgot password ?</p>

                        <Button className="w-full" size="large" marginRight={16} appearance="primary" width={"100%"} disabled={!email || !password}>
                            Log in
                        </Button>
                    </form>

                    <p className="text-sm cursor-pointer mt-3 text-center">Don't have an account ? <span className="text-primary"><Link to={CREATE_ACCOUNT}>Create one</Link></span></p>
                </div>
            </div>
        </div>
    )
};
