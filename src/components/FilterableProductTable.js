import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pesquisaTexto: '',
            emEstoque: false 
        };

        this.handlePesquisaTextoChange = this.handlePesquisaTextoChange.bind(this);
        this.handleEmEstoqueChange = this.handleEmEstoqueChange.bind(this);
    }
    handlePesquisaTextoChange(pesquisaTexto) {
        this.setState({
            pesquisaTexto: pesquisaTexto
        });
      }
      
      handleEmEstoqueChange(emEstoque) {
        this.setState({
            emEstoque: emEstoque
        })
      }
    render() {
        return (
            <div>
                <SearchBar
                    pesquisaTexto={this.state.pesquisaTexto}
                    emEstoque={this.state.emEstoque}
                    onPesquisaTextoChange={this.handlePesquisaTextoChange}
                    onEmEstoqueChange={this.handleEmEstoqueChange} />
                <ProductTable
                    pesquisaTexto={this.state.pesquisaTexto}
                    emEstoque={this.state.emEstoque}
                    />
            </div>
        );
    }

}

export default FilterableProductTable;