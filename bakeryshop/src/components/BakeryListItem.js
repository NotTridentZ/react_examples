import React, { Component } from 'react'

// class BakeryListItem extends Component {
//     bakery = this.props.bakery

//     render() {
//         return (
//             <li className='list-group-item'>
//                 <div className="d-flex w-100 justify-content-between">
//                     <h5 className="mb-1">{this.bakery.name}</h5>
//                 </div>
//                 <p className="mb-1">Stock: {this.bakery.qty}</p>
//                 <small>Price: {this.bakery.price}</small>
//             </li>
//         )
//     }
// }

// export default BakeryListItem

// const BakeryListItem = ({ bakery }) => {
//     return (
//         <li className='list-group-item'>
//             <div className="d-flex w-100 justify-content-between">
//                 <h5 className="mb-1">{bakery.name}</h5>
//             </div>
//             <p className="mb-1">Stock: {bakery.qty}</p>
//             <small>Price: {bakery.price}</small>
//         </li>
//     )
// }

// export default BakeryListItem

const BakeryListItem = ({ bakery }) => {
    const imagePath = `./${bakery.imageName}`;

    return (
        <li className='list-group-item'>
            <div className="d-flex w-100 justify-content-between card border-0" style={{ width: '18rem' }}>
                <img src={imagePath} className="card-img-top img-fluid rounded bakeryImage" alt="Bakery Image" />
                <div className="card-body">
                    <h4 className="card-title my-4">{bakery.name}</h4>
                    <p className="card-text">{bakery.description}</p>
                    <small>Price: ${bakery.price} Stock: {bakery.qty}</small>
                </div>
            </div>
        </li>
    )
}

export default BakeryListItem