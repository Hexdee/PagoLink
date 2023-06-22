import { Link } from "react-router-dom";
import { GENERATE_PAYMENT } from "../routes/paths";
import { AuthLayout } from "../templates/authLayout";

export const LoginPage = () => (
    <AuthLayout>
        <div>
            <Link className="font-poppins text-normal" to={GENERATE_PAYMENT}>Generate payment</Link>
        </div>
    </AuthLayout>
)