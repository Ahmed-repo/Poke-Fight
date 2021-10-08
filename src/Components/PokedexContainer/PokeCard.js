import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { useParams, useHistory } from "react-router";
import useStyles from "./PokedexUseStyles";

const PokeCard = (poke) => {
  const { id } = useParams();
  let history = useHistory();
  const classes = useStyles();
  return (
    <>
      <Grid
        item
        xs={12}
        sm={6}
        lg={4}
        xl={3}
        key={poke.id}
        className={classes.pokedexItem}
      >
        <Card onClick={() => history.push(`/pokemon/${poke.id}`)}>
          <CardMedia
            className={classes.cardMedia}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`}
            style={{ width: "130px", height: "130px" }}
          />
          <CardContent className={classes.cardContent}>
            <Typography>{`${poke.id}. ${poke.name.english}`}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default PokeCard;
