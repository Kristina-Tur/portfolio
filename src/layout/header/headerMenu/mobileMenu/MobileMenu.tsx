import React, {useState} from 'react';
import {Menu} from '../menu/Menu';
import {S} from '../HeaderMenu_styles'
import {TabsStatusType} from '../../../sectoins/projects/tabMenu/TabMenu';

export const MobileMenu: React.FC<{ menuItems: Array<{title: string, href: string}> }> = (props: { menuItems: Array<{title: string, href: string}> }) => {

    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen);
    }

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MenuPopup isOpen={menuIsOpen} onClick={() => {
                setMenuIsOpen(false)
            }
            }>
                <Menu menuItems={props.menuItems}/>
            </S.MenuPopup>
        </S.MobileMenu>
    );
};

