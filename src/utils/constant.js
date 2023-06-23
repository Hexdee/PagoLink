import { GridViewIcon, HorizontalBarChartAscIcon, SendToIcon } from "evergreen-ui";
import { GENERATE_PAYMENT, HISTORY_URL } from "../routes/paths";

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
        href: HISTORY_URL,
        icon: (<HorizontalBarChartAscIcon />)
    },
];

export const TableColumn = ['Trx', 'Description', 'Amount', 'Date & Time', 'Status'];

export const Tablecontent = [
    {
        trx: '104232302',
        description: 'Purchase of sonar',
        amount: '10 USD',
        date: '01/04/2023, 10:04pm',
        status: 'Success'
    },
    {
        trx: '104232302',
        description: 'Purchase of sonar',
        amount: '10 USD',
        date: '01/04/2023, 10:04pm',
        status: 'Fail'
    },
    {
        trx: '104232302',
        description: 'Purchase of sonar',
        amount: '10 USD',
        date: '01/04/2023, 10:04pm',
        status: 'Pending'
    },
    {
        trx: '104232302',
        description: 'Purchase of sonar',
        amount: '10 USD',
        date: '01/04/2023, 10:04pm',
        status: 'Pending'
    },
    {
        trx: '104232302',
        description: 'Purchase of sonar',
        amount: '10 USD',
        date: '01/04/2023, 10:04pm',
        status: 'Fail'
    },
    {
        trx: '104232302',
        description: 'Purchase of sonar',
        amount: '10 USD',
        date: '01/04/2023, 10:04pm',
        status: 'Success'
    },
];
