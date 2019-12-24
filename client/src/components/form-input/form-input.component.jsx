import React from 'react';

import {
  FormInputContainer,
  FormInputLabel,
  GroupContainer,
} from './form-input.style';

export const FormInput = ({label, handleChange, ...restPros}) => (
  <GroupContainer>
    <FormInputContainer
      className='form-input'
      onChange={handleChange}
      {...restPros}
    />
    {label ? (
      <FormInputLabel className={`${restPros.value.length ? 'shrink' : ''}`}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);
