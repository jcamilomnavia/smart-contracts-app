/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo, useCallback } from 'react';
import { Col, Container, Row, Table, Button } from 'reactstrap';
import { useTable } from 'react-table';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

import { dataTable } from '../dashboard/mock-data';

const History = () => {
  const dispatch = useDispatch();

  const gotoDetail = useCallback(
    (id) => () => {
      dispatch(push(`/app/history/${id}`));
    },
    [dispatch]
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Grid Neighords',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Offers',
        columns: [
          {
            Header: 'Sell',
            accessor: 'sell',
          },
          {
            Header: 'Buy',
            accessor: 'buy',
          },
          {
            Header: 'Amount',
            accessor: 'amount',
          },
          {
            Header: '',
            accessor: 'id',
            Cell: ({ value }) => (
              <Button className="btn-success" onClick={gotoDetail(value)}>
                See more
              </Button>
            ),
          },
        ],
      },
    ],
    [gotoDetail]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: [...dataTable, ...dataTable, ...dataTable, ...dataTable],
    });

  return (
    <section>
      <Container className="mt-5">
        <Row>
          <Col xs={12} className="mb-4">
            <h1 className="title">HISTORY</h1>
          </Col>
          <Col>
            <Table bordered hover striped {...getTableProps()}>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()}>
                        {column.render('Header')}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps()}>
                            {cell.render('Cell')}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default History;
