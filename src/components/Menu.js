import { Box } from "@mui/system";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Tab, Tabs } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Menu = () => {
  return (
    <Box>
      <Box>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Tabs>
          <Tab label="Appetizer" />
          <Tab label="Main Dish" />
          <Tab label="Dessert" />
          <Tab label="Vegetarian" />
          <Tab label="Vegan" />
        </Tabs>
      </Box>
      <Box>
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          Menu
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="200"
            image="https://www.themealdb.com/images/media/meals/n7qnkb1630444129.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              Chivito Uruguayo
              <ShoppingCartOutlinedIcon />
              <FavoriteBorderOutlinedIcon />
            </Typography>
            <StarBorderOutlinedIcon />
            <StarBorderOutlinedIcon />
            <StarBorderOutlinedIcon />
            <StarBorderOutlinedIcon />
            <StarBorderOutlinedIcon />
            <Typography>
              Beef Brisket, Bread, Lettuce, Tomato, Ham, Mozzarella, Bacon, Egg,
              Onion, Pepper
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Menu;
