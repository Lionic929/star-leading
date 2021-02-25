import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Wrapper } from '../../components/layouts';
import { colors, sizes } from '../../theme';
import { staticPath } from '../../utils/staticPath';
import { Text, AnchorLink, Triangle } from '../../components';

export const SidebarView = ({ sections, activeSection }) => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <HeaderText>
            <Triangle width="50px" />
            <Text tid="SIDEBAR.TITLE" />
          </HeaderText>
        </Header>
        <Links>
          {sections.map(({ tid, href }, index) => {
            const isActive = activeSection === href;
            return (
              <SectionItem key={tid}>
                <SectionLink href={href} isActive={isActive} className="hoverable">
                  <LinkLine isActive={isActive} />
                  <LinkText isActive={isActive}>
                    <Text tid={`SIDEBAR.LINKS.${tid}`} />
                  </LinkText>
                  <LinkNumber isActive={isActive}>{index + 1}</LinkNumber>
                </SectionLink>
              </SectionItem>
            );
          })}
        </Links>
        <Footer />
      </Container>
    </Wrapper>
  );
};

SidebarView.propTypes = {
  sections: PropTypes.array.isRequired,
  activeSection: PropTypes.string.isRequired,
};

const Container = styled.div`
  z-index: 7;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: ${sizes.sidebar.lg};
  @media screen and (max-width: 1150px) {
    max-width: ${sizes.sidebar.sm};
  }
  width: 100%;
  position: fixed;
  margin: 0 auto;
  top: 50%;
  transform: translateY(calc(-50% + 40px));
  @media screen and (max-width: 950px) {
    display: none;
  }
`;
const Header = styled.header`
  padding: 0 ${sizes.offset.medium};
  height: 47px;
  display: flex;
  align-items: center;
  background: ${colors.dark};
  position: relative;
`;
const HeaderText = styled.span`
  color: ${colors.primary};
  font-weight: 500;
  font-size: 18px;
`;
const Links = styled.ul`
  background: ${colors.dark};
  width: 100%;
  padding: ${sizes.offset.small};
`;
const SectionItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: ${sizes.offset.small};
  }
`;
const SectionLink = styled(AnchorLink)`
  ${({ isActive }) =>
    isActive &&
    `&:hover {
  opacity: 1;
}`}

  display: flex;
  align-items: center;
`;
const LinkLine = styled.div`
  transition: ${sizes.transition.default};
  background-color: ${({ isActive }) => (isActive ? colors.primary : colors.gray)};
  height: 1px;
  width: ${({ isActive }) => (isActive ? '70' : '26')}px;
  margin-right: 20px;
  @media screen and (max-width: 1150px) {
    width: ${({ isActive }) => (isActive ? '45' : '20')}px;
    margin-right: 15px;
  }
`;
const LinkText = styled.span`
  font-weight: ${({ isActive }) => (isActive ? 700 : 400)};
  font-size: 24px;
  color: #fff;
`;
const LinkNumber = styled.span`
  color: ${({ isActive }) => (isActive ? colors.primary : colors.textGray)};
  font-weight: bold;
  font-size: 24px;
  margin-left: auto;
`;
const Footer = styled.footer`
  height: 100px;
  width: 100%;
  background-image: url(${staticPath('/svg/sidebar-footer.svg')});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-top: -8px;
`;
