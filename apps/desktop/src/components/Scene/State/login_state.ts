import { atom, selector } from 'recoil';

export const isLoggedIn = atom({
    key: 'isLoggedIn',
    default: false,
});
