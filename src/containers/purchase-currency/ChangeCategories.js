import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { sizes, colors } from '../../theme';
import { Triangle, Text, Skeleton } from '../../components';

export const ChangeCategories = ({ categories, activeCategory, setActiveCategory, loading }) => {
  return (
    <Container>
      <Triangle width="50px" />
      <Categories>
        {categories && categories.length && !loading ? (
          <CategoriesWithData
            categories={categories}
            setActiveCategory={setActiveCategory}
            activeCategory={activeCategory}
          />
        ) : (
          new Array(6).fill(null).map((_, index) => (
            <Category key={index}>
              <Skeleton variant="rect" width="80px" height="10px" />
            </Category>
          ))
        )}
      </Categories>
    </Container>
  );
};

ChangeCategories.propTypes = {
  categories: PropTypes.array.isRequired,
  activeCategory: PropTypes.string.isRequired,
  setActiveCategory: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const CategoriesWithData = ({ categories, setActiveCategory, activeCategory }) => {
  const [lineSettings, setLineSettings] = useState({
    width: 0,
    offset: 0,
  });

  const categoriesRefs = categories.map(() => useRef());

  const getActiveCategoryRef = () => {
    const activeStateCategory = categories.find((category) => category === activeCategory);
    const activeStateCategoryIndex = categories.indexOf(activeStateCategory);
    return categoriesRefs[activeStateCategoryIndex].current;
  };

  useEffect(() => {
    const activeRefLink = getActiveCategoryRef();
    if (!activeRefLink) {
      return;
    }
    setLineSettings({
      offset: activeRefLink.offsetLeft + 15,
      width: activeRefLink.clientWidth - 15 * 2, // minus padding
    });
  }, [activeCategory]);

  return (
    <>
      {categories.map((category, index) => (
        <Category
          key={category}
          isActive={activeCategory === category}
          onClick={() => setActiveCategory(category)}
          className={activeCategory === category ? '' : 'hoverable'}
          ref={categoriesRefs[index]}
        >
          <Text tid={`PURCHASE_CURRENCY.CATEGORIES.${category.toUpperCase()}`} />
        </Category>
      ))}
      <Line lineSettings={lineSettings} />
    </>
  );
};
CategoriesWithData.propTypes = {
  categories: PropTypes.array.isRequired,
  activeCategory: PropTypes.string.isRequired,
  setActiveCategory: PropTypes.func.isRequired,
};

const Container = styled.div`
  width: calc(100% - 50px);
  background-color: ${colors.dark};
  padding: 0 23px;
  height: 51px;
  position: relative;
  @media screen and (max-width: 500px) {
    width: calc(100% - 20px);
    padding: 0 12px;
  }
`;
const Categories = styled.div`
  max-width: 100%;
  overflow-x: auto;
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
`;
const Category = styled.button`
  font-size: 18px;
  line-height: 160%;
  color: ${({ isActive }) => (isActive ? '#fff' : '#484848')};
  font-weight: 600;
  transition: color ${sizes.transition.default}, opacity ${sizes.transition.default};
  white-space: nowrap;
  &:not(:last-of-type) {
    margin-right: 30px;
  }
  user-select: none;
`;
const Line = styled.div`
  position: absolute;
  left: ${({ lineSettings: { offset } }) => offset}px;
  width: ${({ lineSettings: { width } }) => width}px;
  height: 1px;
  background: ${colors.primary};
  box-shadow: 0px -4px 10px rgba(97, 0, 255, 0.31);
  opacity: 1;
  top: 50%;
  transform: translateY(calc(-50% + 15px));
  transition: ${sizes.transition.default};
  z-index: 5;
`;
