import { GridViewIcon, HorizontalBarChartAscIcon, SendToIcon } from "evergreen-ui";
import { DASHBOARD_HOME_URL, GENERATE_PAYMENT, HISTORY_URL } from "../routes/paths";

export const BACKENDURL = "https://pagolink.cyclic.app";
export const sideBar = [
    {
        title: 'Profile',
        href: DASHBOARD_HOME_URL,
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

export const UserProfile = [
    {
        title: 'First Name',
        res: 'Temitope',
        id: 0,
    },
    {
        title: 'Last name',
        res: 'Aroyewon',
        id: 2,
    },
    {
        title: 'Email',
        res: 'aroyewontemi@gmail.com',
        id: 3,
    },
    {
        title: 'User name',
        res: '@temi',
        id: 4
    },
    {
        title: 'Contact Info',
        res: '-',
        id: 5
    }
]
