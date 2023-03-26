import React from 'react';

export interface IUserInfo {
  name: string;
  surName: string;
  dob: string;
  country: string;
  male?: boolean;
  file: string;
  female?: boolean;
}

export default function FormCard({ name, surName, dob, country, male, file }: IUserInfo) {
  return (
    <div>
      <h2 data-testid="name">{`${name} ${surName}`}</h2>
      <p data-testid="dob">{dob}</p>
      <p data-testid="country">{country}</p>
      <p data-testid="gender">{male ? 'male' : 'female'}</p>
      <p data-testid="file">{file}</p>
    </div>
  );
}
