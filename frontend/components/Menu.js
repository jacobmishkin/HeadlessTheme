import React, {Component} from 'react';
import Link from 'next/link';
import BurgerIcon from './BurgerIcon.js';
import ResponsiveMenu from './ResponsiveMenu.js';
import CloseButton from './CloseButton.js';
import {Config} from '../config.js';

const linkStyle = {
  marginRight: 15,
};

class Menu extends Component {
  getSlug(url) {
    const parts = url.split('/');
    return parts.length > 2 ? parts[parts.length - 2] : '';
  }

  render() {
    const menuItems = this.props.menu.items.map((item, index) => {
      if (item.object === 'custom') {
        return (
          <li key={item.ID}>
            <Link href={item.url}>
              <a style={linkStyle}>{item.title}</a>
            </Link>
          </li>
        );
      }
      const slug = this.getSlug(item.url);
      const actualPage = item.object === 'category' ? 'category' : 'post';
      return (
        <li key={item.ID}>
          <Link
            as={`/${item.object}/${slug}`}
            href={`/${actualPage}?slug=${slug}&apiRoute=${item.object}`}
          >
            <a style={linkStyle}>{item.title}</a>
          </Link>
        </li>
      );
    });

    return (

        <ResponsiveMenu
          menuOpenButton={<BurgerIcon />}
          menuCloseButton={<CloseButton />}
          largeMenuClassName="desktop_menu"
          smallMenuClassName="mobile_menu"
          menu={menuItems}
        />

    );
  }
}

export default Menu;
