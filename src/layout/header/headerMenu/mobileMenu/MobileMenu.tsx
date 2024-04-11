import React from 'react';
import {Menu} from '../menu/Menu';
import {S} from '../HeaderMenu_styles'

export const MobileMenu: React.FC<{menuItems: Array<string>}> = (props: { menuItems: Array<string> }) => {
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen = {false}>
                <span></span>
            </S.BurgerButton>
            <S.MenuPopup isOpen = {false}>
                <Menu menuItems={props.menuItems}/>
            </S.MenuPopup>
        </S.MobileMenu>
    );
};

