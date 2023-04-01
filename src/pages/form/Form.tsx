import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormCard, { IUserInfo } from './FormCard';

import './form.scss';
import { dateNotFuture } from 'utils/dateValidate';

type FormValues = {
  name: string;
  surName: string;
  dob: string;
  agree: boolean;
  file: File;
  country: string;
  gender: string;
};

export default function Form() {
  const [cards, setCards] = useState<IUserInfo[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    const file = Object.values(data.file)[0];
    setCards((prev) => [...prev, { ...data, file: URL.createObjectURL(file) }]);

    reset();
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__item">
          <label htmlFor="name">Name:</label>
          <input
            {...register('name', {
              required: 'required field',
              pattern: {
                value: /^[A-Z][a-z]{2,}$/,
                message: 'start with a capital letter and be at least 3 characters long',
              },
            })}
            type="text"
            id="name"
            name="name"
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div className="form__item">
          <label htmlFor="surName">SurName:</label>
          <input
            {...register('surName', {
              required: 'required field',
              pattern: {
                value: /^[A-Z][a-z]{2,}$/,
                message: 'start with a capital letter and be at least 3 characters long',
              },
            })}
            type="text"
            id="surName"
            name="surName"
          />
          {errors.surName && <p>{errors.surName.message}</p>}
        </div>

        <div className="form__item">
          <label htmlFor="country">Country:</label>
          <select {...register('country', { required: true })} id="country" name="country">
            <option value="Russia">Russia</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
          {errors.country ? <p>{errors.country.message}</p> : null}
        </div>

        <div className="form__item">
          <label htmlFor="dob">Date of birth:</label>
          <input
            {...register('dob', {
              required: 'required field',
              validate: { dateNotFuture },
            })}
            type="date"
            id="dob"
            name="dob"
          />
          {errors.dob && <p>{errors.dob.message}</p>}
        </div>

        <div className="form__item">
          <label htmlFor="file">Загрузите файл:</label>
          <input
            data-testid="file-input"
            {...register('file', {
              required: {
                value: true,
                message: 'file is required',
              },
            })}
            type="file"
            id="file"
            name="file"
          />
          {errors.file && <p>{errors.file.message}</p>}
        </div>

        <div className="form__item">
          <label>Выберите пол:</label>
          <div>
            <input
              {...register('gender', { required: { value: true, message: 'choose one gender' } })}
              type="radio"
              id="male"
              name="gender"
              value="male"
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              {...register('gender', { required: { value: true, message: 'choose one gender' } })}
              type="radio"
              id="female"
              name="gender"
              value="female"
            />
            <label htmlFor="female">Female</label>
          </div>
          {errors.gender && <p>{errors.gender.message}</p>}
        </div>

        <div className="form__item">
          <label htmlFor="agree">Aggre</label>
          <input
            {...register('agree', {
              required: { value: true, message: 'you must agree to everything' },
            })}
            type="checkbox"
            id="agree"
            name="agree"
          />
          {errors.agree?.message && <p>{errors.agree.message}</p>}
        </div>

        <button data-testid="submit-button" type="submit">
          Submit
        </button>
      </form>

      <div className="cards">
        {cards.map((card, index) => (
          <FormCard {...card} key={index} />
        ))}
      </div>
    </>
  );
}
