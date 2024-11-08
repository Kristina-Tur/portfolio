import React from 'react';
import {Projects} from '../sectoins/projects/Projects';
import {Container} from '../../component/Container';
import {DesktopMenu} from './headerMenu/desktopMenu/DesktopMenu';
import {MobileMenu} from './headerMenu/mobileMenu/MobileMenu';
import {S} from './Header_Styles'

const headerItems = [
    {
        title: 'Home',
        href: 'home'
    },
    {
        title: 'Projects',
        href: 'projects'
    },
    {
        title: 'About',
        href: 'about'
    },
    {
        title: 'Contacts',
        href: 'contacts'
    },

]
export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 992;
    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                {width < breakpoint ? <MobileMenu menuItems={headerItems}/>
                    : <DesktopMenu menuItems={headerItems}/>}
            </Container>
        </S.Header>
    );
};

