import { Button, TextInput, Textarea } from "evergreen-ui";
import { useState } from "react";
import { DashboardLayout } from "../../templates/dashboardLayout";

export const GetPaymentLink = () => {
    const [amount, setAmount] = useState('');
    const [desc, setDesc] = useState('');
return (
    <DashboardLayout>
        <div className="w-full py-5 pl-4">
            <div className="flex justify-center border w-full rounded-lg border-lightBlue h-[95vh] p-4 mx-auto">
                <div className="w-[35vw]">
                    <img src="/logo.svg" className="mx-auto" alt="logo" width={100} />
                    <p className="text-center font-poppins">Pago Pay</p>

                    <div className="my-4 block">
                        <p htmlFor="amount" className="text-label text-[13px]">Amount:</p>
                        <TextInput className="w-full h-[40px]" style={{ height: '40px', width: '100%' }} id="amount" name="amount" type="number" placeholder="Enter amount to send" onChange={({ target }) => setAmount(target.value)} validationMessage="" />
                    </div>


                    <div className="my-4 block">
                        <p htmlFor="amount" className="text-label text-[13px]">Description:</p>
                        <Textarea className="w-full h-[40px]" style={{ height: '40px', width: '100%' }} id="amount" name="amount" type="number" placeholder="Enter description of your paymemt" onChange={({ target }) => setDesc(target.value)} validationMessage="" />
                    </div>

                    <Button className="w-full" size="large" marginRight={16} appearance="primary" width={"100%"} disabled={!amount || !desc}>
            Generate payment link
        </Button>
                </div>
            </div>
        </div>
    </DashboardLayout>
);
};