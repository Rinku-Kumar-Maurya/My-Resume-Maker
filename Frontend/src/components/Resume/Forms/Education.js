import React from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';
import { InputField, DatePickerField } from '../../FormFields';

export default function Education(props) {
    const {
        formField: {
            college,
            fromyear1,
            toyear1,
            qualification1,
            description1,

            school,
            fromyear2,
            toyear2,
            qualification2,
            description2
        }
    } = props;

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Education Page
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <InputField name={college.name} label={college.label} fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <DatePickerField
                        name={fromyear1.name}
                        label={fromyear1.label}
                        format="dd/MM/yyyy"
                        views={['date', 'month', 'year']}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <DatePickerField
                        name={toyear1.name}
                        label={toyear1.label}
                        format="dd/MM/yyyy"
                        views={['date', 'month', 'year']}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} >
                    <InputField name={qualification1.name} label={qualification1.label} fullWidth />
                </Grid>
                <Grid item xs={12} >
                    <InputField name={description1.name} label={description1.label} fullWidth />
                </Grid>

                <Grid item xs={12} md={6}>
                    <InputField name={school.name} label={school.label} fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <DatePickerField
                        name={fromyear2.name}
                        label={fromyear2.label}
                        format="dd/MM/yyy"
                        views={['date', 'month', 'year']}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <DatePickerField
                        name={toyear2.name}
                        label={toyear2.label}
                        format="dd/MM/yyy"
                        views={['date', 'month', 'year']}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} >
                    <InputField name={qualification2.name} label={qualification2.label} fullWidth />
                </Grid>
                <Grid item xs={12} >
                    <InputField name={description2.name} label={description2.label} fullWidth />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}