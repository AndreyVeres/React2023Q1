import { manaIcons } from 'assets/manaIcons';
import React from 'react';

export const getManaIcons = (str: string) => {
  return str
    .split(/[\{\}]+/)
    .filter(Boolean)
    .map((item, i) => {
      const icon = manaIcons.find(({ symbol }) => symbol === item)?.svg_uri;
      return icon ? <img key={i} src={icon} style={{ width: 15 }} /> : <span key={i}>{item}</span>;
    });
};

export const replaceText = (str: string) => {
  const text = str.split('\n');
  return (
    <>
      {text.map((p, i) => (
        <p key={i}>{getManaIcons(p)}</p>
      ))}
    </>
  );
};
