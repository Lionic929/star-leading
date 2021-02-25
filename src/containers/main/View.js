import React from 'react';
import styled from 'styled-components';

import { ButtonPrimary, Subtitle, MainTitle, AnchorLink, SectionTitle } from '../../components';
import { sizes } from '../../theme';

export const MainView = () => {
  return (
    <Container>
      <SectionTitle tid="SIDEBAR.LINKS.MAIN" number="01" />
      <MainTitle tid="MAIN.TITLE" />
      <StyledSubtitle tid="MAIN.SUBTITLE" />
      <AnchorLink href="#start_play">
        <ButtonPrimary tid="MAIN.BUTTON" outlined />
      </AnchorLink>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const StyledSubtitle = styled(Subtitle)`
  margin: ${sizes.offset.small} 0;
`;
