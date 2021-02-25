import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { Text, MainTitle, Subtitle, ButtonPrimary, Loader, SectionTitle } from '../../components';
import { Fade } from '../../components/layouts';
import { sizes, colors } from '../../theme';
import { ChangeCategories } from './ChangeCategories';
import { Categories } from './Categories';
import { getDonateList } from '../../actions/donate';

export const PurchaseCurrencyView = () => {
  const [activeCategory, setActiveCategory] = useState('build_craft');
  const { list: categories, loading } = useSelector((state) => state.donate);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDonateList());
  }, []);

  return (
    <Container>
      <SectionTitle tid="SIDEBAR.LINKS.PUCHASE_CURRENCY" number="04" />
      <MainTitle tid="PURCHASE_CURRENCY.TITLE" />
      <StyledSubtitle tid="PURCHASE_CURRENCY.SUBTITLE" />
      <ButtonPrimary outlined tid="PURCHASE_CURRENCY.BUTTON" />
      <HelperText>
        <Text tid="PURCHASE_CURRENCY.ALSO_ON_CURRENCY" />
      </HelperText>
      <CategoriesContainer>
        <ChangeCategories
          categories={categories ? Object.keys(categories) : []}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          loading={loading}
        />
        <Categories categories={categories} activeCategory={activeCategory} loading={loading} />
      </CategoriesContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;
const StyledSubtitle = styled(Subtitle)`
  margin: 12px 0 25px;
`;
const HelperText = styled.span`
  margin: 55px 0 0;
  font-weight: bold;
  font-size: 24px;
  line-height: 160%;
  color: ${colors.primary};
  @media screen and (max-width: 750px) {
    margin: 25px 0 0;
  }
`;
const CategoriesContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 13px;
`;
