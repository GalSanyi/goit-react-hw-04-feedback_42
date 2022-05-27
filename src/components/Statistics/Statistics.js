import React from 'react';

import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import shortid from 'shortid';
export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <ul className={s.list}>
        <li id={shortid.generate()}>good: {good}</li>
        <li id={shortid.generate()}>neutral: {neutral}</li>
        <li id={shortid.generate()}>bad: {bad}</li>
        <li id={shortid.generate()}>total: {total}</li>
        <li id={shortid.generate()}>
          Positive feedback: {positivePercentage}%
        </li>
      </ul>
    </>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
