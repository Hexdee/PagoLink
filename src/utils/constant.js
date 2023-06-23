import { GridViewIcon, SendToIcon } from "evergreen-ui";
import { GENERATE_PAYMENT } from "../routes/paths";

export const sideBar = [
    {
        title: 'Profile',
        href: '',
        icon: (<GridViewIcon />)
    },
    {
        title: 'Generate Payment',
        href: GENERATE_PAYMENT,
        icon: (<SendToIcon />)
    },
];