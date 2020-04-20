// import React, { useEffect, useRef } from 'react';
// import { useField } from '@unform/core';
// import PropTypes from 'prop-types';
// import { api, baseURL } from '~/services/api';

// import { Container, TInput } from './styles';

// export default function InputArea({ name, ...rest }) {
//   const inputRef = useRef(null);
//   const { fieldName, registerField, defaultValue } = useField(name);

//   useEffect(() => {
//     inputRef.current.value = defaultValue;
//   }, [defaultValue]);

//   useEffect(() => {
//     registerField({
//       name: fieldName,
//       ref: inputRef.current,
//       path: 'value',
//       clearValue(ref) {
//         ref.value = '';
//         ref.clear();
//       },
//       setValue(ref, value) {
//         ref.setNativeProps({ text: value });
//         inputRef.current.value = value;
//       },
//       getValue(ref) {
//         return ref.value;
//       },
//     });
//   }, [fieldName, registerField]);

//   return (
//     <Container>
//       <TInput
//         ref={inputRef}
//         keyboardAppearance="dark"
//         defaultValue={defaultValue}
//         onChangeText={value => {
//           if (inputRef.current) {
//             inputRef.current.value = value;
//           }
//         }}
//         {...rest}
//       />
//     </Container>
//   );
// }

// InputArea.propTypes = {
//   name: PropTypes.string,
// };

// InputArea.defaultProps = {
//   name: '',
// };
