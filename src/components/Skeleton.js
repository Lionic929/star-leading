import React from 'react';
import styled from 'styled-components';

import { Skeleton as SkeletonMUI } from '@material-ui/lab';
import { colors } from '../theme';

export const Skeleton = ({ ...props }) => {
  return <StyledSkeleton {...props} />;
};

const StyledSkeleton = styled(SkeletonMUI)`
  background-color: #111111 !important;
`;
