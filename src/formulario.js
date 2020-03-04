import React, {Component} from 'react';

export default class Formulario extends Component{

    constructor(props){
        super(props);

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: ''
           
        } 
        this.state = this.stateInicial;
    }

    escutadorDeInput = event => {
        event.preventDefault();

        const {name, value} = event.target;

        this.setState({
            [name]: value
        })
    }

    submitFormulario = () => {
        this.props.escutadorDeSubmit(this.state)
        this.setState(this.stateInicial);
    }

    render(){
        const {nome, livro, preco} = this.state;

        return(
            <form>
                <label htmlFor="nome">Nome</label>
                <input id="nome" 
                type="text" 
                name="nome" 
                value={nome}
                onChange={this.escutadorDeInput}
                ></input>
                
                <label htmlFor="livro">livro</label>
                <input id="livro" 
                type="text" 
                name="livro" 
                value={livro}
                onChange={this.escutadorDeInput}
                ></input>

                <label htmlFor="preco">preco</label>
                <input id="preco" 
                type="text" 
                name="preco" 
                value={preco}
                onChange={this.escutadorDeInput}
                ></input>

                <button type="button" onClick={this.submitFormulario}>Salvar</button>
            </form>
        )
    }
}