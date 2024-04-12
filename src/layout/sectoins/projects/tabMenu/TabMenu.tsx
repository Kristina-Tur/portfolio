import React from 'react';
import {Dots} from './components/Dots';
import {S} from './TabMenu_Styles'

export const TabMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <S.Nav>
            <S.DotsWrapper>
                <Dots/>
            </S.DotsWrapper>
            <ul role={'menu'}>
                {props.menuItems.map((item, index) => {
                    return <li key={index} role={'menuItem'}>
                        <S.Link href="#">{item}</S.Link>
                    </li>
                })}
            </ul>
        </S.Nav>
    );
};



