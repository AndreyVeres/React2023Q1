import React, { Component, createRef } from 'react';
import { IFormValues } from 'types/types';
import { IErrors, validate } from 'utils/validate';
import './form.scss';
import FormCard, { IUserInfo } from './FormCard';

interface State {
  cards: IUserInfo[];
  errors: IErrors;
}

export default class Form extends Component {
  nameRef = createRef<HTMLInputElement>();
  surNameRef = createRef<HTMLInputElement>();
  dobRef = createRef<HTMLInputElement>();
  countryRef = createRef<HTMLSelectElement>();
  agreeRef = createRef<HTMLInputElement>();
  maleRef = createRef<HTMLInputElement>();
  femaleRef = createRef<HTMLInputElement>();
  fileRef = createRef<HTMLInputElement>();
  formRef = createRef<HTMLFormElement>();

  state: State = {
    cards: [],
    errors: {},
  };

  submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const values: IFormValues = {
      name: this.nameRef.current?.value,
      surName: this.surNameRef.current?.value,
      dob: this.dobRef.current?.value,
      country: this.countryRef.current?.value,
      agree: this.agreeRef.current?.checked,
      female: this.femaleRef.current?.checked,
      male: this.maleRef.current?.checked,
      file: this.fileRef.current?.files?.item(0)?.name,
    };

    const errors = validate(values);

    if (!Object.keys(errors).length) {
      this.setState((prev) => ({ ...prev, cards: [...this.state.cards, values] }));
      this.formRef.current?.reset();
    }
    this.setState((prev) => ({ ...prev, errors }));
  };

  render() {
    const {
      nameRef,
      surNameRef,
      dobRef,
      countryRef,
      agreeRef,
      maleRef,
      femaleRef,
      fileRef,
      formRef,
    } = this;

    const {
      nameMessage,
      surNameMessage,
      dobMessage,
      countryMessage,
      genderMessage,
      fileMessage,
      agreeMessage,
    } = this.state.errors;

    return (
      <>
        <form ref={formRef} onSubmit={(e) => this.submitHandler(e)} className="form">
          <div className="form__item">
            <label htmlFor="name">Name:</label>
            <input ref={nameRef} type="text" id="name" name="name" />
            {nameMessage ? <p>{nameMessage}</p> : null}
          </div>

          <div className="form__item">
            <label htmlFor="surname">SurName:</label>
            <input ref={surNameRef} type="text" id="surname" name="surname" />
            {surNameMessage ? <p>{surNameMessage}</p> : null}
          </div>

          <div className="form__item">
            <label htmlFor="dob">Date of birth:</label>
            <input ref={dobRef} type="date" id="dob" name="dob" />
            {dobMessage ? <p>{dobMessage}</p> : null}
          </div>

          <div className="form__item">
            <label htmlFor="country">Country:</label>
            <select ref={countryRef} id="country" name="country">
              <option value="Russia">Russia</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
            {countryMessage ? <p>{countryMessage}</p> : null}
          </div>

          <div className="form__item">
            <label>Выберите пол:</label>
            <div>
              <input ref={maleRef} type="radio" id="male" name="gender" value="male" />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input ref={femaleRef} type="radio" id="female" name="gender" value="female" />
              <label htmlFor="female">Female</label>
            </div>
            {genderMessage ? <p>{genderMessage}</p> : null}
          </div>

          <div className="form__item">
            <label htmlFor="file">Загрузите файл:</label>
            <input ref={fileRef} type="file" id="file" name="file" />
            {fileMessage ? <p>{fileMessage}</p> : null}
          </div>

          <div className="form__item">
            <label htmlFor="agree">Aggre</label>
            <input ref={agreeRef} type="checkbox" id="agree" name="agree" />
            {agreeMessage ? <p>{agreeMessage}</p> : null}
          </div>

          <button type="submit">Submit</button>
        </form>

        <div className="cards">
          {this.state.cards.map((card, index) => (
            <FormCard {...card} key={index} />
          ))}
        </div>
      </>
    );
  }
}
