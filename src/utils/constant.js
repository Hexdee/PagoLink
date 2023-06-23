import { GridViewIcon, HorizontalBarChartAscIcon, SendToIcon } from "evergreen-ui";
import { GENERATE_PAYMENT } from "../routes/paths";

export const sideBar = [
    {
        title: 'Profile',
        href: '',
        icon: (<GridViewIcon />)
    },
    {
        title: 'Generate Link',
        href: GENERATE_PAYMENT,
        icon: (<SendToIcon />)
    },
    {
        title: 'History',
        href: '',
        icon: (<HorizontalBarChartAscIcon />)
    },
];