import React from "react";
import Pagination from "material-ui-flat-pagination";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    "& .MuiFlatPagination-root": {
      display: "flex",
      justifyContent: "center",
      boxShadow: `0px 1px 4px ${theme.palette.gray.light}`,
      padding: theme.spacing(1, 2),
      borderRadius: 4
    },
    "& .MuiFlatPageButton-rootEnd": {
      padding: theme.spacing(0, 6)
    },
    "& .MuiFlatPageButton-rootStandard": {
      padding: theme.spacing(0, 3)
    },
    "& .MuiButton-label": {
      fontWeight: 400
    }
  }
}));

const CustomPagination = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination limit={8} total={100} className={classes.root}></Pagination>
    </div>
  );
};

export default CustomPagination;