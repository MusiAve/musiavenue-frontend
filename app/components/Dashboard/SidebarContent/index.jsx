import React, { useState, Fragment } from 'react';
import { MuiBox, MuiListItem, MuiListItemIcon, MuiListItemText, MuiCollapse, MuiList } from 'components';
import {
    DashboardIcon,
    ChevronRightIcon,
    ExpandMoreIcon,
    PersonIcon,
    ChecklistIcon,
    CategoryIcon
} from 'helpers/Icons';

const menuItems = [
    { title: 'Dashboard', icon: <DashboardIcon /> },
    { title: 'Category', icon: <CategoryIcon /> },
    { title: 'Sub Category', icon: <CategoryIcon /> },
    { title: 'Orders', icon: <ChecklistIcon /> },
    { title: 'Customers', icon: <PersonIcon /> },
];

const SidebarContent = () => {

    const [openMenus, setOpenMenus] = useState([]);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleMenuToggle = (index) => {
        setSelectedIndex(index);
        if (openMenus.includes(index)) {
            setOpenMenus(openMenus.filter((item) => item !== index));
        } else {
            setOpenMenus([...openMenus, index]);
        }
    };

    const renderSubMenu = (subMenu, menuIndex) => {
        if (!subMenu) return null;

        return (
            <MuiCollapse in={openMenus.includes(menuIndex)} timeout="auto" unmountOnExit className='submenuMainWrap'>
                <MuiList>
                    {subMenu.map((item, index) => (
                        <MuiListItem key={item.title} selected={selectedIndex === index}>
                            <MuiListItemText primary={item.title} />
                        </MuiListItem>
                    ))}
                </MuiList>
            </MuiCollapse>
        );
    };

    return (
        <MuiBox component='ul' className='sidebarListMainWraper'>
            {menuItems.map((menu, index) => (
                <Fragment key={index}>
                    <MuiListItem onClick={() => handleMenuToggle(index)} selected={selectedIndex === index}>
                        <MuiListItemIcon>{menu.icon}</MuiListItemIcon>
                        <MuiListItemText primary={menu.title} />
                        {menu.subMenu && <MuiBox>
                            {openMenus.includes(index) ? <ExpandMoreIcon /> : <ChevronRightIcon />}
                        </MuiBox>}
                    </MuiListItem>
                    {renderSubMenu(menu.subMenu, index)}
                </Fragment>
            ))}
        </MuiBox>
    );
};

export default SidebarContent;
