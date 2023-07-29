import React, { useState } from 'react';
import Layout from '../Layout';
import { Inertia } from '@inertiajs/inertia';

import Title from '../../components/Title';
import FormInput from '../../components/FormInput';
import CustomCalendar from '../../components/CustomCalendar';
import Button from '../../components/Button';
import Alert from '../../components/Alert';
import { Link } from '@inertiajs/inertia-react';

import { calendar } from '../../utils/svgIcons';

const Reservation = () => {
  const [status, setStatus] = useState(false);
  const [errors, setErrors] = useState([]);

  const [email, setEmail] = useState('');
  const [date, setDate] = useState(null);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: email,
      date: date,
    };

    Inertia.post('/reservation', data, {
      onError(errors) {
        setStatus(422);
        setErrors(Object.entries(errors));
        setTimeout(() => setStatus(false), 5000);
      }
    });
  };

  return (
    <>
      <Title h1={'Create a Reservation'} />

      <form className='max-w-sm mx-auto' onSubmit={handleSubmit}>
        <FormInput
          inputLabel={'Enter your email account'}
          inputValue={email}
          onChangeEvent={(e) => handleEmail(e)}
        />

        <div className='flex'>
          <div className='flex pr-2'>
            <CustomCalendar
              inputLabel='Date of Birth'
              selectedDate={date}
              onDateChange={handleDateChange}
              min={new Date('2023-07-01')}
              max={new Date('2023-08-31')}
            />
          </div>
          <div className='flex items-center mx-4'>
            <svg {...calendar}>
              <path {...calendar.path} />
            </svg>
          </div>
        </div>

        {status && <Alert message={errors} containerColor={'yellow-100'} borderColor={'border-yellow-500'} textColor={'text-yellow-700'} />}

        <div className='flex items-center justify-center'>
          <Button type={'submit'} message={'Make Reservation'} />
        </div>
      </form>

      <div className='flex items-center'>
        <p>
          Don't have an account yet?
          <Link className='text-blue-500 underline' href='/register'> Register! </Link>
        </p>
      </div>
    </>
  );
};

export default Reservation;

Reservation.layout = page => <Layout children={page} />;
