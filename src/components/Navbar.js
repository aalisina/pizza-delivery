import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Pizza Delivery
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item"> 
                    <a className="nav-link" aria-current="page" href="#">
                    Login
                    </a>
                </li>
                <li className="nav-item">

                    <a className="nav-link" href="#">
                        Cart
                    </a>
                </li>

            
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
