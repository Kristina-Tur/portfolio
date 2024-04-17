import {Menu} from '../menu/Menu';
import React from 'react';
import {S} from '../HeaderMenu_styles'
import {MobileMenuPropsType} from '../mobileMenu/MobileMenu';

export const DesktopMenu: React.FC<MobileMenuPropsType> = (props: MobileMenuPropsType) => {
    return (
        <S.DesktopMenu>
            <Menu menuItems={props.menuItems}/>
        </S.DesktopMenu>
    );
};

