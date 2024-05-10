import React, { Component } from 'react'

class Navigation extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand-md navbar-light my-5'>
                <div className='container-xxl'>
                    <a href='#' className='navbar-brand'>
                        <span className='fw-bold text-secondary'>
                            Bakery Shop
                        </span>
                    </a>
                    {/* toggle button for mobile navigation */}
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#main-nav' aria-controls='main-nav' aria-expanded='false' aria-label='Toggle Navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    {/* navbar links */}
                    <div className='collapse navbar-collapse justify-content-end align-center' id='main-nav'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <a href='#' className='nav-link'>Home</a>
                            </li>
                            <li className='nav-item'>
                                <a href='#' className='nav-link'>Product</a>
                            </li>
                            <li className='nav-item'>
                                <a href='#' className='nav-link'>Receipes</a>
                            </li>
                            <li className='nav-item'>
                                <a href='#' className='nav-link'>Blog</a>
                            </li>
                            <li className='nav-item'>
                                <a href='#' className='nav-link'>Order online</a>
                            </li>
                            <li className='nav-item'>
                                <a href='#' className='nav-link'>Contact us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navigation