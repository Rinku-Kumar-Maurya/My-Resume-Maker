import * as Yup from 'yup';
import moment from 'moment';
import resumeFormModel from './resumeFormModel'

const {
    formField: {
        firstname,
        lastname,
        email,
        phone,
        github,
        linkedin,

        /*
        // Education page
        college,
        fromyear1,
        toyear1,
        qualification1,
        description1,

        school,
        fromyear2,
        toyear2,
        qualification2,
        description2,

        // Poject page
        title1,
        link1,
        projectDescription1,

        title2,
        link2,
        projectDescription2,

        title3,
        link3,
        projectDescription3,

        //Experience page
        institute1,
        position1,
        duration1,
        experienceDescription1,

        institute2,
        position2,
        duration2,
        experienceDescript,

        //Extra page
        skill1,
        skill2,
        skill3,
        skill4,

        interest1,
        interest2,
        interest3,
        interest4
        */
    }
} = resumeFormModel;

const validationSchema = [
    Yup.object().shape({
        [firstname.name]: Yup.string().required(`${firstname.requiredErrorMsg}`),
        [lastname.name]: Yup.string().required(`${lastname.requiredErrorMsg}`),
        [email.name]: Yup.string().required(`${email.requiredErrorMsg}`),
        [phone.name]: Yup.string().required(`${phone.requiredErrorMsg}`),
        [linkedin.name]: Yup.string().required(`${linkedin.requiredErrorMsg}`),
        [github.name]: Yup.string().required(`${github.requiredErrorMsg}`)
    }),

    /*
    Yup.object().shape({
        [college.name]: Yup.string(),
        [fromyear1.name]: Yup.string(),
        [toyear1.name]: Yup.string().required(`${toyear1.requiredErrorMsg}`),
        [qualification1.name]: Yup.string(),
        [description1.name]: Yup.string(),

        [school.name]: Yup.string(),
        [fromyear2.name]: Yup.string().nullable(),
        [toyear2.name]: Yup.string().nullable(),
        [qualification2.name]: Yup.string(),
        [description2.name]: Yup.string()
    })
    */

];

export default validationSchema;