import {
  Avatar,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { Box } from "@mui/system";

import { useAppThemeContext, useDrawerContext } from "../../contexts";

interface IAppThemeProviderProps {
  children: React.ReactNode;
}

interface IListItemLinkProps {
  to: string;
  icon: string;
  label: string;
  onClick: (() => void) | undefined;
}
const ListItemLink: React.FC<IListItemLinkProps> = ({
  to,
  icon,
  label,
  onClick,
}: IListItemLinkProps) => {
  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: false });

  const handleClick = () => {
    navigate(to);
    onClick?.();
  };

  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export const MenuLateral: React.FC<IAppThemeProviderProps> = ({
  children,
}: IAppThemeProviderProps) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const { isDrawerOpen, drawerOptions, toggleDrawerOpen } = useDrawerContext();
  const { toggleTheme } = useAppThemeContext();

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? "temporary" : "permanent"}
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src="https://scontent.frao2-1.fna.fbcdn.net/v/t39.30808-1/297526917_3229049594079658_8998610346560140117_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEkjBPC9BAc-7IaVnfIQH_yKG61cP40pIEobrVw_jSkgXb6Ov0Y6BdJAfr34G5Rwq6L3AJF2cPRZ3A40px6dOTB&_nc_ohc=KfOVHGKpOh8AX-eXI2K&_nc_ht=scontent.frao2-1.fna&oh=00_AfC18XeCG7UpG7ePMgk5hcc6TNAf3Iw-iaBaWQIJSBsgbQ&oe=65ED9B1C"
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              {drawerOptions.map((drawerOption) => (
                <ListItemLink
                  to={drawerOption.path}
                  key={drawerOption.path}
                  icon={drawerOption.icon}
                  label={drawerOption.label}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                />
              ))}
            </List>
          </Box>

          <Box>
            <List component="nav">
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  <Icon>dark_mode</Icon>
                </ListItemIcon>
                <ListItemText primary="Alternar tema" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
