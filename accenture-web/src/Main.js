import React from 'react';

const MainContent = () => {
    return (
        <main>
            <div className="container" style={{ minHeight: '58.59px', paddingTop: '50px', paddingBottom: '50px' }}>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">

                        <div class="card h-100">
                            <img src={require('./assets/olympian.jpeg')} class="card-img-top" alt="Hollywood Sign on The Hill" />
                            <div class="card-body">
                                <h5 class="card-title">The Olympian</h5>
                                <p class="card-text">The only athlete in the world to do her Olympic routine in 2020.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card h-100">
                            <img src={require('./assets/dragon.jpeg')} class="card-img-top" alt="Palm Springs Road" />
                            <div class="card-body">
                                <h5 class="card-title">The Savings Jar</h5>
                                <p class="card-text">Grow your savings treasure and grow your dragon.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card h-100">
                            <img src={require('./assets/skhokho.jpeg')} class="card-img-top" alt="Skyscrapers" />
                            <div class="card-body">
                                <h5 class="card-title">Skhokho seMali</h5>
                                <p class="card-text">Helping South Africans become #CashCleva with Skhokho and TymeBank.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}

export default MainContent;
