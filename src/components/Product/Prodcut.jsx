import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

const propTypes = {
  product: PropTypes.object.isRequired,
};

function Product({ product }) {
  const link = `/data/${product.id}`;
  return (
    <div className="product"><Link to={link} style={{ fontSize: '2em' }}>{product.attributes.title}</Link>:<strong style={{ fontSize: '2em' }}>${product.attributes.price}</strong></div>
  );
}

Product.propTypes = propTypes;

export default Product;
