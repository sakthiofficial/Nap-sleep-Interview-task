import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TablePagination } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { data } from '../Raw_data/data';
import Switch from '@mui/material/Switch';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';

export function AdsTable() {
    let thead = ["Status", "Campign name", "Automation", "Dayparting", "Budget", "Bidding strategy", "Spend", "Revenue", "Acos"];
    const [pg, setpg] = useState(0);
    const [rpg, setrpg] = useState(5);

    function handleChangePage(event, newpage) {
        setpg(newpage);
    }

    function handleChangeRowsPerPage(event) {
        setrpg(parseInt(event.target.value, 10));
        setpg(0);
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <caption>A basic table example with a caption</caption>
                <TableHead>
                    <TableRow>
                        <TableCell><Checkbox /></TableCell>

                        {thead.map(val => <TableCell style={{ fontWeight: 600 }}>{val}</TableCell>)}


                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.slice(pg * rpg, pg * rpg + rpg).map(val => <TableRow>
                        <TableCell><Checkbox /></TableCell>

                        <TableCell style={{ color: val.logo ? "#009688" : "#FF9800" }}>{val.logo ? <PlayCircleIcon /> : <PauseCircleOutlineIcon />}</TableCell>
                        <TableCell>{val.name}</TableCell>
                        <TableCell><Switch /></TableCell>
                        <TableCell><Switch /></TableCell>

                        <TableCell>{val.price1}</TableCell>
                        <TableCell style={{ color: "#0085FF", textDecoration: "underline" }}>{val.stratergy ? " Up" : "Down"}</TableCell>
                        <TableCell>{val.price2}</TableCell>
                        <TableCell>{val.price4}</TableCell>
                        <TableCell>{val.percentage}%</TableCell>



                    </TableRow>)}
                </TableBody>
                <TablePagination rowsPerPageOptions={[5, 10, 25]}

                    count={data.length}
                    rowsPerPage={rpg}
                    page={pg}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage} />
            </Table>
        </TableContainer>
    );
}
