import React from 'react';
import { Mutation } from 'react-apollo';
import Button from '../Button/Button';
import { ADD_TO_CART } from '../../constants';

const AddToCartButton = ({ productId }) => (
    <Mutation mutation={ADD_TO_CART}>
        {addToCart => (
            <Button onClick={() => addToCart({ variables: { productId }})}>
                {`+ Add to cart`}
            </Button>
        )}
    </Mutation>
);

export default AddToCartButton;