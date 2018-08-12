import React, { Component } from 'react';

import './main.css';

class Card extends Component{
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
        {products.map(product => {
          return(
            <div className="card" key={product._id}>
                <h3 className='card-head'>{product.name}</h3>
                <img className="card-img-top" alt="" src={`http://localhost:3001/${product.image}`}/>
                <div className="card-body">
                  <h5 className="card-title">{product.price}</h5>
                  <p className="card-text">{product.description}</p>
                </div>
            </div>
          )
        })}
      </div>
    );
  }
}

export default Card;