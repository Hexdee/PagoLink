import { toaster } from "evergreen-ui";
import { DashboardLayout } from "../../templates/dashboardLayout";
import { TableFormat } from "../../components/table";
import { useEffect, useState } from "react";
import { BACKENDURL } from "../../utils/constant";

export const History = () => {
    const [transactionHistory, setTransactionHistory] = useState([]);
    const getTransactionHistory = async (token) => {
        try {
            const response = await fetch(`${BACKENDURL}/profile?token=${token}`);
            const {payments: histories} = await response.json();
            const _transactionHistory = histories.map((history) => {
                return {trx: history._id, description: history.description, amount: `${history.amount} USD`, date: new Date(history.dateCreated).toLocaleString(), status: history.paid ? "Success" : "Pending"}
            })
            // console.log({history});
            setTransactionHistory(_transactionHistory);
        } catch (error) {
            console.error({ error });
            toaster.danger("Error getting user profile");
            localStorage.removeItem("user");
            location.reload();
        }
    };
    useEffect(() => {
        const token = localStorage.getItem("user");
        getTransactionHistory(token);
    }, [])
    return (
        transactionHistory && <DashboardLayout>
            <div className="w-full py-5 pl-4">
                <div className="flex justify-center border w-full rounded-lg border-lightBlue h-[95vh] p-4 mx-auto">
                    <div className="w-full">
                        <h1 className="text-[20px] py-4 px-2 font-gilroyBold font-bold">Your Payment History</h1>
                        <TableFormat tableContent={transactionHistory}/>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};