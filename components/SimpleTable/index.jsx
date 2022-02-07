import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/styles";
import PerfectScrollbar from "react-perfect-scrollbar";
import CircularProgress from "@mui/material/CircularProgress";
import {
  Card,
  CardActions,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination
} from "@mui/material";
import MappingService from "../../services/MappingService";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    width: "100%"
  },
  content: {
    padding: 0,
    overflow: "auto",
    width: "100%"
  },
  inner: {
    // minWidth: 1050
  },
  nameContainer: {
    display: "flex",
    alignItems: "baseline"
  },
  status: {
    marginRight: 15
  },
  actions: {
    justifyContent: "flex-end"
  },
  card_content: {
    marginTop: 15
  }
}));

const SimpleTable = ({
                       page,
                       setPage,
                       rowsPerPage,
                       setRowsPerPage,
                       count,
                       results,
                       isLoading,
                       attributes,
                     }) => {
  const classes = useStyles();

  if (isLoading) {
    return <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><CircularProgress color="secondary" /></div>;
  }

  const handlePageChange = (event, page) => {
    setPage(page);
  }

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
  }

  return (
    <Card
      padding={"0"}
      className={clsx(classes.root, classes.card_content)}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead className={classes.head}>
                <TableRow>
                  {attributes.map((item) => (
                    <TableCell key={item.value + Math.random()}
                               className={`${classes.hoverable} ${item.className ?? ''}`}
                    >
                      <span>{item.text}</span>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {results.slice(0, rowsPerPage).map(obj => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={obj["id"]}
                  >
                    {attributes.map(attribute => (
                      <TableCell>
                        {obj[attribute.value]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={count}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
        />
      </CardActions>
    </Card>
  );
}

export default SimpleTable;
