import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography as MuiTypography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4),
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
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo molestias distinctio hic alias mollitia earum quam iusto, fuga sunt velit illum accusantium dignissimos unde error ex nisi natus minima ad deserunt quis eos. Hic autem atque, neque, provident quae nostrum nemo inventore corporis vitae, tempora illo facilis illum quis eos itaque beatae. Sequi ea deserunt non impedit consectetur ex, quas dolor! Non facere accusantium adipisci quos nam fugiat suscipit pariatur quaerat, culpa reiciendis deleniti ipsam repellendus similique est cupiditate hic modi consectetur, quo consequuntur laudantium? Cum ducimus officia corrupti sit debitis tempora beatae, ratione totam quis alias assumenda exercitationem quod.',
    body2:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo molestias distinctio hic alias mollitia earum quam iusto, fuga sunt velit illum accusantium dignissimos unde error ex nisi natus minima ad deserunt quis eos. Hic autem atque, neque, provident quae nostrum nemo inventore corporis vitae, tempora illo facilis illum quis eos itaque beatae. Sequi ea deserunt non impedit consectetur ex, quas dolor! Non facere accusantium adipisci quos nam fugiat suscipit pariatur quaerat, culpa reiciendis deleniti ipsam repellendus similique est cupiditate hic modi consectetur, quo consequuntur laudantium? Cum ducimus officia corrupti sit debitis tempora beatae, ratione totam quis alias assumenda exercitationem quod.',
    caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, doloremque!',
    overline: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, doloremque!',
    button: 'Lorem ipsum dolor'
};

const TypographyView = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={1}>
            {Object.keys(variants).map((key, i) => (
                <Fragment key={i}>
                    <Grid item sm={2} xs={12}>
                        <MuiTypography variant="caption">{key}</MuiTypography>
                    </Grid>
                    <Grid item sm={10} xs={12}>
                        <MuiTypography variant={key}>{variants[key]}</MuiTypography>
                    </Grid>
                </Fragment>
            ))}
        </Grid>
    );
};

export default TypographyView;
