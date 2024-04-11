import React from 'react';
import {S} from '../HeaderMenu_styles'

export const Menu: React.FC<{menuItems: Array<string>}> = (props: { menuItems: Array<string> }) => {
    return (
        <ul role={'menu'}>
            {props.menuItems.map((item, index) => {
                return <S.MenuList key={index} role={'menuItem'}>
                    <S.Link href="">
                        {item}
                        <S.Mask>
                            <span>{item}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{item}</span>
                        </S.Mask>
                    </S.Link>
                </S.MenuList>
            })}
        </ul>
    );
};
