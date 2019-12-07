import React from 'react';

import './form-input.style.scss';

export const FormInput = ({label, handleChange, ...restPros}) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...restPros} />
    {label ? (
      <label className={`${restPros.value.length ? 'shrink' : ''} form-input-label`}>
        {label}
      </label>
    ) : null}
  </div>
);
