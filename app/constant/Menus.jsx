import { DashboardIcon, TaskIcon, FiberManualRecordIcon } from 'helpers/Icons';

/* eslint-disable import/prefer-default-export */
export const MENUS = [
    {
        path: '/dashboard',
        icon: DashboardIcon,
        title: 'Dashboard',
        active: 'active',
    },
    {
        path: '/categories',
        icon: TaskIcon,
        title: 'Tasks',
        active: 'active',
        childrens: [
            {
                path: '/test',
                icon: FiberManualRecordIcon,
                title: 'Board',
                active: 'active',
            },
            {
                path: '/test1',
                icon: FiberManualRecordIcon,
                title: 'Reports',
                active: 'active',
            },
        ],
    },
];
