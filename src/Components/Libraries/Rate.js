import React from 'react';

const Rate = ({rating }) => {
  const stars = (x) => {
    let starArray = [];
    for (let i = 1; i <= 10; i++) {
      if (i <= x) {
        starArray.push(
          <span
            className="rating"
            key={i}
            style={{ cursor: 'pointer' }}
          >
            ★
          </span>
        );
      } else {
        starArray.push(
          <span
            className="rating"
            key={i}
            style={{ cursor: 'pointer' }}
          >
            ☆
          </span>
        );
      }
    }
    return starArray;
  };

  return <div>{stars(rating)}</div>;
};

Rate.defaultProps = {
  rate: 5,
};

export default Rate;
