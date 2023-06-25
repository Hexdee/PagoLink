import { Button, TextInput, Textarea } from "evergreen-ui";
import { useState } from "react";
import { DashboardLayout } from "../../templates/dashboardLayout";

export const GetPaymentLink = () => {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [paymentId, setPaymentId] = useState();

    const createPaymentLink = async () => {
        try {
            const data = {
                amount: amount,
                description: description
            };
            const token = localStorage.getItem("user");

            const response = await fetch("http://localhost:4000/create-payment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": token // Set the token in the "x-access-token" header
                },
                body: JSON.stringify(data),
            });
            console.log({ response })

            if (response.ok) {
                const id = await response.json();
                setPaymentId(id);
                console.log("Payment ID:", id);
                // Perform any additional actions with the payment ID
            } else {
                console.error("Error creating payment link:", response.status);
                // Handle the error while creating the payment link
            }
        } catch (error) {
            console.error("Error creating payment link:", error);
            // Handle the error while creating the payment link
        }
    }

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
                            <Textarea className="w-full h-[40px]" style={{ height: '40px', width: '100%' }} id="amount" name="amount" type="number" placeholder="Enter description of your paymemt" onChange={({ target }) => setDescription(target.value)} validationMessage="" />
                        </div>

                        <Button onClick={createPaymentLink} className="w-full" size="large" marginRight={16} appearance="primary" width={"100%"} disabled={!amount || !description}>
                            Generate payment link
                        </Button>
                        {paymentId && <p>Payment link: <a target="_blank" href={`https://localhost:4000/pay/${paymentId}`}>{`https://localhost:4000/pay/${paymentId}`}</a></p>}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};