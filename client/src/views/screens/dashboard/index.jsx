/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Table,
  Button,
} from 'reactstrap';
import { ResponsiveLine } from '@nivo/line';
import { ResponsivePie } from '@nivo/pie';
import { useTable } from 'react-table';
import { Link } from 'react-router-dom';

import { data, data2, dataTable } from './mock-data';

const Dashboard = () => {
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
        ],
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: dataTable,
    });

  return (
    <section>
      <Container className="mt-5">
        <Row>
          <Col xs={12} className="mb-4">
            <h1 className="title">DASHBOARD</h1>
          </Col>
          <Col className="mb-4" xs={12} md={6}>
            <Card>
              <CardHeader>
                <h3>Latest Contract Executed</h3>
              </CardHeader>
              <CardBody>
                <span className="d-inline-block">
                  <strong>Status:</strong>{' '}
                  <span className="text-success">Success</span>
                </span>
                <span className="d-inline-block float-end">
                  <strong>Date:</strong> Yesterday
                </span>
                <span className="d-block">
                  <strong>Operation:</strong> Sell
                </span>
                <span className="d-inline-block">
                  <strong>Amount:</strong> 200 Watts
                </span>

                <span className="d-inline-block float-end">
                  <Link href="/">See More</Link>
                </span>
              </CardBody>
            </Card>
          </Col>
          <Col className="mb-4" xs={12} md={6}>
            <Card>
              <CardHeader>
                <h3>Best Deal</h3>
              </CardHeader>
              <CardBody>
                <span className="d-block">
                  <strong>Price:</strong> 0.00034 ETH
                </span>
                <span className="d-inline-block">
                  <strong>Vendor:</strong> National Grid
                </span>
                <Button className="btn-success float-end py-1 px-5">Buy</Button>
                <span className="d-block">
                  <strong>Amount:</strong> 200 Watts
                </span>
              </CardBody>
            </Card>
          </Col>
          <Col className="mb-4" xs={12} md={6} style={{ height: 500 }}>
            <Card className="h-100 pb-5">
              <CardHeader>
                <h3>Energy consumed per month</h3>
              </CardHeader>
              <CardBody className="h-100">
                <ResponsiveLine
                  data={data}
                  margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                  xScale={{ type: 'point' }}
                  yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false,
                  }}
                  yFormat=" >-.2f"
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'transportation',
                    legendOffset: 36,
                    legendPosition: 'middle',
                  }}
                  axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'count',
                    legendOffset: -40,
                    legendPosition: 'middle',
                  }}
                  pointSize={10}
                  pointColor={{ theme: 'background' }}
                  pointBorderWidth={2}
                  pointBorderColor={{ from: 'serieColor' }}
                  pointLabelYOffset={-12}
                  useMesh
                  legends={[
                    {
                      anchor: 'bottom-right',
                      direction: 'column',
                      justify: false,
                      translateX: 100,
                      translateY: 0,
                      itemsSpacing: 0,
                      itemDirection: 'left-to-right',
                      itemWidth: 80,
                      itemHeight: 20,
                      itemOpacity: 0.75,
                      symbolSize: 12,
                      symbolShape: 'circle',
                      symbolBorderColor: 'rgba(0, 0, 0, .5)',
                      effects: [
                        {
                          on: 'hover',
                          style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1,
                          },
                        },
                      ],
                    },
                  ]}
                />
              </CardBody>
            </Card>
          </Col>
          <Col className="mb-4" xs={12} md={6} style={{ height: 500 }}>
            <Card className="h-100 pb-5">
              <CardHeader>
                <h3>Energy data</h3>
              </CardHeader>
              <CardBody>
                <ResponsivePie
                  data={data2}
                  margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                  innerRadius={0.5}
                  padAngle={0.7}
                  cornerRadius={3}
                  activeOuterRadiusOffset={8}
                  borderWidth={1}
                  borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                  arcLinkLabelsSkipAngle={10}
                  arcLinkLabelsTextColor="#333333"
                  arcLinkLabelsThickness={2}
                  arcLinkLabelsColor={{ from: 'color' }}
                  arcLabelsSkipAngle={10}
                  arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [['darker', 2]],
                  }}
                  defs={[
                    {
                      id: 'dots',
                      type: 'patternDots',
                      background: 'inherit',
                      color: 'rgba(255, 255, 255, 0.3)',
                      size: 4,
                      padding: 1,
                      stagger: true,
                    },
                    {
                      id: 'lines',
                      type: 'patternLines',
                      background: 'inherit',
                      color: 'rgba(255, 255, 255, 0.3)',
                      rotation: -45,
                      lineWidth: 6,
                      spacing: 10,
                    },
                  ]}
                  fill={[
                    {
                      match: {
                        id: 'ruby',
                      },
                      id: 'dots',
                    },
                    {
                      match: {
                        id: 'c',
                      },
                      id: 'dots',
                    },
                    {
                      match: {
                        id: 'go',
                      },
                      id: 'dots',
                    },
                    {
                      match: {
                        id: 'python',
                      },
                      id: 'dots',
                    },
                    {
                      match: {
                        id: 'scala',
                      },
                      id: 'lines',
                    },
                    {
                      match: {
                        id: 'lisp',
                      },
                      id: 'lines',
                    },
                    {
                      match: {
                        id: 'elixir',
                      },
                      id: 'lines',
                    },
                    {
                      match: {
                        id: 'javascript',
                      },
                      id: 'lines',
                    },
                  ]}
                  legends={[
                    {
                      anchor: 'bottom',
                      direction: 'row',
                      justify: false,
                      translateX: 0,
                      translateY: 56,
                      itemsSpacing: 0,
                      itemWidth: 100,
                      itemHeight: 18,
                      itemTextColor: '#999',
                      itemDirection: 'left-to-right',
                      itemOpacity: 1,
                      symbolSize: 18,
                      symbolShape: 'circle',
                      effects: [
                        {
                          on: 'hover',
                          style: {
                            itemTextColor: '#000',
                          },
                        },
                      ],
                    },
                  ]}
                />
              </CardBody>
            </Card>
          </Col>
          <Col className="mb-4" xs={12}>
            <Card className="h-100 pb-5">
              <CardHeader>
                <h3>History Buy/Sell</h3>
              </CardHeader>
              <CardBody className="h-100">
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
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Dashboard;
