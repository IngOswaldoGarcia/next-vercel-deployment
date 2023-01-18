import { ActiveLink } from './ActiveLink'
import styles from './NavBar.module.css'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const NavBar = () => {
  return (
    <nav className={ styles['menu-container']}>
        {
          menuItems.map( page => (
              <ActiveLink key={ page.href } text={ page.text } href={ page.href } />
            )) 
        }
    </nav>
  )
}
