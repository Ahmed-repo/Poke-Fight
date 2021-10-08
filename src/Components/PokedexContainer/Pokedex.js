import React, { useState, useContext } from "react";
import "../Style/Pagination.css";
import "../../App.css";
import ReactPaginate from "react-paginate";
import SearchIcon from "@material-ui/icons/Search";
import PokemonTypes from "./PokemonTypes";
import useStyles from "./PokedexUseStyles";
import { PokedexContext } from "../../Context/PokedexContext";
import PokeCard from "./PokeCard";
import {
  Grid,
  CircularProgress,
  Toolbar,
  AppBar,
  Box,
  TextField,
  MenuItem,
} from "@material-ui/core";

const Pokedex = (props) => {
  const classes = useStyles();
  const { history } = props;
  const [pokemons, loading] = useContext(PokedexContext);

  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const pokemonsPerPage = 20;
  const pagesVisited = pageNumber * pokemonsPerPage;
  const [pokemonType, setPokemonType] = useState("");
  const [changePageCount, setChangePageCount] = useState(false);
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleChangeType = (e) => {
    setPokemonType(e.target.value);
    setChangePageCount(true);
  };

  const filteredPokemons =
    search.length === 0
      ? pokemons
      : pokemons.filter((pokemon) =>
          pokemon.name.english.toLowerCase().includes(search.toLowerCase())
        );
  const displayPokemons = (
    <div>
      {loading ? (
        <Grid container spacing={2} className={classes.pokedexContainer}>
          {filteredPokemons
            .filter((element) => {
              if (pokemonType === "") return element;
              if (
                (pokemonType && element.type[0] === pokemonType) ||
                element.type[1] === pokemonType
              )
                return element;
              if (pokemonType && element.type[1] === pokemonType)
                return element;
            })

            .slice(pagesVisited, pagesVisited + pokemonsPerPage)
            .map((poke) => (
              <PokeCard {...poke} />
            ))}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </div>
  );

  const pageCount = Math.ceil(
    changePageCount
      ? filteredPokemons.filter((element) => {
          if (pokemonType === "") return element;
          if (
            (pokemonType && element.type[0] === pokemonType) ||
            element.type[1] === pokemonType
          )
            return element;
          if (pokemonType && element.type[1] === pokemonType) return element;
        }).length / pokemonsPerPage
      : filteredPokemons.length / pokemonsPerPage
  );

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div id="pokedex-container">
      <div>
        <AppBar position="static" style={{ background: "#79a6d2" }}>
          <Toolbar>
            <div className={classes.searchContainer}>
              <SearchIcon className={classes.searchIcon} />
              <TextField
                className={classes.searchInput}
                onChange={handleSearchChange}
                label="Pokemon"
                variant="standard"
                color="secondary"
              />
            </div>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div id="searchtype">
                <TextField
                  id="outlined-select-currency"
                  select
                  color="secondary"
                  label="Pokemon type"
                  value={pokemonType}
                  onChange={handleChangeType}
                  className={classes.searchType}
                >
                  {PokemonTypes.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </Box>
          </Toolbar>
        </AppBar>
        {displayPokemons}
        <ReactPaginate
          className={"paginate"}
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
};

export default Pokedex;
