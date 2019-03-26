import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';

class ProductTable extends Component {

    render() {

        const pesquisaTexto = this.props.pesquisaTexto;
        const emEstoque = this.props.emEstoque;

        const productsQuery = this.loadProducts();
        const products = productsQuery.filter(p => this.filterProducts(p, pesquisaTexto, emEstoque))

        const categories = [...new Set(products.map(p => p.category))];
        return (
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category, index) =>
                        <ProductCategoryRow key={index} category={category} products={products} />
                    )}
                </tbody>
            </table>
        );
    }

    filterProducts(product, pesquisaTexto, emEstoque) {
        if (!product.name.toLowerCase().includes(pesquisaTexto.toLowerCase())) {
            return;
        }
        if (emEstoque && !product.stocked) {
            return;
        }
        return true;
    }

    loadProducts() {
        return [
            { id: 1, category: "Eletônicos", price: 1800.00, stocked: true, name: "Notebook Samsung" },
            { id: 2, category: "Eletônicos", price: 350.00, stocked: false, name: "Tablet Philco" },
            { id: 3, category: "Móveis e decoração", price: 750.00, stocked: true, name: "Cortina" },
            { id: 4, category: "Móveis e decoração", price: 1250.00, stocked: false, name: "Sofá" },
        ];
    }

}

export default ProductTable;
