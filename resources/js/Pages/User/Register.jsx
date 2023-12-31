import React, { useState } from 'react';
import Layout from '../Layout';
import { Inertia } from '@inertiajs/inertia';

import Title from '../../components/Title';
import Label from '../../components/Label';
import FormInput from '../../components/FormInput';
import CustomCalendar from '../../components/CustomCalendar';
import TermsAndConditions from '../Popups/TermsAndConditions';
import Button from '../../components/Button';
import Alert from '../../components/Alert';
import { Link } from '@inertiajs/inertia-react';

import { charactersOnly, numbersOnly } from '../../utils/formatters';
import { calendar } from '../../utils/svgIcons';

const Register = ({ localeText }) => {
  const [status, setStatus] = useState(false);
  const [errors, setErrors] = useState([]);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [emergencyName, setEmergencyName] = useState('');
  const [areaCode, setAreaCode] = useState('');
  const [emergencyPhone, setEmergencyPhone] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [accept, setAccept] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleFirstName = (e) => {
    const inputValue = charactersOnly(e);
    setFirstName(inputValue);
  };

  const handleLastName = (e) => {
    const inputValue = charactersOnly(e);
    setLastName(inputValue);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleDateChange = (e) => {
    setDateOfBirth(e);
  };

  const handleEmergencyName = (e) => {
    const inputValue = charactersOnly(e);
    setEmergencyName(inputValue);
  };

  const handleAreaCodeChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue == '+') {
      setAreaCode('');
    } else if (inputValue.length === 1) {
      setAreaCode('+' + inputValue);
    } else if (inputValue.length <= 5) {
      setAreaCode('+' + inputValue.slice(1));
    }
  };

  const handleEmergencyPhone = (e) => {
    const inputValue = numbersOnly(e);
    setEmergencyPhone(inputValue);
  };

  const handlePhotoSelect = (e) => {
    const photoInput = e.target;
    const photo = photoInput.files[0];

    if (photo) {
      setSelectedPhoto(photo);
    }
  };

  const handleAccept = () => {
    setAccept(true);
  };

  const handleDecline = () => {
    setAccept(false);
  };

  const handleSubmit = (form) => {
    form.preventDefault();

    const values = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      date_of_birth: dateOfBirth,
      emergency_contact_name: emergencyName,
      emergency_contact_number: areaCode + emergencyPhone,
      photo: selectedPhoto,
    };

    setIsLoading(true);

    Inertia.post('/register', values, {
      onSuccess() {
        //
      },
      onError(errors) {
        setStatus(422);
        setErrors(Object.entries(errors));
        setTimeout(() => setStatus(false), 5000);
        setIsLoading(false);
      }
    });
  };

  return (
    <>
      <Title
        h1={localeText.welcome}
        paragraph={localeText.statement}
      />

      <form className='max-w-sm mx-auto' onSubmit={handleSubmit}>
        <FormInput
          inputLabel={localeText.name}
          inputValue={firstName}
          onChangeEvent={handleFirstName}
          placeHolderProp={'Jane'}
        />
        <FormInput
          inputLabel={localeText.lastName}
          inputValue={lastName}
          onChangeEvent={handleLastName}
          placeHolderProp={'Doe'}
        />
        <FormInput
          inputLabel={localeText.email}
          inputValue={email}
          onChangeEvent={handleEmail}
          placeHolderProp={'john@example.com'}
        />

        <div className='flex'>
          <div className='flex pr-2'>
            <CustomCalendar
              inputLabel={localeText.birthDate}
              selectedDate={dateOfBirth}
              onDateChange={handleDateChange}
              min={new Date('1950-12-31')}
              max={new Date('2019-01-01')}
              showMonth={true}
              showYear={true}
            />
          </div>
          <div className='flex items-center mx-4'>
            <svg {...calendar}>
              <path {...calendar.path} />
            </svg>
          </div>
        </div>

        <FormInput
          inputLabel={localeText.contactName}
          inputValue={emergencyName}
          onChangeEvent={handleEmergencyName}
          placeHolderProp={'John Doe'}
        />

        <Label labelName={localeText.contactNumber} />
        <div className='flex space-x-2'>
          <input
            className='w-1/4 m-2 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-400'
            type='text'
            placeholder='+503'
            value={areaCode}
            onChange={handleAreaCodeChange}
          />
          <input
            className='w-3/4 m-2 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-teal-400'
            type='text'
            placeholder='7877-7272'
            value={emergencyPhone}
            onChange={handleEmergencyPhone}
          />
        </div>

        <Label labelName={localeText.picture} />
        <div className='mt-4 mb-4 flex items-center justify-center max-w-md'>
          <input className='w-full' type='file' name='photo' accept='image/*' onChange={handlePhotoSelect} />
        </div>

        {!accept &&
          <div className='flex items-center justify-center'>
            <TermsAndConditions onAccept={handleAccept} onDecline={handleDecline} localeText={localeText.termsAndCo} />
          </div>
        }

        {status &&
          <div className='flex items-center justify-center'>
            <Alert message={errors} containerColor={'bg-red-100'} borderColor={'border-red-500'} textColor={'text-red-700'} />
          </div>}

        {accept &&
          <div className='flex items-center justify-center'>
            <Button type={'submit'} message={localeText.submit} loading={isLoading} />
          </div>
        }
      </form>

      <div className='flex items-center'>
        <p>
          {localeText.footer}
          <Link className='text-blue-500 underline' href='/reservation'> {localeText.click} </Link>
        </p>
      </div>
    </>
  );
};

Register.defaultProps = {
  localeText: [],
};

export default Register;

Register.layout = page => <Layout children={page} />;
