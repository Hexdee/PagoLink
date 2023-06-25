import { Button, EditIcon } from "evergreen-ui";
import { UserProfile } from "../../utils/constant";
import { DashboardLayout } from "../../templates/dashboardLayout";

export const DashboardHome = () => {
return (
    <DashboardLayout>
                <div className="w-full py-5 pl-4">
            <div className="flex justify-center border w-full rounded-lg border-lightBlue h-[95vh] p-4 mx-auto">
                <div className="w-[75vw] flex justify-between items-center ">
                    <div className="my-8 w-[45%]">
                        <div className="shadow-card min-h-[400px] rounded-lg p-6">
                        <img src="/logo.svg" className="mx-auto" alt="logo" width={80} />
                        <p className="text-center font-poppins">Pago Pay</p>
                            {UserProfile.map((user) => (
                                    <div className="flex justify-between shadow-card px-4 py-3 my-6 rounded-lg border-b border-primary" key={user.id}>
                                        <p className="text-border font-light text-sm">{user.title} :</p>
                                        <p className="text-md">{user.res}</p>
                                    </div>
                                ))}
                    <Button className="w-full flex" size="large" marginRight={16} appearance="primary" width={"100%"}>
                        <EditIcon color="tint2" marginRight={16} />
                        <p>Edit</p>
                    </Button>
                        </div>
                    </div>
                    <div className="w-[40%]">
                        <img src="/browser.png" alt="logo" width={250} />
                    </div>
                </div>
            </div>
        </div>
    </DashboardLayout>
);
                };