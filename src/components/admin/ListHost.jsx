import React, { useState } from "react";
import HostServices from "../../services/HostServices";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";
const ListHost = () => {
  //const [state variable,function that can chnage the state variable]
  const [HostArray, setHostArray] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const navigate = useNavigate();

  const deleteHost = (id) => {
    console.log("Delete Host handler fired.Id value received=", id);

    HostServices.deleteHost(id)
      .then((response) => {
        console.log(
          "Response received from delete api..." + JSON.stringify(response.data)
        );
        fetchAllHosts();
      })
      .catch((error) => {
        console.log("error received from delete api..", error);
      });
  };

  const fetchAllHosts = () => {
    console.log("fetchAllHosts fired..");
    HostServices.getAllHosts().then((response) => {
      console.log("Response received from API", response.data);

      setHostArray(response.data);
      console.log("State variable  assigned with response.data");
    });
  };

  //arrow function and dependency array

  useEffect(() => {
    console.log("UseEffect Hoook Fired.............");
    fetchAllHosts();
  }, []);

  return (
    <div className="">
      {console.log("Application Rendered")}
      {/* <h3 className="text-center">List of HostData</h3> */}
      <Typography variant="h4" className="text-center">
        List of Hosts
      </Typography>

      <Link to="/addhost" className="btn btn-primary float-end mb-2">
        Add Host
      </Link>

      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>HostEmail</TableCell>
                <TableCell>HostName</TableCell>
                <TableCell>HostContact</TableCell>
                <TableCell>Actions</TableCell>

                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {HostArray.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              ).map((host, key) => {
                return (
                  <TableRow hover tabIndex={-1} key={key}>
                    <TableCell>{host.hostEmail}</TableCell>
                    <TableCell>{host.hostName}</TableCell>
                    <TableCell>{host.hostContact}</TableCell>
                    <TableCell>
                      <Link
                        to={`/host/update/${host.hostId}`}
                        className="btn btn-success"
                      >
                        Update
                      </Link>
                    </TableCell>

                    <TableCell>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteHost(host.hostId)}
                      >
                        Delete
                      </button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={HostArray.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default ListHost;
