import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField } from '../../FormFields';

export default function Experience(props) {
    const {
        formField : {
            institute1,
            position1,
            duration1,
            experienceDescription1,

            institute2,
            position2,
            duration2,
            experienceDescription2
        }
    } = props;

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Experience Page
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <InputField name={institute1.name} label={institute1.label} fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputField name={position1.name} label={position1.label} fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputField name={duration1.name} label={duration1.label} fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputField name={experienceDescription1.name} label={experienceDescription1.label} fullWidth />
                </Grid>

                <Grid item xs={12} md={6}>
                    <InputField name={institute2.name} label={institute2.label} fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputField name={position2.name} label={position2.label} fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputField name={duration2.name} label={duration2.label} fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputField name={experienceDescription2.name} label={experienceDescription2.label} fullWidth />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}