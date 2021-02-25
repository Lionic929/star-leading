const getPercentOfView = (id) => {
  const element = document.getElementById(id);
  const viewTop = window.pageYOffset;
  const viewBottom = viewTop + window.innerHeight;
  const rect = element.getBoundingClientRect();
  const elementTop = rect.top + viewTop;
  const elementBottom = elementTop + rect.height;

  if (elementTop >= viewBottom || elementBottom <= viewTop) {
    // heigher or lower than viewport
    return 0;
  } else if (elementTop <= viewTop && elementBottom >= viewBottom) {
    // element is completely in viewport and bigger than viewport
    return 100;
  } else if (elementBottom <= viewBottom) {
    if (elementTop < viewTop) {
      // intersects viewport top
      return Math.round(((elementBottom - viewTop) / window.innerHeight) * 100);
    } else {
      // completely inside viewport
      return Math.round(((elementBottom - elementTop) / window.innerHeight) * 100);
    }
  } else {
    // intersects viewport bottom
    //  elementBottom >= viewBottom && elementTop <= viewBottom
    return Math.round(((viewBottom - elementTop) / window.innerHeight) * 100);
  }
};

export const isHalfElementInViewport = (id) => {
  const elementPecentageInViewport = getPercentOfView(id);
  return elementPecentageInViewport > 50;
};
