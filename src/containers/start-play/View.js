import React, { useState } from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Text, MainTitle, Subtitle, ButtonPrimary, SectionTitle, Snackbar } from '../../components';
import { Minigames } from './Minigames';
import { staticPath } from '../../utils/staticPath';

export const StartPlayView = () => {
  const [isCopied, setIsCopied] = useState(false);
  const IP = '162.32.12.147:27015';

  const handleCopy = () => {
    setIsCopied(true);
  };

  return (
    <Container>
      <SectionTitle tid="SIDEBAR.LINKS.START_PLAY" number="03" />
      <MainTitle tid="START_PLAY.TITLE" />
      <StyledSubtitle tid="START_PLAY.SUBTITLE" />
      <Minigames />
      <ButtonWrapper>
        <CopyToClipboard text={IP} onCopy={handleCopy}>
          <IPBlock>
            <IPText>{IP}</IPText>
            <CopyIPButton className="hoverable">
              <img src={staticPath('/svg/copy.svg')} alt="Copy" />
            </CopyIPButton>
          </IPBlock>
        </CopyToClipboard>

        <ButtonPrimary tid="START_PLAY.BUTTON_DOWNLOAD" outlined />
      </ButtonWrapper>
      <Snackbar tid="ALERTS.SUCCESS_COPY" active={isCopied} onClose={() => setIsCopied(false)} />
    </Container>
  );
};

const StyledSubtitle = styled(Subtitle)`
  margin: 18px 0 30px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 100%;
`;
const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 35px;
  @media screen and (max-width: 550px) {
    flex-direction: column;
    margin-top: 20px;
    align-items: flex-start;
  }
`;
const IPBlock = styled.div`
  background-image: url(${staticPath('/svg/outlined-gray-button.svg')});
  background-size: 100% 100%;
  height: 49px;
  display: flex;
  align-items: center;
  margin-right: 15px;
  @media screen and (max-width: 550px) {
    margin-right: 0;
    margin-bottom: 15px;
  }
`;
const IPText = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
  color: #616161;
  margin-left: 19px;
  transform: translateX(5px);
`;
const CopyIPButton = styled.button`
  user-select: none;
  position: relative;
  background-image: url(${staticPath('/svg/copy-wrapper.svg')});
  background-size: cover;
  height: 100%;
  width: 52px;
  margin-right: 10px;
  margin-left: 14px;
`;
