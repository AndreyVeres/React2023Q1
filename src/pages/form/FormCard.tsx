import React from 'react';

export interface IUserInfo {
  name: string;
  surName: string;
  dob: string;
  country: string;
  file: string;
  gender: string;
}

export default function FormCard({ name, surName, dob, country, file, gender }: IUserInfo) {
  return (
    <div>
      <h2 data-testid="name">{`${name} ${surName}`}</h2>
      <p data-testid="dob">{dob}</p>
      <p data-testid="country">{country}</p>
      <p data-testid="gender">{gender}</p>
      <img src={file} alt="image" />
    </div>
  );
}
