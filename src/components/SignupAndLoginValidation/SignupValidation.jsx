import * as yup from 'yup'

export const signupValidation = yup.object({
    email:yup.string().email('please enter valid email').required("please enter email"),
    password:yup.string().min(5).required("please enter password"),
    confirmPassword:yup.string().oneOf([yup.ref("password")],"password not matched").required("please enter confirmPassword")
})

export const loginValidation=yup.object({
    email:yup.string().email().required("please enter email"),
    password:yup.string().required("please enter password")
})