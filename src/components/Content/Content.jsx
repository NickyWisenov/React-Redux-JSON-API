import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap-button-loader';
import { searchdata } from '../../redux/actions/searchdata';
import Product from '../Product/Prodcut';


const propTypes = {
  dispatch: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

function Content({ loading = false, dispatch, products }) {
  function fetchData() {
    dispatch(searchdata());
  }
  const productsList = products.map(p => <Product key={p.id} product={p} />);
  return (
    <div>
      <Button loading={loading} onClick={() => { fetchData(); }}>Fetch Data from API</Button>
      {productsList}
    </div>
  );
}

Content.propTypes = propTypes;

function mapStateToProps(state) {
  if (state.data.data) {
    const products = state.data.data;

    return { products };
  }
  return { products: [] };
}

export default connect(mapStateToProps)(Content);
