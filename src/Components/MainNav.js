// import * as React from "react";
// import RestoreIcon from "@material-ui/icons";

const {
  Button,
  Box,
  BottomNavigation,
  BottomNavigationAction,
  RestoreIcon,
  FavoriteIcon,
  LocationOnIcon,
} = window["MaterialUI"];
// import Box from "@mui/material/Box";
// import BottomNavigation from "@mui/material/BottomNavigation";
// import BottomNavigationAction from "@mui/material/BottomNavigationAction";
// import RestoreIcon from "@mui/icons-material/Restore";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import LocationOnIcon from "@mui/icons-material/LocationOn";

const element = React.createElement 
const SimpleBottomNavigation=()=> {
  const [value, setValue] = React.useState(0);
  
  const onChange =(e, newValue)=>{
      setValue(newValue)
  }
  return element(
    Box,
    { sx: { width: 500 }},
    element(BottomNavigation, { value: value, onChange: onChange }, [
      element(
        BottomNavigationAction,
        { label: "Recents" },
        element(RestoreIcon)
      ),
      element(
        BottomNavigationAction,
        { label: "Favorites" },
        element(FavoriteIcon)
      ),
      element(
        BottomNavigationAction,
        { label: "Nearby" },
        element(LocationOnIcon)
      ),
    ])
  );
    // <Box sx={{ width: 500 }}>
    //   <BottomNavigation
    //     showLabels
    //     value={value}
    //     onChange={(event, newValue) => {
    //       setValue(newValue);
    //     }}
    //   >
    //     <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
    //     <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
    //     <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    //   </BottomNavigation>
    // </Box>
}

export default SimpleBottomNavigation;