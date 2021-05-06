import React, { useState } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

import {
    Stepper,
    Step,
    StepLabel,
    Button,
    Typography,
    CircularProgress
} from '@material-ui/core';
import { Formik, Form } from 'formik';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Profile from './Forms/Profile';
import Education from './Forms/Education';
import Projects from './Forms/Projects';
import Experience from './Forms/Experience';
import Extras from './Forms/Extras';
import CreatedSuccess from './CreatedSuccess';

import validationSchema from './FormModel/validationSchema';
import resumeFormModel from './FormModel/resumeFormModel';
import formInitialValues from './FormModel/formInitialValues';

import useStyles from './styles';

const steps = ['Profile', 'Education', 'Projects', 'Experience', 'Extras'];
const { formId, formField } = resumeFormModel;


function _renderStepContent(step) {
    switch (step) {
        case 0:
            return <Profile formField={formField} />;
        case 1:
            return <Education formField={formField} />;
        case 2:
            return <Projects formField={formField} />;
        case 3:
            return <Experience formField={formField} />;
        case 4:
            return <Extras formField={formField} />;
        default:
            return <div>Not Found</div>;
    }
}

export default function Resume() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const currValidationSchema = validationSchema[activeStep];
    const isLastStep = activeStep === steps.length - 1;

    function _createAndDownloadPDF(values) {
        axios
            .post('/create-pdf', values)
            .then(() => {
                axios
                    .get('fetch-pdf', { responseType: 'blob' })
                    .then(res => {
                        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
                        saveAs(pdfBlob, `${values.firstname}'s Resume.pdf`);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            })
            .catch(err => {
                console.log(err);
            });
    };


    function _sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function _submitForm(values, actions) {
        await _sleep(1000);

        _createAndDownloadPDF(values);
        actions.setSubmitting(false);
        setActiveStep(activeStep + 1);
    }

    function _handleSubmit(values, actions) {
        if (isLastStep) {
            _submitForm(values, actions);
        }
        else {
            setActiveStep(activeStep + 1);
            actions.setTouched({});
            actions.setSubmitting(false);
        }
    }

    function _handleBack() {
        setActiveStep(activeStep - 1);
    }

    return (
        <React.Fragment>
            <Typography component="h1" variant="h4" align="center">
                My Resume Maker
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <React.Fragment>
                {activeStep === steps.length ? (
                    <CreatedSuccess />
                ) : (
                    <Formik
                        initialValues={formInitialValues}
                        validationSchema={currValidationSchema}
                        onSubmit={_handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form id={formId}>
                                {_renderStepContent(activeStep)}

                                <div className={classes.button}>
                                    {activeStep !== 0 && (
                                        <Button
                                            onClick={_handleBack}
                                            className={classes.button}
                                            startIcon={<NavigateBeforeIcon />}
                                        >
                                            Back
                                        </Button>
                                    )}
                                    <div className={classes.wrapper}>
                                        {isLastStep ? (
                                            <Button
                                                disabled={isSubmitting}
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                                onClick={_createAndDownloadPDF}
                                                className={classes.button}
                                            >
                                                Download
                                            </Button>
                                        ) : (
                                            <Button
                                                disabled={isSubmitting}
                                                type="submit"
                                                //variant="contained"
                                                //onClick={_createAndDownloadPDF}
                                                endIcon={<NavigateNextIcon />}
                                                className={classes.button}
                                            >
                                                Next
                                            </Button>
                                        )}

                                        {isSubmitting && (
                                            <CircularProgress
                                                size={24}
                                                className={classes.buttonProgress}
                                            />
                                        )}
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                )}
            </React.Fragment>
        </React.Fragment>
    );

}