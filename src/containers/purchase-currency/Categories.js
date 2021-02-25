import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Triangle, Skeleton } from '../../components';
import { colors, sizes } from '../../theme';
import { staticPath } from '../../utils/staticPath';

export const Categories = ({ categories, activeCategory, loading }) => {
  return (
    <Outer>
      <Container
        length={categories ? Object.keys(categories).length : 1}
        activeCategoryIndex={categories ? Object.keys(categories).indexOf(activeCategory) : 0}
      >
        {categories && !loading ? (
          Object.keys(categories).map((key) => (
            <CategoryContainer key={key}>
              {categories[key].map(({ title, text, id, image }) => (
                <Card key={id}>
                  <CardHeader>
                    <Triangle width="50px" />
                    <CardHeaderText>{title}</CardHeaderText>
                  </CardHeader>
                  <CardBody>{image ? <CardImage src={staticPath(image)} /> : <MockupCardImage />}</CardBody>
                  <CardFooter>
                    <CardFooterText>{text}</CardFooterText>
                  </CardFooter>
                </Card>
              ))}
            </CategoryContainer>
          ))
        ) : (
          <CategoryContainer>
            {new Array(2).fill(null).map((_, index) => (
              <Card key={index + 1}>
                <CardHeader>
                  <Triangle width="50px" />
                  <Skeleton variant="text" />
                </CardHeader>
                <CardBody>
                  <Skeleton variant="rect" width="100%" height="100%" />
                </CardBody>
                <CardFooter>
                  <Skeleton variant="text" width="100%" />
                  <Skeleton variant="text" width="100%" />
                  <Skeleton variant="text" width="100%" />
                </CardFooter>
              </Card>
            ))}
          </CategoryContainer>
        )}
      </Container>
    </Outer>
  );
};

Categories.propTypes = {
  categories: PropTypes.object,
  activeCategory: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

const Outer = styled.div`
  max-width: 100%;
  overflow: hidden;
  margin-top: 17px;
`;
const Container = styled.div`
  display: grid;
  width: calc(${({ length }) => length * 100}% + ${({ length }) => 25 * (length - 1)}px);
  grid-template-columns: repeat(${({ length }) => length}, 1fr);
  grid-column-gap: 25px;
  transform: translateX(
    calc(
      ${({ activeCategoryIndex, length }) => `-${(activeCategoryIndex * 100) / length}%`} -
        ${({ activeCategoryIndex, length }) => (25 * activeCategoryIndex) / length}px
    )
  );
  transition: transform ${sizes.transition.default};
`;
const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px 25px;
  width: 100%;
  &:not(:last-of-type) {
    margin-right: 15px;
  }
  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const CardHeader = styled.header`
  width: calc(100% - 50px);
  position: relative;
  background-color: ${colors.dark};
  padding: 7px 20px;
  @media screen and (max-width: 500px) {
    width: calc(100% - 20px);
  }
`;
const CardHeaderText = styled.span`
  font-weight: bold;
  font-size: ${sizes.font.medium.lg};
  line-height: 160%;
  color: #fff;
`;
const CardBody = styled.div`
  height: 145px;
  width: 100%;
`;
const MockupCardImage = styled.div`
  background-color: #151515;
  width: 100%;
  height: 100%;
`;
const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;
const CardFooter = styled.div`
  padding: 10px 24px 20px;
  background-color: ${colors.dark};
  width: 100%;
`;
const CardFooterText = styled.p`
  font-size: 18px;

  line-height: 160%;
  color: #ffffff;
`;
