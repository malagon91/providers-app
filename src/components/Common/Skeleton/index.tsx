import React from 'react';
import { Skeleton, Table } from '@radix-ui/themes';

interface Props {
  NumberOfColumns?: number;
  NumberOfRows?: number;
}

const SkeletonComponent: React.FC<Props> = ({
  NumberOfColumns = 3,
  NumberOfRows = 3,
}) => {
  return (
    <>
      {Array(NumberOfRows)
        .fill(null)
        .map((_, index) => (
          <Table.Row key={index}>
            {Array(NumberOfColumns)
              .fill(null)
              .map((_, index) => (
                <Table.Cell key={index}>
                  <Skeleton>Loading</Skeleton>
                </Table.Cell>
              ))}
          </Table.Row>
        ))}
    </>
  );
};

export default SkeletonComponent;
