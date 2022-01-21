import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import DataTable, { TableProps } from 'react-data-table-component';
import AppLoader from '../loader';

const sortIcon = <ArrowDownward />;
const selectProps = {
  indeterminate: (isIndeterminate: boolean) => isIndeterminate,
};

function AppDataTable<T>(props: TableProps<T>): JSX.Element {
  return (
    <DataTable
      responsive
      // fixedHeader
      highlightOnHover
      progressComponent={<AppLoader />}
      sortIcon={sortIcon}
      {...props}
    />
  );
}

export default AppDataTable;
