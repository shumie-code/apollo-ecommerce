import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import SubHeader from '../Header/SubHeader';
import ProductItem from './ProductItem';

const GET_PRODUCTS = gql`
    query getProducts {
        products {
            id
            title
            thumbnail
        }
    }
    `;

export const ProductItemsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: column;
    margin: 2% 5%;
    `;

const Alert = styled.span`
    width: 100%;
    text-align: center;
    `;

const Products = ({ history, loading, error, products }) => {

    return (
        <>
        {history && (
            <SubHeader
            title='Available products'
            goToCart={() => history.push('/cart')}
            />
        )}

       <Query query={GET_PRODUCTS}>
           {({ data }) => {
               return (
            
            <ProductItemsWrapper>
                {products &&
                products.map(product => (
                    <ProductItem key={product.id} data={product} />
                ))}
            </ProductItemsWrapper>
               );
                }}
                </Query>
        </>
    );
};

Products.defaultProps = {
    loading: false,
    error: '',
    products: [],
};

export default Products;