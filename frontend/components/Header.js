import React, {Component} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Menu from './Menu.js';
import Logo from './Logo.js';
import {Config} from '../config.js';
import stylesheet from '../src/styles/style.scss';

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Head>
          <style dangerouslySetInnerHTML={{__html: stylesheet}} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title>WordPress + React Starter Kit Frontend by Postlight</title>
        </Head>
        <header>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <Menu menu={this.props.mainNav} />
        </header>
      </div>
    );
  }
}

export default Header;