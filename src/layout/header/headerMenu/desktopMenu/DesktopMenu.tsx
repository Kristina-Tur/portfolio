import {Menu} from '../menu/Menu';
import React from 'react';
import {S} from '../HeaderMenu_styles'

export const DesktopMenu: React.FC<{menuItems: Array<{title: string, href: string}>}> = (props: { menuItems: Array<{title: string, href: string}> }) => {
    return (
        <S.DesktopMenu>
            <Menu menuItems={props.menuItems}/>
        </S.DesktopMenu>
    );
};

