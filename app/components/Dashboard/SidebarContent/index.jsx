import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import { MuiBox, MuiListItem, MuiListItemIcon, MuiListItemText, MuiCollapse, MuiList } from 'components';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    menuHeader: {
        marginBottom: theme.spacing(2),
    },
}));

const menuItems = [
    {
        title: 'Dashboard',
        icon: <DashboardIcon />,
    },
    {
        title: 'Users',
        icon: <PeopleIcon />,
        subMenu: [
            { title: 'All Users' },
            { title: 'Active Users' },
            { title: 'Inactive Users' },
        ],
    },
    {
        title: 'Settings',
        icon: <SettingsIcon />,
        subMenu: [
            { title: 'General Settings' },
            { title: 'Security' },
            { title: 'Notifications' },
        ],
    },
];

const SidebarContent = () => {
    const classes = useStyles();
    const [openMenus, setOpenMenus] = useState([]);

    const handleMenuToggle = (index) => {
        if (openMenus.includes(index)) {
            setOpenMenus(openMenus.filter((item) => item !== index));
        } else {
            setOpenMenus([...openMenus, index]);
        }
    };

    const renderSubMenu = (subMenu, menuIndex) => {
        if (!subMenu) return null;

        return (
            <MuiCollapse in={openMenus.includes(menuIndex)} timeout="auto" unmountOnExit>
                <MuiList component="div" disablePadding>
                    {subMenu.map((item, index) => (
                        <MuiListItem
                            key={item.title}
                            button
                        >
                            <MuiListItemText primary={item.title} />
                        </MuiListItem>
                    ))}
                </MuiList>
            </MuiCollapse>
        );
    };

    return (
        <MuiBox className={classes.root}>
            {menuItems.map((menu, index) => (
                <MuiBox key={index}>
                    <MuiListItem button onClick={() => handleMenuToggle(index)}>
                        <MuiListItemIcon>{menu.icon}</MuiListItemIcon>
                        <MuiListItemText primary={menu.title} />
                        {menu.subMenu && <MuiBox>
                            {openMenus.includes(index) ? <ExpandMoreIcon /> : <ChevronRightIcon />}
                        </MuiBox>}
                    </MuiListItem>
                    {renderSubMenu(menu.subMenu, index)}
                </MuiBox>
            ))}
        </MuiBox>
    );
};

export default SidebarContent;
