import styled from 'styled-components';
import Cell from '~/components/Cell';

export const DeliveryItem = styled(Cell)``;

export const Status = styled.div`
    display: flex;
    align-items: center;
    height: 25px;
    margin-top: 15px;
    margin-left: 25px;
    justify-content: center;
    border-radius: 12px;

    font-weight: bold;
    ${props =>
      props.status === 'Cancelada'
        ? {
            width: '110px',
            backgroundColor: '#FAB0B0',
          }
        : null}
    ${props =>
      props.status === 'Pendente'
        ? {
            width: '102px',
            backgroundColor: '#F0F0DF',
          }
        : null}
    ${props =>
      props.status === 'Retirada'
        ? {
            width: '97px',
            backgroundColor: '#BAD2FF',
          }
        : null}
    ${props =>
      props.status === 'Entregue'
        ? {
            width: '99px',
            backgroundColor: '#DFF0DF',
          }
        : null}

`;

export const StatusBall = styled.div`
  display: flex;
  align-items: center;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  ${props =>
    props.status === 'Cancelada'
      ? {
          backgroundColor: '#DE3B3B',
        }
      : null}
    ${props =>
      props.status === 'Pendente'
        ? {
            backgroundColor: '#C1BC35',
          }
        : null}
    ${props =>
      props.status === 'Retirada'
        ? {
            backgroundColor: '#4D85EE',
          }
        : null}
    ${props =>
      props.status === 'Entregue'
        ? {
            backgroundColor: '#2CA42B',
          }
        : null}
`;

export const StatusSpan = styled.span`
  font-size: 14px;
  font-family: 'Roboto', Verdana, Geneva, Tahoma, sans-serif;
  padding-left: 5px;
  font-weight: 600;
  text-transform: uppercase;
  ${props =>
    props.status === 'Cancelada'
      ? {
          color: '#DE3B3B',
        }
      : null}
    ${props =>
      props.status === 'Pendente'
        ? {
            color: '#C1BC35',
          }
        : null}
    ${props =>
      props.status === 'Retirada'
        ? {
            color: '#4D85EE',
          }
        : null}
    ${props =>
      props.status === 'Entregue'
        ? {
            color: '#2CA42B',
          }
        : null}

`;
