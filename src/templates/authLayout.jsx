export const AuthLayout = ({ children }) => (
    <div className="bg-white drop-shadow-auth h-[10vh]">
        <div className="h-full items-center flex justify-start">
            <img src="/logo.svg" className="pl-5" alt="logo" width={65} />
        </div>
        <div className="">
            {children}
        </div>
    </div>
);