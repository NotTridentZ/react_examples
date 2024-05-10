import React, { Component } from 'react'
import BakeryListItem from './BakeryListItem'

// class BakeryList extends Component {
//     bakeryItems = this.props.bakeries.map((bakery, index) => {
//         return <BakeryListItem key={index} bakery={bakery} />
//     })

//     render() {
//         return (
//             <div className='row'>
//                 <ul className='list-group list-group-horizontal justify-content-center'>
//                     {this.bakeryItems}
//                 </ul>
//             </div>
//         )
//     }
// }

// export default BakeryList

const BakeryList = (props) => {
    const bakeryItems = props.bakeries.map((bakery, index) => {
        return <BakeryListItem key={bakery.id} bakery={bakery} />
    })

    return (
        <div className='row'>
            <ul className='list-group list-group-horizontal justify-content-center my-5'>
                {bakeryItems}
            </ul>
        </div>
    )
}

export default BakeryList