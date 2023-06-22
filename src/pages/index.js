import { Button } from "evergreen-ui";
import { PasswordInput } from "../components/inputs/passwordInput";
import { useState } from "react";
import { TextInputs } from "../components/inputs/TextInputs";

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
return (
        <div className="bg-primary h-screen flex items-center">
            {/* <Link className="font-poppins text-normal" to={GENERATE_PAYMENT}>Generate payment</Link> */}
            <div className="flex bg-white justify-center border w-[80vw] lg:w-[35vw] rounded-lg border-lightBlue h-fit p-4 mx-auto">
            <div className="w-full">
                    <img src="/logo.svg" className="mx-auto" alt="logo" width={100} />
                <h1 className="text-[30px] font-bold text-grey text-center">Login</h1>

                <TextInputs
                keyDown errorMsg="" name="email" placeholder="exaple@email.com" type="email" onChange={({ target }) => setEmail(target.value)} value={email} defaultValue=""
                />

                    <PasswordInput errorMsg="" defaultValue="" onChange={({ target }) => setPassword(target.value)} value={password} name="password" />
                    <p className="text-sm -mt-1 cursor-pointer mb-4 text-right">Forgot password ?</p>

                    <Button className="w-full" size="large" marginRight={16} appearance="primary" width={"100%"} disabled={!email || !password}>
            Log in
        </Button>
        <p className="text-sm cursor-pointer my-3 text-center">Don't have an account ? <span className="text-primary">Create one</span></p>
                </div>
            </div>
        </div>
)
};