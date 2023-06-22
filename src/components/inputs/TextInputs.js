import { Label, TextInput } from "evergreen-ui"

export const TextInputs = ({ keyDown, errorMsg, name, placeholder, type, onChange, value, defaultValue }) => {
    const handleKeyDown = (e) => {
        if (keyDown) {
          if (e.which === 32) return e.preventDefault();
        }
        return;
      };
    return (
        <div className="my-4 block">
        <Label htmlFor="email" className="text-label text-[13px]">Email:</Label>
        <TextInput className="w-full h-[40px]" style={{ height: '45px', width: '100%' }} id={name} name={name} type={type} placeholder={placeholder} validationMessage={errorMsg} onKeyDown={handleKeyDown} onChange={onChange} value={value} defaultValue={defaultValue} />
    </div>
    )
}