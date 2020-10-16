import React from 'react';
import BaseFrom from '../../BaseForm';
import './styles.scss';

const Form = () => {
    return (
        <BaseFrom title="CADASTRAR PRODUTO">
            <div className="row">
                <div className="col-6">
                <input type="text" className="form-control"></input>

                </div>
            </div>
           </BaseFrom> 
        
    );
}

export default Form;