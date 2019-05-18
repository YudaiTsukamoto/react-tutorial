/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import * as React from 'react';

// ===
// @interface

type Props = {
  src: string;
  alt?: string;
  className?: string;
};

// ===
// @view
const Avatar: React.FC<Props> = ({ src, alt, className }) => {
  return <Image src={src} alt={alt} className={className} />;
};

// ===
// @styled
const Image = styled.img({
  borderRadius: '50%',
  objectFit: 'cover',
});

// ===
// @export
export default Avatar;
