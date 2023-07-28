import React from 'react';
import { Link as InertiaLink } from '@inertiajs/inertia-react';

const CustomLink = ({ color, hrefProp, message }) => {
  const styles = {
    link: `${color} text-white px-8 py-4 rounded-full font-bold text-lg mb-4 transform transition-transform hover:scale-105`,
  };

  return (
    <InertiaLink href={hrefProp} className={styles.link}>
      {message}
    </InertiaLink>
  );
};

CustomLink.defaultProps = {
  color: 'bg-blue-500',
  hrefProp: '/',
  message: '',
};

export default CustomLink;
