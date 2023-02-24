import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

const DataTable = ({columns,rows}) => {
    console.log(columns)
  console.log(rows)
  return(
    <div className='container' >
    <TableContainer>
        <Table sx={{minWidth:650,border:"1px solid rgba(216, 216, 216, 0.789)"}} > 
         <TableHead>
            <TableRow>
            {columns?.map((colName) => {
                return(
                    <TableCell>{colName}</TableCell>
                )
            })}
            </TableRow>            
         </TableHead>
      
         <TableBody>
          {rows?.map((row) => {
            return (
            <TableRow
              key={row[columns[0]]}
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                {columns.map((colName) => (
                    <TableCell>
                        {row[colName]}
                    </TableCell>
                ))}          
            </TableRow>
          )})}
        </TableBody>
        </Table>
    </TableContainer>
    </div>
  )
  
}

export default DataTable;