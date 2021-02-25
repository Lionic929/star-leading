import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { ButtonPrimary, AnchorLink, Text } from '../../components';
import { sections } from '../../constants/sections';
import { sizes } from '../../theme';
import { ROUTES } from '../../constants/routes';

export const HeaderMobile = () => {
  const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState(false);

  useEffect(() => {
    if (isBurgerMenuOpened) {
      // document.body.classList.add('overflow-hidden');
    } else {
      // document.body.classList.remove('overflow-hidden');
    }
  }, [isBurgerMenuOpened]);

  const handleClickLink = () => {
    // document.body.classList.remove('overflow-hidden');
    setIsBurgerMenuOpened(false);
  };

  return (
    <>
      <BurgerMenu onClick={() => setIsBurgerMenuOpened(!isBurgerMenuOpened)}>
        <BurgerMenuLines>
          <BurgerMenuLine width="100%" />
          <BurgerMenuLine width={isBurgerMenuOpened ? '50%' : '100%'} />
          <BurgerMenuLine width={isBurgerMenuOpened ? '25%' : '100%'} />
        </BurgerMenuLines>
      </BurgerMenu>
      <MobileMenu isOpened={isBurgerMenuOpened}>
        <MobileMenuContent>
          {sections.map(({ tid, href }) => (
            <MobileMenuRow key={href}>
              <MobileMenuLink href={href} onClick={handleClickLink}>
                <Text tid={`SIDEBAR.LINKS.${tid}`} />
              </MobileMenuLink>
            </MobileMenuRow>
          ))}
          <MobileMenuRow>
            <a href={ROUTES.LOGIN} target="_blank" rel="noopener noreferrer">
              <ButtonPrimary tid="HEADER.LOGIN" outlined iconSrc="/svg/log-in.svg" />
            </a>
          </MobileMenuRow>
          <MobileMenuRow>
            <a href={ROUTES.SIGNUP} target="_blank" rel="noopener noreferrer">
              <ButtonPrimary tid="HEADER.SIGNUP" size="big" iconSrc="/svg/sign-up.svg" />
            </a>
          </MobileMenuRow>
        </MobileMenuContent>
      </MobileMenu>
    </>
  );
};

const BurgerMenu = styled.button`
  width: 45px;
  height: 45px;
  background-color: #171717;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 15;
`;
const BurgerMenuLines = styled.div`
  width: 15px;
`;
const BurgerMenuLine = styled.div`
  background-color: #ffffff;
  height: 1px;
  width: ${({ width }) => width};
  transition: ${sizes.transition.default};
  &:not(:last-of-type) {
    margin-bottom: 4px;
  }
`;
const MobileMenu = styled.nav`
  position: fixed;
  opacity: ${({ isOpened }) => (isOpened ? 1 : 0)};
  top: 0;
  z-index: ${({ isOpened }) => (isOpened ? 20 : -10)};
  left: 0;
  transition: ${sizes.transition.default};
  background-color: #171717;
  min-height: 100vh;
  height: 100vh;
  overflow: hidden;
  width: 100%;
  z-index: 10;
  padding-top: 80px;
  display: flex;
  align-items: center;
`;
const MobileMenuContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 80px);
  overflow-y: auto;
`;
const MobileMenuRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  &:not(:last-of-type) {
    margin-bottom: 15px;
  }
`;
const MobileMenuLink = styled(AnchorLink)`
  font-size: 18px;
  text-align: center;
  color: #ffffff !important;
`;
