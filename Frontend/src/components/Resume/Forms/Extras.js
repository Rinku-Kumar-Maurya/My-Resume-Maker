import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField } from '../../FormFields';

export default function Extras(props) {
    const {
        formField: {
            skill1,
            skill2,
            skill3,
            skill4,

            interest1,
            interest2,
            interest3,
            interest4
        }
    } = props;

    return (
        <React.Fragment>
            <Typography variant="h6" align="center" gutterBottom>
                Extras Page
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}></Grid>
                <Grid item xs={12} md={6}>
                    <InputField name={skill1.name} label={skill1.label} fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputField name={skill2.name} label={skill2.label} fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputField name={skill3.name} label={skill3.label} fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputField name={skill4.name} label={skill4.label} fullWidth />
                </Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12} md={6}>
                    <InputField name={interest1.name} label={interest1.label} fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputField name={interest2.name} label={interest2.label} fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputField name={interest3.name} label={interest3.label} fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputField name={interest4.name} label={interest4.label} fullWidth />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}