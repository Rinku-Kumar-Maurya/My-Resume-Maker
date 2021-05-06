import resumeFormModel from './resumeFormModel';

const {
    formField: {
        // Profile page
        firstname,
        lastname,
        email,
        phone,
        github,
        linkedin,

        
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
        experienceDescription2,

        //Extra page
        skill1,
        skill2,
        skill3,
        skill4,

        interest1,
        interest2,
        interest3,
        interest4
        
    }
} = resumeFormModel;

const formInitialValues = {
    [firstname.name]: '',
    [lastname.name]: '',
    [email.name]: '',
    [phone.name]: '',
    [github.name]: '',
    [linkedin.name]: '',

    
    [college.name]: '',
    [fromyear1.name]: '',
    [toyear1.name]: '',
    [qualification1.name]: '',
    [description1.name]: '',

    [school.name]: '',
    [fromyear2.name]: '',
    [toyear2.name]: '',
    [qualification2.name]: '',
    [description2.name]: '',

    [title1.name]: '',
    [link1.name]: '',
    [projectDescription1.name]: '',

    [title2.name]: '',
    [link2.name]: '',
    [projectDescription2.name]: '',

    [title3.name]: '',
    [link3.name]: '',
    [projectDescription3.name]: '',

    [institute1.name]: '',
    [position1.name]: '',
    [duration1.name]: '',
    [experienceDescription1.name]: '',

    [institute2.name]: '',
    [position2.name]: '',
    [duration2.name]: '',
    [experienceDescription2.name]: '',

    [skill1.name]: '',
    [skill2.name]: '',
    [skill3.name]: '',
    [skill4.name]: '',

    [interest1.name]: '',
    [interest2.name]: '',
    [interest3.name]: '',
    [interest4.name]: ''
    
}

export default formInitialValues;