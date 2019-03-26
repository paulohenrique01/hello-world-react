import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.handlePesquisaTextoChange = this.handlePesquisaTextoChange.bind(this);
        this.handleEmEstoqueChange = this.handleEmEstoqueChange.bind(this);
      }
      
      handlePesquisaTextoChange(e) {
        this.props.onPesquisaTextoChange(e.target.value);
      }
      
      handleEmEstoqueChange(e) {
        this.props.onEmEstoqueChange(e.target.checked);
      }

    render() {
        const pesquisaTexto = this.props.pesquisaTexto;
        const emEstoque = this.props.emEstoque;
        return (
            <div>
                <input type="text" placeholder="Pesquisar..." 
                value={pesquisaTexto}
                onChange={this.handlePesquisaTextoChange}/>
        
                <input type="checkbox" name="onlyStock" 
                checked={emEstoque}
                onChange={this.handleEmEstoqueChange} />Apenas produtos em estoque
            </div>
        );
    }
}

export default SearchBar;