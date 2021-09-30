import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 500px;
  padding: 20px;
`;

export const TableOrder = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead th,
  tbody td {
    color: #fff;
    text-align: center;

    &:nth-child(5),
    &:nth-child(6) {
      text-align: right;
    }

    &:last-child {
      width: 100px;
    }
  }

  tbody td {
    padding-top: 10px;
    padding-bottom: 10px;

    &:last-child {
      > div {
        display: flex;
        align-items: center;
        justify-content: center;

        > button {
          border: 0;
          background: transparent;

          svg {
            color: #ff6f9c;
          }
        }
      }
    }
  }

  tr {
    & + tr {
      border-top: 1px solid #fff;
    }
  }

  img {
    max-width: 200px;
    width: 100%;
    height: 170px;
  }
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;

  > input {
    width: 80px;
    margin: 0 5px;
    border: 1px solid #fff;
    border-radius: 4px;

    &:disabled {
      cursor: not-allowed;
      text-align: right;
      background: #d9d9d9;
    }
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border: 0;
    border-radius: 50%;
    background: teal;

    &:hover {
      > svg {
        color: #d9d9d9;
      }
    }

    > svg {
      color: #fff;
      transition: all 0.4s ease;
    }
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: auto;
  color: #fff;

  > div {
    display: flex;
    align-items: baseline;

    > strong {
      font-size: 18px;
      margin-left: 5px;
    }

    span {
      color: #999;
      font-weight: bold;
      font-size: 14px;
      text-transform: uppercase;
    }
  }
`;
