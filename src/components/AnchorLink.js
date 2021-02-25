import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const AnchorLink = ({ onClick = () => {}, href, ...props }) => {
  const handleClick = (e) => {
    onClick();
    const blockToScrollId = href && href.slice(1);
    const blockToScroll = document.getElementById(blockToScrollId);

    if (!blockToScroll) {
      return;
    }

    const YpositionToScroll = blockToScroll.getBoundingClientRect().top + window.pageYOffset;
    const headerHeight = document.getElementById('header').offsetHeight - 10;

    if (typeof YpositionToScroll !== 'number') {
      return;
    }
    e.preventDefault();

    window.scrollTo({
      behavior: 'smooth',
      top: YpositionToScroll - headerHeight,
    });
  };

  return <Link {...props} href={href} onClick={(e) => handleClick(e)} />;
};

AnchorLink.propTypes = {
  onClick: PropTypes.func,
  href: PropTypes.string.isRequired,
};

const Link = styled.a`
  color: inherit;
`;
