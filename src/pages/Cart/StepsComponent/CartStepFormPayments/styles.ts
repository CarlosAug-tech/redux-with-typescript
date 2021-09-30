import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 500px;
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 20px;
`;

export const InformationContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const OrderInformations = styled.div`
  min-width: 450px;
  width: 50%;
  color: #fff;

  h3 {
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const TableOrder = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead th,
  tbody td {
    color: #fff;
    text-align: center;
  }

  tbody td {
    padding-top: 10px;
    padding-bottom: 10px;

    > div {
      > p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }

  tr {
    & + tr {
      border-top: 1px solid #fff;
    }
  }

  img {
    max-width: 80px;
    width: 100%;
    height: 80px;
  }
`;

export const UserInformations = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 450px;
  width: 50%;
  color: #fff;

  h3 {
    text-align: center;
    margin-bottom: 10px;
  }

  > div {
    display: flex;
    flex-direction: column;
    width: calc(50%);
  }

  > div:nth-child(2) {
    align-items: end;
  }
`;

export const InformationItem = styled.div`
  & + div {
    margin-top: 5px;
  }

  > span {
    margin-left: 3px;
  }
`;

export const PaymentContainer = styled.div`
  max-width: 500px;
  width: 100%;
  margin: auto;

  > form {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    border-radius: 4px;
    background: #ffff;

    h3 {
      text-align: center;
      margin-bottom: 20px;
    }

    > button {
      justify-content: center;
    }
  }
`;
