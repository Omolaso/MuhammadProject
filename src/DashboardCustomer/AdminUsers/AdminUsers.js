import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { toast } from "react-toastify";
import { useFetcher } from "../../utils/axiosFetcher";
import Loader from "../../utils/Loader";

const AdminUsers = () => {
  const {
    data: users,
    isLoading: usersLoading,
    error: usersError,
  } = useFetcher("/Account/get-users");

  if (usersError) {
    return toast.error("An error occured while loading users");
  }

  return (
    <section className="main-container">
      {usersLoading ? (
        <Loader />
      ) : users?.model?.length < 1 ? (
        <h1>No Users Available</h1>
      ) : (
        <div className="flex flex-col gap-4 w-full">
          <h1>Total Users - {users?.model?.length}</h1>

          <div className="flex-1 flex flex-col justify-between w-full">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="data table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="center">UserName</TableCell>
                    <TableCell align="center">Role</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users?.model?.map((user, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" align="left">
                        {user?.name}
                      </TableCell>
                      <TableCell align="center">{user?.username}</TableCell>
                      <TableCell align="center">
                        {user?.roleId === 1
                          ? "Admin"
                          : user?.roleId === 2
                          ? "Vendor"
                          : "Customer"}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      )}
    </section>
  );
};

export default AdminUsers;
