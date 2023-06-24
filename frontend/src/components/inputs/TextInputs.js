import { Label, TextInput } from "evergreen-ui"

export const TextInputs = ({ keyDown, errorMsg, name, placeholder, type, onChange, value, defaultValue, label, ml, my }) => {
    const handleKeyDown = (e) => {
        if (keyDown) {
          if (e.which === 32) return e.preventDefault();
        }
        return;
      };
    return (
        <div className={`${my || 'my-4'} block ${ml}`}>
        <Label htmlFor="email" className="text-label text-[13px]">{label || 'Email'}</Label>
        <TextInput className="w-full h-[40px]" style={{ height: '45px', width: '100%' }} id={name} name={name} type={type} placeholder={placeholder} validationMessage={errorMsg} onKeyDown={handleKeyDown} onChange={onChange} value={value} defaultValue={defaultValue} />
    </div>
    )
}