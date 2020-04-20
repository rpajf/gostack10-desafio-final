import { useSelector } from 'react-redux';

import createRouter from '~/routes/routes';

export default function App() {
  const signed = useSelector(state => state.auth.signed);

  return createRouter(signed);
  // Routes is a function that returns a component
}

/*
  this component can acess redux informations
  can help managing the routes that the user is accessing
  by the state on the redux, this cant be done on index file,
  because of the Provider

  createRouter is a function that renders a component,
  the component itself can be returned

*/
