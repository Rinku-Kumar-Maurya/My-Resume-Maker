import React, { Component } from 'react';
/*
import { Card, CardHeader, CardContent } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui//icons/NavigateBefore';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Row, Col } from 'react-bootstrap';
*/
import {Grid, Typography} from '@material-ui/core';
import {InputField} from '../../FormFields';

export default function Profile(props) {
    const {
        formField: {
            firstname,
            lastname,
            email,
            phone,
            github,
            linkedin
        }
    } = props;
    
    return (
        <React.Fragment>
            <Typography variant="h6" align="center" gutterBottom>
                Profile Page
            </Typography>
            
            <Grid container spacing={4}>
                <Grid item xs={12}></Grid>
                <Grid item xs={12} sm={6}>
                    <InputField name={firstname.name} label={firstname.label} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField name={lastname.name} label={lastname.label} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField name={email.name} label={email.label} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField name={phone.name} label={phone.label} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField name={github.name} label={github.label} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField name={linkedin.name} label={linkedin.label} fullWidth />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

/*
const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 1,
    },
    padding: {
        padding: theme.spacing.unit,
    },
});

class Profile extends Component {
    continue = e => {
        e.preventDefault ();
        this.props.nextStep();
    };
}

export default Profile
*/