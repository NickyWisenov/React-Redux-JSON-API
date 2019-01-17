import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import parse from 'html-react-parser';

const propTypes = {
  products: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
};

function ProductDetail({ products, match }) {
  const product = products.find(x => x.id === match.params.id);
  return (
    <div>
      <h1>{product.attributes.title}</h1>
      <h3>{product.id}</h3>
      <strong>{product.attributes.price}</strong>
      <div className="description">
        {parse(product.attributes.html_description)}
      </div>
    </div>
  );
}

ProductDetail.propTypes = propTypes;

function mapStateToProps(state) {
  if (state.data.data) {
    const products = state.data.data;
    return { products };
  }
  return { products: [] };
}

export default connect(mapStateToProps)(ProductDetail);
