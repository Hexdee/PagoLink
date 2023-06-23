import { Menu } from "evergreen-ui";
import { AuthLayout } from "../../templates/authLayout";
import { sideBar } from "../../utils/constant";
import { useLocation } from "react-router-dom";

export const DashboardHome = () => {
    const location = useLocation();
return (
    // <AuthLayout>
        <div className="w-[24vw] border-r h-[95vh] border-lightBlue bg-primary rounded-lg m-5">
            <p className="text-tiny text-sm p-4">MENU</p>
            <div className=" px-4">
                {sideBar.map((link) => (
                    <div key={link.title} className={`text-white my-4 py-4 px-7 cursor-pointer hover:bg-sidebar_bg rounded-lg font-poppins flex items-center ${link.href === location.pathname ? 'bg-sidebar_bg' : ''}`}>
                            <div>{link.icon}</div>
                            <h3 className="ml-3">{link.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    // </AuthLayout>
);
                };