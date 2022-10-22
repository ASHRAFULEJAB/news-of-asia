import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h3>Here is the Terms And Condition</h3>
            <p>Go Back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndCondition;