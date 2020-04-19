import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';

// eslint-disable-next-line react/prop-types
export default function InputUnfrm({ name, ...rest }) {
  const inputRef = useRef(null);
  // the data that is typed on the input, it doesnt need to be re render all the time

  const { fieldName, registerField, defaultValue = '', error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      // prop used to track value
    });
  }, [fieldName, registerField]);

  return (
    <>
      <input
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && (
        // if error, display:
        <span style={{ color: '#f00' }}>{error}</span>
      )}
    </>
  );
}
