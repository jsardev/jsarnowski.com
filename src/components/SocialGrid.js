import React from 'react';
import classNames from 'classnames';

import iconGithub from '../icons/social-github.svg';
import iconDev from '../icons/social-dev.svg';
import iconLinkedIn from '../icons/social-linkedin.svg';

const socials = [
  { href: 'https://github.com/sarneeh', icon: iconGithub },
  { href: 'https://dev.to/sarneeh', icon: iconDev },
  { href: 'https://linkedin.com/in/jakub-sarnowski', icon: iconLinkedIn }
];

export default ({ className }) => (
  <div className={classNames('flex gap-4', className)}>
    {socials.map((social, index) => (
      <a
        key={index}
        href={social.href}
        className={classNames('flex', 'justify-center', 'w-32', 'anim-scale')}
      >
        <img src={social.icon} />
      </a>
    ))}
  </div>
);
