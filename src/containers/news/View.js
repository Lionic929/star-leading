import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Triangle, SectionTitle, Skeleton } from '../../components';
import { colors } from '../../theme';

export const NewsView = ({ list, loading }) => {
  return (
    <Container>
      <SectionTitle tid="SIDEBAR.LINKS.NEWS" number="02" />
      <NewsList>
        {(list && list.length ? list : new Array(3).fill({})).map((singleNews = {}, index) => {
          const { title, text, date, id } = singleNews;
          return (
            <Card key={id || index}>
              <CardHeader>
                <Triangle width="80px" />
                {loading ? <Skeleton variant="text" width="100%" /> : <Title>{title}</Title>}
              </CardHeader>
              <CardContent>
                {loading ? (
                  <Skeleton variant="rect" width="100%" height="150px" />
                ) : (
                  <CardContentText>{text}</CardContentText>
                )}
              </CardContent>
              <CardFooter>
                <Triangle direction="right bottom" width="50px" />
                {loading ? <Skeleton variant="text" width="100%" /> : <CardFooterText>{date}</CardFooterText>}
              </CardFooter>
            </Card>
          );
        })}
      </NewsList>
    </Container>
  );
};

NewsView.propTypes = {
  list: PropTypes.array,
  loading: PropTypes.bool.isRequired,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: 100%;
`;
const NewsList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;
const Card = styled.article`
  width: 100%;
  &:not(:last-of-type) {
    margin-bottom: 40px;
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 600px) {
    &:not(:last-of-type) {
      margin-bottom: 20px;
    }
  }
`;
const CardHeader = styled.header`
  padding: 20px 20px 0;
  width: calc(100% - 80px);
  background-color: ${colors.dark};
  position: relative;
  @media screen and (max-width: 600px) {
    padding: 15px 10px 0;
    width: calc(100% - 30px);
  }
`;
const Title = styled.h4`
  font-weight: bold;
  font-size: 21px;
  color: ${colors.primary};
  line-height: 160%;
  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;
const CardContent = styled.div`
  padding: 10px 20px 20px;
  background-color: ${colors.dark};
  width: 100%;
  @media screen and (max-width: 600px) {
    padding: 7px 10px 10px;
  }
`;
const CardContentText = styled.p`
  font-size: 18px;
  line-height: 160%;
  color: #fff;
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;
const CardFooter = styled.footer`
  height: 45px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  background-color: ${colors.dark};
  position: relative;
  min-width: 130px;
  @media screen and (max-width: 600px) {
    padding: 0 10px;
    height: 32px;
  }
`;
const CardFooterText = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
  color: ${colors.textDark};
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;
