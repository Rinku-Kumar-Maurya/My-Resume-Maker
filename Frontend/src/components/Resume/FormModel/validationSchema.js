import * as Yup from 'yup';
import moment from 'moment';
import resumeFormModel from './resumeFormModel'

const {
    formField: {
        firstname,
        email,
        phone,
        github,
        linkedin
    }
} = resumeFormModel;

const validationSchema = [
    Yup.object().shape({
        [firstname.name]: Yup.string().required(`${firstname.requiredErrorMsg}`),
        [email.name]: Yup.string().required(`${email.requiredErrorMsg}`),
        [phone.name]: Yup.string().required(`${phone.requiredErrorMsg}`),
        [linkedin.name]: Yup.string().required(`${linkedin.requiredErrorMsg}`),
        [github.name]: Yup.string().required(`${github.requiredErrorMsg}`)
    }),
];

export default validationSchema;