import React from 'react';
import {S} from '../HeaderMenu_styles'

export const Menu: React.FC<{ menuItems: Array<{ title: string, href: string }> }> = (props: {
    menuItems: Array<{ title: string, href: string }>
}) => {
    return (
        <ul role={'menu'}>
            {props.menuItems.map((item, index) => {
                return <S.MenuList key={index} role={'menuItem'}>
                    <S.NavLink activeClass="active"
                               to={item.href}
                               spy={true}
                               smooth={true}
                               offset={15}
                    >
                        {item.title}
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                    </S.NavLink>
                </S.MenuList>
            })}
        </ul>
    );
};
