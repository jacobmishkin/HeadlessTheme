import React, {Component} from 'react';

import Link from 'next/link';
import ResponsiveMenu from './ResponsiveMenu.js';
import {BurgerIcon, CloseButton, LinkBorder} from '../utilities';
import {Config} from '../config.js';
import LinkSmoothScroll from './LinkSmoothScroll.js';
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
            <LinkSmoothScroll href={item.url}>
              <a>
                {item.title}
                <LinkBorder btnType="navBtn" />
              </a>
            </LinkSmoothScroll>
          </li>
        );
      }
      const slug = this.getSlug(item.url);
      const actualPage = item.object === 'category' ? 'category' : 'post';
      return (
        <li key={item.ID}>
          <LinkSmoothScroll href={item.url}>
            <Link
              as={`/${item.object}/${slug}`}
              href={`/${actualPage}?slug=${slug}&apiRoute=${item.object}`}
            >
              <a>
                {item.title}
                <LinkBorder btnType="navBtn" />
              </a>
            </Link>
          </LinkSmoothScroll>
        </li>
      );
    });

    return (
      <ResponsiveMenu
        menuOpenButton={<BurgerIcon />}
        menuCloseButton={<CloseButton />}
        primaryNavigationClassName="primary_navigation"
        mobileNavigationClassName="mobile_navigation"
        primary_menuClassName="desktop_menu"
        mobile_menuClassName="mobile_menu"
        menu={menuItems}
      />
    );
  }
}

export default Menu;
