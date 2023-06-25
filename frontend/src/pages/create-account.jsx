import { Button, toaster } from "evergreen-ui";
import { PasswordInput } from "../components/inputs/passwordInput";
import { useState } from "react";
import { TextInputs } from "../components/inputs/TextInputs";
import { Link, useNavigate } from "react-router-dom";
import { HOME_URL, DASHBOARD_HOME_URL } from "../routes/paths";

export const CreateAccountPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [username, setUsername] = useState('');
    const [lastName, setLastName] = useState('');
    const navigate = useNavigate();
    const handleRegister = async (event) => {
        event.preventDefault();

        const data = {
            firstName,
            lastName,
            username,
            email,
            password
        };
        console.log({ data })

        const response = await fetch("http://localhost:4000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        console.log("response", { response })

        if (response.ok) {
            const user = await response.json();
            localStorage.setItem('user', user.token);
            console.log({ user });
            toaster.success('Registered successfully');
            navigate(DASHBOARD_HOME_URL);
        } else if (response.status == 400) {
            toaster.danger("All Inputs is required!");
        } else if (response.status == 409) {
            toaster.danger("Account exist, please login!");
        }
    }

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
                        keyDown errorMsg="" name="username" placeholder="Enter username" type="text" onChange={({ target }) => setUsername(target.value)} value={username} defaultValue="" my="-my-1" label="Username"
                    />
                    <TextInputs
                        keyDown errorMsg="" name="email" placeholder="example@email.com" type="email" onChange={({ target }) => setEmail(target.value)} value={email} defaultValue="" my="-my-1"
                    />

                    <PasswordInput errorMsg="" defaultValue="" onChange={({ target }) => setPassword(target.value)} value={password} name="password" />

                    <Button onClick={handleRegister} className="w-full" size="large" marginRight={16} appearance="primary" width={"100%"} disabled={!email || !password || !firstName || !lastName}>
                        Create account
                    </Button>
                    <p className="text-sm cursor-pointer mt-3 text-center">Already have an account ? <span className="text-primary"><Link to={HOME_URL}>Login</Link></span></p>
                </div>
            </div>
        </div>
    )
};