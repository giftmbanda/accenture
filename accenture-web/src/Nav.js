import React from 'react';

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
                        {/* <a class="navbar-brand mt-2 mt-lg-0" href="#">
              <i class="fas fa-gem text-secondary"></i>
            </a> */}
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

            <div className="bg-image vh-100" style={{ marginTop: '-58.59px', backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/fluid/city/018.jpg')" }}></div>

            {/* Additional element for big text on the bottom left */}
            <div className="col-md-4" style={{ position: 'absolute', bottom: 0, left: 0, padding: '20px', color: 'white', fontSize: '100px' }}>
                {/* <h1>Live with confidence</h1> */}
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
