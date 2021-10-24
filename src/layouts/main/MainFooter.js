import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { Typography } from '@material-ui/core';

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
        textAlign="left"
      >
        <Typography>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={3}>
              <Box >
                 <h4> PRODUCTS</h4>   
                  </Box>
              <Box>
                <Link href="/" color="inherit">
                  Shoes
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Clothing
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Accessories
                </Link>
              </Box>
              <Box paddingTop="4%">
                <Link href="/" color="inherit">
                  New Arrivals
                </Link>
              </Box>
              <Box paddingTop="4%">
                <Link href="/" color="inherit">
                  Tops
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Pants
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Hoodies
                </Link>
                </Box>
                <Box>
                <Link href="/" color="inherit">
                  Bags
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box>
                  <h4>SPORTS</h4>
            </Box>
              <Box>
                <Link href="/" color="inherit">
                  Gyms Clothes
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Sports Bras
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Women's Tights
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Men Gym's Shorts
                </Link>
              </Box>
              <Box paddingTop="4%">
                <Link href="/" color="inherit">
                  Soccer Boots
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Indoor Soccer Shoes
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Soccer Balls
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
            <Box>
                  <h4>COLLECTIONS</h4>
            </Box>
              <Box>
                <Link href="/" color="inherit">
                  adidas Pharrel William
                </Link>
              </Box>
              <Box paddingTop="4%">
                <Link href="/" color="inherit">
                  SuperStar
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Stan Smith
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Gazelle
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
            <Box>
                  <h4>COMPANY INFO</h4>
            </Box>
              <Box>
                <Link href="/" color="inherit">
                  About us
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Carrers
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Press
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Clone Adidas Workshop &reg; {new Date().getFullYear()}
          </Box>
        </Container>
        </Typography>
      </Box>
    </footer>
  );
}