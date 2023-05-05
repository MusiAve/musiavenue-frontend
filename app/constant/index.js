import { AccountCircleIcon, LockIcon, NotificationsIcon, SettingsSuggestIcon } from "helpers/Icons";
import { MENUS } from './Menus';

const ACTION = {
    CREATE: 'CREATE',
    ADD: 'ADD',
    VIEW: 'VIEW',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    MORE: 'MORE',
    CANCEL: 'CANCEL'
};

const IMAGE_FILE_TYPES = ["image/png", "image/jpeg", "image/jpg"];

const DATATABLE_ROWS_OPTIONS = [
    { value: 10, label: '10' },
    { value: 25, label: '25' },
    { value: 50, label: '50' },
    { value: 70, label: '70' },
    { value: 100, label: '100' },
    { value: -1, label: 'All' }
];

const PROFILE_TABS = {
    profileTabs: [
        { key: 'profile', label: 'Profile', icon: AccountCircleIcon },
        { key: 'password', label: 'Password', icon: LockIcon },
        { key: 'setting', label: 'Setting', icon: SettingsSuggestIcon },
        { key: 'notifications', label: 'Notifications', icon: NotificationsIcon },
    ]
};

const SIDEBAR_COLOR_SCHEMES = [
    { id: 1, background: '#313541', fontColor: '#a0a0a0', activeBackground: '#079ce9', activeFont: '#ffffff' },
    { id: 2, background: '#f6f8f9', fontColor: '#00000099', activeBackground: '#00905f', activeFont: '#ffffffde' },
    { id: 3, background: '#ffffff', fontColor: '#ffffff', activeBackground: '#639f52', activeFont: '#ffffff' },
    // { id: 4,background: '', fontColor: '', activeBackground: '', activeFont: '' },
]

export { MENUS, ACTION, IMAGE_FILE_TYPES, DATATABLE_ROWS_OPTIONS, PROFILE_TABS, SIDEBAR_COLOR_SCHEMES };