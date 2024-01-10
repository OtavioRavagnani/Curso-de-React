import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';

interface IAppThemeProviderProps {
  children: React.ReactNode;
}

export const MenuLateral: React.FC<IAppThemeProviderProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <>
      <Drawer variant='permanent'>
        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">

          <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center" >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src="https://scontent.frao2-1.fna.fbcdn.net/v/t39.30808-1/297526917_3229049594079658_8998610346560140117_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=102&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeEkjBPC9BAc-7IaVnfIQH_yKG61cP40pIEobrVw_jSkgXb6Ov0Y6BdJAfr34G5Rwq6L3AJF2cPRZ3A40px6dOTB&_nc_ohc=HrBD7Bs2JUIAX_A9_mQ&_nc_ht=scontent.frao2-1.fna&oh=00_AfAdulSOnUOLSEg833E5Cff7_ur64KybUEJavIKYzGC1-w&oe=65A2759C" />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Pagina Inicial" />
              </ListItemButton>
            </List>
          </Box>

        </Box >
      </Drawer>

      <Box height="100vh" marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};