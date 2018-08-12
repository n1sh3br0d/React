import React, { Component } from 'react';
import Card from '../Card';


class Products extends Component{
  constructor(props){
    super(props);

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/products/')
      .then(response => response.json())
      .then(products => this.setState({ products }))
      .catch((error) =>{
        console.error(error);
      });

  }

  render(){
    const products = this.state.products
    return(      
      <div className="card-columns">
        {products.map(product => <Card key={product.id}product={product}/>)}
      </div>
    );
  }
}

export default Products;