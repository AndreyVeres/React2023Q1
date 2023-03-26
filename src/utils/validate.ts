import { IFormValues } from 'types/types';

const emptyMessage = 'this field cannot be empty';
const capitalLatterMessage = 'this field should be started with capital lеtter';
const lengthMessage = 'this field should be contain 3 or more letter';

export interface IErrors {
  [key: string]: string;
}

export const validate = (values: IFormValues): IErrors => {
  const errors: IErrors = {};
  const { name, surName, agree, dob, male, female, file } = values;

  if (!name) {
    errors.nameMessage = emptyMessage;
  } else if (name.toString().length < 3) {
    errors.nameMessage = lengthMessage;
  } else if (name.toString()[0].toLocaleUpperCase() !== name.toString()[0]) {
    errors.nameMessage = capitalLatterMessage;
  }

  if (!surName) {
    errors.surNameMessage = emptyMessage;
  } else if (surName.toString().length < 3) {
    errors.surNameMessage = lengthMessage;
  } else if (surName.toString()[0].toLocaleUpperCase() !== surName.toString()[0]) {
    errors.surNameMessage = capitalLatterMessage;
  }

  if (!agree) {
    errors.agreeMessage = 'you must agree to everything';
  }

  if (!dob) {
    errors.dobMessage = 'select your date of birth';
  } else if (Date.parse(String(dob)) > Date.now()) {
    errors.dobMessage = 'enter correct date';
  }

  if (!male && !female) {
    errors.genderMessage = 'select your gender';
  }

  if (!file) {
    errors.fileMessage = 'upload file';
  }

  return errors;
};
