import { Button, TextInput, Textarea } from "evergreen-ui";

export const GetPaymentLink = () => (
    <div className="w-full my-4">
        <div className="flex justify-center border w-[35vw] rounded-lg border-lightBlue h-fit p-4 mx-auto">
            <div className="w-full">
                <img src="/logo.svg" className="mx-auto" alt="logo" width={100} />
                <p className="text-center font-poppins">Pago Pay</p>

                <div className="my-4 block">
                    <p htmlFor="amount" className="text-label text-[13px]">Amount:</p>
                    <TextInput className="w-full h-[40px]" style={{ height: '40px', width: '100%' }} id="amount" name="amount" type="number" placeholder="Enter amount to send" />
                </div>


                <div className="my-4 block">
                    <p htmlFor="amount" className="text-label text-[13px]">Description:</p>
                    <Textarea className="w-full h-[40px]" style={{ height: '40px', width: '100%' }} id="amount" name="amount" type="number" placeholder="Enter description of your paymemt" />
                </div>

                <Button className="w-full" size="large" marginRight={16} appearance="primary" width={"100%"}>
        Generate payment link
      </Button>
            </div>
        </div>
    </div>
);