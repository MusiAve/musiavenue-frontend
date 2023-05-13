import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { MuiBox, MuiLink } from 'components';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import { MoreHorizIcon, EditIcon, DeleteIcon } from 'helpers/Icons';

function DropMenu(props) {

    const { editLink, listItems } = props;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <MuiBox className='DropMenuMainWrap'>
            <IconButton
                onClick={handleClick}
                size="small"
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                <MoreHorizIcon />
            </IconButton>

            <Menu
                className='commonDropMenuWrap'
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                        '& li': {
                            padding: '4px 15px',
                            fontSize: 15,
                            color: '#000',
                            '& svg': {
                                color: '#000',
                                fontSize: 18,
                            },
                            '& .MuiListItemIcon-root': {
                                minWidth: 28,
                            },
                            '& a': {
                                color: '#000',
                                display: 'flex',
                                alignItems: 'center',
                                fontWeight: 300,
                            }
                        }
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {listItems ? listItems.map((item, index) => (
                    <MenuItem onClick={handleClose} key={index}>
                        <MuiLink component={Link} to={item.link}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            {item.label}
                        </MuiLink>
                    </MenuItem>
                )) :
                    <Fragment>
                        <MenuItem onClick={handleClose}>
                            <MuiLink component={Link} to={editLink}>
                                <ListItemIcon>
                                    <EditIcon />
                                </ListItemIcon>
                                Edit
                            </MuiLink>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <DeleteIcon />
                            </ListItemIcon>
                            Delete
                        </MenuItem>
                    </Fragment>
                }

            </Menu>
        </MuiBox>
    )
}

export default DropMenu