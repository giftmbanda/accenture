import React from 'react';
import MyImage from './assets/confidence.jpeg'

const Nav = () => {
    return (
        <header>
            <nav style={{ zIndex: 1, minHeight: '58.59px', backgroundColor: "#70259B" }} className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link fw-bold" style={{ color: "white" }} href="#">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fw-bold" style={{ color: "white" }} href="#">Industries</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fw-bold" style={{ color: "white" }} href="#">Cases</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fw-bold" style={{ color: "white" }} href="#">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div class="d-flex align-items-center">
                        <button type="button" class="btn btn-rounded" style={{ backgroundColor: "white", color: "#70259B" }}>
                            Let's talk
                        </button>
                    </div>
                </div>
            </nav>

            <div className="bg-image vh-100" img src={MyImage} style={{ marginTop: '-58.59px' }}><img src={require('./assets/confidence.jpeg')} /></div>

            <div className="col-md-4" style={{ position: 'absolute', bottom: 0, left: 0, padding: '20px', color: 'white', fontSize: '100px' }}>
                <h1>Live with confidence</h1>
                <h6>José Mourinho brings confidence to pan-African Sanlam campaign.</h6>

                <div class="d-flex align-items-center">
                    <br />
                    <button type="button" class="btn btn-rounded" style={{ backgroundColor: "#70259B", color: "white" }}>
                        View project
                    </button>
                </div>
            </div>

        </header>
    );
}

export default Nav;
