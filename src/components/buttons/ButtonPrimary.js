import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { staticPath } from '../../utils/staticPath';
import { Text } from '../index';
import { sizes } from '../../theme';

export const ButtonPrimary = ({ outlined = false, iconSrc = '', tid, size = 'medium', className, ...props }) => {
  return (
    <StyledButton size={size} outlined={outlined} className={`hoverable ${className}`} {...props}>
      {iconSrc && (
        <IconWrapper>
          <img src={staticPath(iconSrc)} alt="" />
        </IconWrapper>
      )}
      <ButtonText>
        <Text tid={tid} />
      </ButtonText>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  height: 47px;
  width: ${({ width }) => width};
  background-image: url(${({ outlined }) => staticPath(`/svg/${outlined ? 'outlined-button' : 'filled-button'}.svg`)});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: ${({ size }) => {
    switch (size) {
      case 'small':
        return '0 15px';
      case 'medium':
        return `0 ${sizes.offset.medium}`;
      case 'big':
        return `0 ${sizes.offset.big}`;
      default:
        return `0 ${sizes.offset.medium}`;
    }
  }};
  display: flex;
  align-items: center;
`;
const ButtonText = styled.span`
  font-weight: 500;
  font-size: 18px;
  color: #fff;
  text-transform: uppercase;
`;
const IconWrapper = styled.div`
  margin-right: 6px;
`;

ButtonPrimary.propTypes = {
  outlined: PropTypes.bool,
  iconSrc: PropTypes.string,
  tid: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
};
