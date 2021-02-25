import React from 'react';
import styled from 'styled-components';

import { Text, MainTitle, Subtitle, Triangle, SectionTitle } from '../../components';
import { sizes, colors } from '../../theme';

export const AboutUsView = () => {
  return (
    <Container>
      <SectionTitle tid="SIDEBAR.LINKS.ABOUT_US" number="05" />
      <MainTitle tid="ABOUT_US.TITLE" />
      <StyledSubtitle tid="ABOUT_US.SUBTITLE" />
      <Cards>
        <Card>
          <CardHeader>
            <Triangle width="70px" />
            <CardHeaderText>Rust</CardHeaderText>
          </CardHeader>
          <CardContent>
            <CardContentText>
            Rust - это выживание в уникальном мире Rust'a, где вам понадобится добывать ресурсы и обороняться со всеми механиками существующими сейчас в оригинальной игре. Для вас была срисована самая популярная карта из оригинальной игры и построено более 40 различных локаций для посещения и лутинга. Для более детального погружения команда STAR создала свой текстур пак с крупным объемом нововведений для ванильной игры без использования модов. Тут вы всегда в опасности как и все другие…
            </CardContentText>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Triangle width="70px" />
            <CardHeaderText>MiniGames</CardHeaderText>
          </CardHeader>
          <CardContent>
            <CardContentText>
            MiniGames - это набор лучших игр выбранных всем сообществом Minecraft, начиная от самых быстрых Duels до долгих и затяжных игр HideAndSeek. В этой подборке учтены все пожелания для успешной и захватывающей игры, тут, вам как никогда понравится веселится не только одному, но и с друзьями!
            </CardContentText>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Triangle width="70px" />
            <CardHeaderText>RaidPVP</CardHeaderText>
          </CardHeader>
          <CardContent>
            <CardContentText>
            RaidPVP - это уникальный и обновленный режим кланВара, мы долгое время подбирали самый интересный сеттинг который улучшил бы ванильную игру, но и не усложнил бы ее до уровня оригинального кланВара. Мы хотим вам подарить возможность выбора и не одного, начиная с тактики игры, мы хотим чтобы вы сразу выбрали тех, с кем будете сражаться и тех кого будете оборонять и помогать в сложную минуту. У вас появиться возможность не останавливаться на обычном алмазном сете, завершая при этом игру, у вас появиться возможность пойти дальше, улучшая ее все выше вплоть до Героической. Да и на этом можно будет не остановиться ведь впереди еще куча возможностей которые предстоит выбирать вам!
            </CardContentText>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Triangle width="70px" />
            <CardHeaderText>Prison</CardHeaderText>
          </CardHeader>
          <CardContent>
            <CardContentText>
            Prison - это самая настоящая тюрьма где вам предстоит драться за уважение и работать на шахте чтобы становиться сильнее. Для этого режима предусмотрены новые механики побега и грабежа жителей внешнего города. Нарушайте правила, крадите и убивайте, ведь только бог вам судья в этом режиме.
            </CardContentText>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Triangle width="70px" />
            <CardHeaderText>Creative</CardHeaderText>
          </CardHeader>
          <CardContent>
            <CardContentText>
            Creative - это многими любимый режим, в котором можно отдохнуть от выживания и насладиться креативом, воображением других игроков и своим. Для вас будет подготовлено 2 игровых сервера, в одном вы будете искать подходящее место для вышей постройки на оригинальной и не плоской карте Minecraft, а в другом вы сразу же получите участок для строительства размером 50х50 блоков на ровной поверхности.
            </CardContentText>
          </CardContent>
        </Card>
      </Cards>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const StyledSubtitle = styled(Subtitle)`
  margin: 6px 0 30px;
`;
const Cards = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
  @media screen and (max-width: 500px) {
    &:not(:last-of-type) {
      margin-bottom: 20px;
    }
  }
`;
const CardHeader = styled.header`
  width: calc(100% - 70px);
  padding: 20px 30px 0;
  background-color: ${colors.dark};
  position: relative;
  @media screen and (max-width: 500px) {
    padding: 10px 15px 0;
    width: calc(100% - 25px);
  }
`;
const CardHeaderText = styled.span`
  font-weight: bold;
  font-size: ${sizes.font.medium.lg};
  line-height: 160%;
  color: #ffffff;
  @media screen and (max-width: 500px) {
    font-size: ${sizes.font.medium.sm};
  }
`;
const CardContent = styled.div`
  background-color: ${colors.dark};
  padding: 8px 30px 20px;
  @media screen and (max-width: 500px) {
    padding: 6px 15px 10px;
  }
`;
const CardContentText = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
  color: #ffffff;
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;
