import React from 'react';
import {Dots} from './components/Dots';
import {S} from './TabMenu_Styles'

export type TabsStatusType = 'all' | 'landing' | 'react' | 'spa'

export type TabMenuPropsType = {
    menuItems: Array<{status: TabsStatusType, title: string}>,
    changeFilterStatus: (value: TabsStatusType) => void,
    currentFilterStatus: string
}

export const TabMenu: React.FC<TabMenuPropsType> = (props: TabMenuPropsType) => {
    return (
        <S.Nav>
            <S.DotsWrapper>
                <Dots/>
            </S.DotsWrapper>
            <ul role={'menu'}>
                {props.menuItems.map((item, index) => {
                    return <li key={index} role={'menuItem'}>
                        <S.Link active={props.currentFilterStatus === item.status} as={'button'} onClick={() => {props.changeFilterStatus(item.status)}}>{item.title}</S.Link>
                    </li>
                })}
            </ul>
        </S.Nav>
    );
};



