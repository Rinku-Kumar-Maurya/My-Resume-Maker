import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField } from '../../FormFields';

export default function Projects(props) {
    const {
        formField: {
            title1,
            link1,
            projectDescription1,

            title2,
            link2,
            projectDescription2,

            title3,
            link3,
            projectDescription3,
        }
    } = props;

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Projects Page
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <InputField name={title1.name} label={title1.label} fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputField name={link1.name} label={link1.label} fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputField name={projectDescription1.name} label={projectDescription1.label} fullWidth />
                </Grid>

                <Grid item xs={12} md={6}>
                    <InputField name={title2.name} label={title2.label} fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputField name={link2.name} label={link2.label} fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputField name={projectDescription2.name} label={projectDescription2.label} fullWidth />
                </Grid>

                <Grid item xs={12} md={6}>
                    <InputField name={title3.name} label={title3.label} fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputField name={link3.name} label={link3.label} fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputField name={projectDescription3.name} label={projectDescription3.label} fullWidth />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}