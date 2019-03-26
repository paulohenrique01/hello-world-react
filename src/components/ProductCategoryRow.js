import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductCategoryRow extends Component {
    render() {
        //desestruturação para facilitar a utilização
        const { category } = this.props;
        const { products } = this.props;
        return (
            <>
                <tr>
                    <th>{category}</th>
                </tr>

                {products.filter(p => p.category === category).map((p) =>
                    <ProductRow key={p.id} product={p} />
                )}
            </>


        );
    }
}

export default ProductCategoryRow;