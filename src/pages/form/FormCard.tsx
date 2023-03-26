import React from 'react';

export interface IUserInfo {
  name: string;
  surName: string;
  dob: string;
  country: string;
  male?: string;
  file: string;
  female?: string;
}

export default function FormCard({ name, surName, dob, country, male, file, female }: IUserInfo) {
  return (
    <div>
      <h2>{`${name} ${surName}`}</h2>
      <p>{dob}</p>
      <p>{country}</p>
      <p>{male || female || ''}</p>
      <p>{file}</p>
    </div>
  );
}
