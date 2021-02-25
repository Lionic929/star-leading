import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { getMinigamesList } from '../../actions/minigames';
import { Skeleton } from '../../components';
import { colors, sizes } from '../../theme';

export const Minigames = () => {
  const { list: minigames, loading } = useSelector((state) => state.minigames);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMinigamesList());
    setInterval(() => {
      dispatch(getMinigamesList({ withoutLoading: true }));
    }, 5000);
  }, []);

  return (
    <Container>
      <MinigamesWrapper>
        {!loading && minigames.length
          ? minigames.map(({ title, online, total, id }) => (
              <Minigame key={id}>
                <GameName>{title}</GameName>
                <ProgressWrapper>
                  <Progress online={online} total={total} />
                </ProgressWrapper>
                <Online>
                  {online}/{total}
                </Online>
              </Minigame>
            ))
          : new Array(4).fill(null).map((_, index) => (
              <Minigame key={index}>
                <Skeleton variant="text" width="36px" height="12px" />
                <Skeleton variant="text" width="50%" height="22px" />
                <Skeleton variant="text" width="36px" height="12px" />
              </Minigame>
            ))}
      </MinigamesWrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
`;
const MinigamesWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 15px 25px;
  @media screen and (max-width: 1100px) and (min-width: 951px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Minigame = styled.div`
  height: 50px;
  background-color: ${colors.dark};
  border-radius: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  @media screen and (max-width: 400px) {
    padding: 0 15px;
  }
`;
const ProgressWrapper = styled.div`
  border-radius: 69px;
  background-color: #000000;
  height: 27px;
  padding: 6px 7px;
  width: 100%;
  margin: 0 15px;
  @media screen and (max-width: 400px) {
    margin: 0 9px;
  }
`;
const Progress = styled.div`
  height: 15px;
  width: ${({ online, total }) => (online / total) * 100}%;
  border-radius: 69px;
  background-color: ${colors.primary};
  transition: ${sizes.transition.default};
`;
const GameName = styled.span`
  color: #ffffff;
  font-size: 18px;
  white-space: nowrap;
  @media screen and (max-width: 400px) {
    font-size: 16px;
  }
`;
const Online = styled.span`
  color: #ffffff;
  font-size: 18px;
  white-space: nowrap;
  @media screen and (max-width: 400px) {
    font-size: 16px;
  }
`;
