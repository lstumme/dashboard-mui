import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography as MuiTypography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    // padding: theme.spacing(4)
  }
}));

const variants = {
  h1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, doloremque!',
  h2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, doloremque!',
  h3: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, doloremque!',
  h4: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, doloremque!',
  h5: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, doloremque!',
  h6: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, doloremque!',
  subtitle1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, doloremque!',
  subtitle2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, doloremque!',
  body1:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officia illo cumque? Nihil unde aperiam temporibus atque adipisci exercitationem hic? Ea quae exercitationem officia nesciunt corporis maxime eum nobis iure!',
  body2:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officia illo cumque? Nihil unde aperiam temporibus atque adipisci exercitationem hic? Ea quae exercitationem officia nesciunt corporis maxime eum nobis iure!',
  caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, doloremque!',
  overline: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, doloremque!',
  button: 'Lorem ipsum dolor'
};

const TypographyView = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        {Object.keys(variants).map((key, i) => (
          <Fragment key={i}>
            <Grid
              item
              sm={3}
              xs={12}
            >
              <MuiTypography variant="caption">{key}</MuiTypography>
            </Grid>
            <Grid
              item
              sm={9}
              xs={12}
            >
              <MuiTypography variant={key}>{variants[key]}</MuiTypography>
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </div>
  );
};

export default TypographyView;
