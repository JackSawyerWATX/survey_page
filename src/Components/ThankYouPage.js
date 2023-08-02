// ThankYouPage.js

import React from 'react';

function ThankYouPage() {
    return (
        <div className="container-fluid qform">
            <div className="col-md-5 m-auto">
                <div className="mt-3">
                    <div className="card text-left h-100">
                        <div className="card-body my-3">
                            <h3>Thank You for your Response!</h3>
                                <button type='submit' className='btn btn-success mx-3'>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThankYouPage;