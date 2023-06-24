import { EyeOffIcon, EyeOpenIcon, Label, TextInput } from "evergreen-ui"
import { useState } from "react"

export const PasswordInput = ({ errorMsg, defaultValue, onChange, value, name }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="my-4 block relative">
        <Label htmlFor="password" className="text-label text-[13px]">Password:</Label>
        <TextInput className="w-full h-[40px]" style={{ height: '45px', width: '100%' }} id={name} name={name} type={isOpen ? 'text' : 'password'} placeholder="***********" validationMessage={errorMsg} onChange={onChange} value={value} defaultValue={defaultValue} />
        <div className="absolute top-10 bottom-0 right-5 cursor-pointer" onClick={() => setIsOpen((prev) => !prev)}>
           {isOpen ? <EyeOffIcon /> : <EyeOpenIcon />}
        </div>
    </div>
    )
}