import React, {Component} from 'react';
import LinkBorder from './LinkBorder.js';
import Link from 'next/link';

const Button = ({href, as, text}) => (
  <Link href={href} as={as}>
    <a className="btn" href={href}>
      {text}
      <LinkBorder btnType={'btn_border'} />
    </a>
  </Link>
);
export default Button;
