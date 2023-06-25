import { Button } from "evergreen-ui";
import { PasswordInput } from "../components/inputs/passwordInput";
import { useState } from "react";
import { TextInputs } from "../components/inputs/TextInputs";
import { Link } from "react-router-dom";
import { HOME_URL } from "../routes/paths";

export const CreateAccountPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
return (
        <div className="bg-primary h-screen flex items-center drop-shadow-auth border border-lightBlue">
            {/* <Link className="font-poppins text-normal" to={GENERATE_PAYMENT}>Generate payment</Link> */}
            <div className="flex bg-white justify-center border w-[80vw] lg:w-[30vw] rounded-lg border-lightBlue h-fit py-4 px-8 mx-auto drop-shadow-auth border border-lightBlue">
            <div className="w-full">
                <Link to={HOME_URL}>
                    <img src="/logo.svg" className="mx-auto cursor-pointer" alt="logo" width={100} />
                </Link>
                <h1 className="text-[25px] font-bold text-grey text-center">Create account</h1>

                <div className="flex">
                    <TextInputs
                    keyDown errorMsg="" name="first_name" placeholder="Enter first name" type="text" onChange={({ target }) => setFirstName(target.value)} value={firstName} defaultValue="" label="First Name"
                    />

                    <TextInputs
                    keyDown errorMsg="" name="last_name" placeholder="Enter last name" type="text" onChange={({ target }) => setLastName(target.value)} ml="ml-4" value={lastName} defaultValue="" label="Last Name"
                    />
                </div>
                <TextInputs
                keyDown errorMsg="" name="email" placeholder="example@email.com" type="email" onChange={({ target }) => setEmail(target.value)} value={email} defaultValue="" my="-my-1"
                />

                    <PasswordInput errorMsg="" defaultValue="" onChange={({ target }) => setPassword(target.value)} value={password} name="password" />

                    <Button className="w-full" size="large" marginRight={16} appearance="primary" width={"100%"} disabled={!email || !password || !firstName || !lastName}>
            Create account
        </Button>
        <p className="text-sm cursor-pointer mt-3 text-center">Already have an account ? <span className="text-primary"><Link to={HOME_URL}>Login</Link></span></p>
                </div>
            </div>
        </div>
)
};