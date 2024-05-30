import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



function DataTable({tokens}) {
  return (
    <TableContainer 
    component={Paper} 
    sx={{ 
      backgroundColor: '#1B1212', 
      borderRadius: '10px', 
      border: '1px solid #937801', 
      overflow:{xs:"auto",lg:"hidden"} 
    }}
  >
      <Table sx={{ minWidth: '60vw', backgroundColor: '#1B1212',borderRadius:"10px"}} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: '#1B1212' }}>
            <TableCell align="right" sx={{ color: 'white' }}>#</TableCell>
            <TableCell align="right" sx={{ color: 'white' }}>Token Name</TableCell>
            <TableCell align="right" sx={{ color: 'white' }}>Price</TableCell>
            <TableCell align="right" sx={{ color: 'white' }}>Change</TableCell>
            <TableCell align="right" sx={{ color: 'white' }}>TVL</TableCell>
            <TableCell align="right" sx={{ color: 'white' }}>Volume</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tokens.map((data,index) => (
            <TableRow
              key={data.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: '#1B1212' }}
            >
               <TableCell align="right" sx={{ color: 'white' }}>
                {index+1}
              </TableCell>
              <TableCell align='right'  sx={{ color: 'white' }}>
                {data.name}
              </TableCell>
              <TableCell align="right" sx={{ color: 'white' }}>{data.price}</TableCell>
              <TableCell align="right" sx={{ color: 'white' }}>{data.change}</TableCell>
              <TableCell align="right" sx={{ color: 'white' }}>{data.tvl}</TableCell>
              <TableCell align="right" sx={{ color: 'white' }}>{data.volume}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;
