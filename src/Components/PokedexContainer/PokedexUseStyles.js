import { alpha, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pokedexContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
  cardMedia: {
    margin: "auto",
  },
  cardContent: {
    textAlign: "center",
  },
  pokedexItem: {
    maxHeight: "260px",
    maxWidth: "250px",
  },
  searchContainer: {
    display: "flex",
    backgroundColor: alpha(theme.palette.common.white, 0.05),
    paddingLeft: "50px",
    paddingRight: "50px",
    marginTop: "5px",
    marginBottom: "5px",
    marginLeft: "20px",
  },
  searchIcon: {
    alignSelf: "flex-end",
    // marginBottom: "5px",
    padding: "5px",
  },
  searchType: {
    display: "flex",
    backgroundColor: alpha(theme.palette.common.white, 0.05),
    paddingLeft: "50px",
    paddingRight: "50px",
    marginTop: "5px",
    marginBottom: "5px",
    marginLeft: "20px",
  },
  searchInput: {
    width: "200px",
  },
}));

export default useStyles;
