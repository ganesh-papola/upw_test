import { routes } from "./routes";
import { STRINGS } from "./strings";

export const REGISTRATION_FIELDS = [
  {
    name: STRINGS.NAME,
    label: STRINGS.NAME_LABEL,
  },
  {
    name: STRINGS.EMAIL,
    label: STRINGS.EMAIL_ADDRESS,
  },
  {
    name: STRINGS.PASSWORD,
    label: STRINGS.PASSWORD_LABEL,
  },
  {
    name: STRINGS.CONFIRM_PASSWORD,
    label: STRINGS.CONFIRM_PASSWORD_LABEL,
  },
];

export const phoneRegex =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const numberRegex = /^[0-9]/;

export const nameRegex = /^[a-zA-Z\-'. ]+$/;
