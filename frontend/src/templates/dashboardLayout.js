
import { Link, useLocation } from "react-router-dom";
import { sideBar } from "../utils/constant";
import { LogOutIcon } from "evergreen-ui";
import { HOME_URL } from "../routes/paths";

export const DashboardLayout = ({ children }) => {
    const location = useLocation();
    const handleLogout = () => {
        localStorage.clear();
        window.location.href = HOME_URL
    }
return (
    <div className="w-[100vw] flex">
        <div className="w-[24vw] border-r h-[95vh] border-lightBlue bg-primary rounded-lg m-5 relative">
            <p className="text-tiny text-sm p-4">MENU</p>
            <div className=" px-4">
                {sideBar.map((link) => (
                    <Link to={link.href}>
                        <div key={link.title} className={`text-white my-4 py-4 px-7 cursor-pointer hover:bg-sidebar_bg rounded-lg font-poppins flex items-center ${link.href === location.pathname ? 'bg-sidebar_bg' : ''}`}>
                            <div>{link.icon}</div>
                            <h3 className="ml-3 text-[14px]">{link.title}</h3>
                        </div>
                    </Link>
                ))}
                <div className="flex absolute bottom-10 rounded-lg w-[90%] items-center text-white cursor-pointer hover:bg-sidebar_bg py-4 px-7" onClick={handleLogout}>
                    <LogOutIcon />
                    <p className="ml-4 text-[14px]">Logout</p>
                </div>
            </div>
        </div>
        <div className="w-[70vw]">
            {children}
        </div>
    </div>
);
                };