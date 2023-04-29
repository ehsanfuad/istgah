import * as yup from "yup";

const mobileRules = /^(\+98|0)?9\d{9}$/;

export const loginSchema = yup.object().shape({
  mobile: yup
    .string()
    .required("لطفا این قسمت را خالی نگذارید")
    .matches(mobileRules, { message: "شماره موبایل نادرست است" }),

});
