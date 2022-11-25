import * as yup from "yup";
import moment from "moment";
import { parse, isDate } from "date-fns";

// interface for form
export interface RegisterFormTypes {
  email: string;
  first_name: string;
  last_name: string;
  gender: string;
  dob: string;
  contact_number: string;
  fathers_name: string;
  mothers_name: string;
  qualification: string;
  profession: string;
  password: string;
  confirm_password: string;
}

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

function parseDateString(value: any, originalValue: any) {
  const parsedDate = moment(originalValue).format("DD/MM/yyyy");
  return parsedDate;
}

// validation
export const RegistrationSchema = yup.object().shape({
  // Email
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),

  // First Name
  first_name: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter a valid name")
    .min(2, "Enter a valid first name")
    .max(40, "First name is too long")
    .required("First Name is required"),

  // Last Name
  last_name: yup
    .string()
    .min(3, "Enter a valid last name")
    .max(32, "Enter a valid last name")
    .required("Last Name is required"),

  // Father's Name
  fathers_name: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter a valid name")
    .min(3, "Enter a valid name")
    .max(32, "Enter a valid name")
    .required("Father's Name is required"),

  // Father's Name
  mothers_name: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter a valid name")
    .min(3, "Enter a valid name")
    .max(32, "Enter a valid name")
    .required("Mother's Name is required"),

  // Contact number validate
  contact_number: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "Phone number should be of 10 digits")
    .max(10, "Phone number can't be more than 10 digits"),

  // DOB validation
  dob: yup.string().required("DOB is required!").transform(parseDateString),

  // gender validation
  gender: yup.string().required("Gender is required"),

  // qualification validation
  qualification: yup
    .string()
    .min(3, "Enter valid qualification")
    .max(32, "Too long")
    .required("Qualification is required"),

  // qualification validation
  profession: yup
    .string()
    .min(3, "Enter valid profession")
    .max(32, "Too long")
    .required("Profession is required"),

  // Password
  password: yup
    .string()
    .min(8, "Password must contain atleast 8 characters")
    .max(32, "Max password length is 32")
    .required("Password is required"),

  // Confirm Password
  confirm_password: yup
    .string()
    .min(8, "Password must contain atleast 8 characters")
    .max(32, "Max password length is 32")
    .required("This field is required")
    .oneOf([yup.ref("password")], "Passwords do not match!"),
});
