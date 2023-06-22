import { Link } from "react-router-dom";
import { GENERATE_PAYMENT } from "../routes/paths";

export const LoginPage = () => (
    <div>
        <Link className="font-poppins text-normal" to={GENERATE_PAYMENT}>Generate payment</Link>
    </div>
)