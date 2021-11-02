import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, pressure, emotions, boosts, behaviors) {
  return { name, pressure, emotions, boosts, behaviors };
}

const rows = [
  createData("Jhonaton", 53, 57, 87, 80),
  createData("Jhonaton", 53, 57, 87, 80),
  createData("Jhonaton", 53, 57, 87, 80),
  createData("Jhonaton", 53, 57, 87, 80),
  createData("Jhonaton", 53, 57, 87, 80),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell >Full Name</StyledTableCell>
            <StyledTableCell align="center">Pressure</StyledTableCell>
            <StyledTableCell align="center">Emotions</StyledTableCell>
            <StyledTableCell align="center">Boosts</StyledTableCell>
            <StyledTableCell align="center">Behaviours</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.pressure}</StyledTableCell>
              <StyledTableCell align="center">{row.emotions}</StyledTableCell>
              <StyledTableCell align="center">{row.boosts}</StyledTableCell>
              <StyledTableCell align="center">{row.behaviors}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
