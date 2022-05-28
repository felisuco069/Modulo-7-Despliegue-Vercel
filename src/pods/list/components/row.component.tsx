import React from 'react';
import { TableRow, TableCell } from '@mui/material';
import { Member } from '../list.vm';
import * as classes from './row.styles';

interface Props {
  member: Member;
}

export const RowComponent: React.FunctionComponent<Props> = (props) => {
  const { member } = props;

  return (
    <TableRow>
      <TableCell>{member.id}</TableCell>a<TableCell>{member.name}</TableCell>
      <TableCell>
        <img className={classes.image} src={member.imageUrl} />
      </TableCell>
    </TableRow>
  );
};
