import React from 'react';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';
import { signOut } from '~/store/modules/auth/actions';
import headerLogo from '~/assets/headerlogo2.png';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Content>
        <nav className="active">
          <img src={headerLogo} alt="header-logo" />
          <Link className="first-item nav" to="/deliveries">
            Encomendas
          </Link>
          <Link className="nav" to="/deliveryman">
            Entregadores
          </Link>
          <Link className="nav" to="/recipients">
            Destinatario
          </Link>
          <Link className="nav" to="/problems">
            Problemas
          </Link>
        </nav>
        <div>
          <strong>Admin FastFeet</strong>

          <button type="button" onClick={handleSignOut}>
            sair do sistema
          </button>
        </div>
      </Content>
    </Container>
  );
}
