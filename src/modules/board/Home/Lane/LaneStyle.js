import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.spacing(50),
    minWidth: theme.spacing(50),
    margin: theme.spacing(0, 1)
  },
  laneHeader: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.getContrastText(theme.palette.secondary.main),
    padding: theme.spacing(1, 2),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
    marginBottom: theme.spacing(2)
  },
  laneTitle: {
    cursor: "pointer"
  }
}));

export default useStyles;
