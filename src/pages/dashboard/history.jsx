import { DashboardLayout } from "../../templates/dashboardLayout";
import { TableFormat } from "../../components/table";

export const History = () => {
return (
    <DashboardLayout>
        <div className="w-full py-5 pl-4">
            <div className="flex justify-center border w-full rounded-lg border-lightBlue h-[95vh] p-4 mx-auto">
                <div className="w-full">
                    <h1 className="text-[20px] py-4 px-2 font-gilroyBold font-bold">Your Payment History</h1>
                    <TableFormat />
                </div>
            </div>
        </div>
    </DashboardLayout>
);
};