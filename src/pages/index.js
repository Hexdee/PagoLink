import { Button } from "evergreen-ui";
import { PasswordInput } from "../components/inputs/passwordInput";
import { useState } from "react";
import { TextInputs } from "../components/inputs/TextInputs";
import { Link, useNavigate } from "react-router-dom";
import { CREATE_ACCOUNT, GENERATE_PAYMENT } from "../routes/paths";

export const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        localStorage.setItem('user', email);
        navigate(GENERATE_PAYMENT)
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