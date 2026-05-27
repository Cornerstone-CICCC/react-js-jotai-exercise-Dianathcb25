import { useAtom } from 'jotai';
import { firstNameAtom } from '../atoms/user.atom';
import { lastNameAtom } from '../atoms/user.atom';
import { ageAtom } from '../atoms/user.atom';
import { hobbiesAtom } from '../atoms/user.atom';
import { useState, type SubmitEvent } from 'react';
import type { Hobby } from '../atoms/user.atom';

const User = () => {
  const [firstname, setFirstName] = useAtom(firstNameAtom);
  const [firstnameInput, setFirstNameInput] = useState<string>('');
  const [lastname, setLastName] = useAtom(lastNameAtom);
  const [lastnameInput, setLastNameInput] = useState<string>('');
  const [age, setAge] = useAtom(ageAtom);
  const [ageInput, setAgeInput] = useState<number>(0);
  const [hobbies, setHobbies] = useAtom(hobbiesAtom);
  const [hobbiesInput, setHobbiesInput] = useState<Hobby[]>([]);

  const handleHobbyChange = (hobby: Hobby) => {
    setHobbiesInput((prev) =>
      prev.includes(hobby) ? prev.filter((h) => h !== hobby) : [...prev, hobby],
    );
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFirstName(firstnameInput);
    setLastName(lastnameInput);
    setAge(ageInput);
    setHobbies(hobbiesInput);
  };

  return (
    <div>
      <h1>Users</h1>

      <div
        style={{
          padding: '1rem 1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
        }}
      >
        <span>
          <strong>First Name:</strong> {firstname}
        </span>
        <span>
          <strong>Last Name:</strong> {lastname}
        </span>
        <span>
          <strong>Age:</strong> {age} years old
        </span>
        <span>
          <strong>Hobbies:</strong> {hobbies.join(', ')}
        </span>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '1rem',
          gap: '1rem',
        }}
      >
        <label>
          First Name
          <input
            type="text"
            value={firstnameInput}
            onChange={(e) => setFirstNameInput(e.target.value)}
          />
        </label>

        <label>
          Last Name
          <input
            type="text"
            value={lastnameInput}
            onChange={(e) => setLastNameInput(e.target.value)}
          />
        </label>

        <label>
          Age
          <input
            type="number"
            value={ageInput}
            onChange={(e) => setAgeInput(Number(e.target.value))}
          />
        </label>

        <div>
          <label>
            Cooking
            <input
              type="checkbox"
              value="Cooking"
              checked={hobbiesInput.includes('Cooking')}
              onChange={() => handleHobbyChange('Cooking')}
            />
          </label>

          <label>
            Watch Movies
            <input
              type="checkbox"
              value={'Watch Movies'}
              checked={hobbiesInput.includes('Watch Movies')}
              onChange={() => handleHobbyChange('Watch Movies')}
            />
          </label>

          <label>
            Drinking
            <input
              type="checkbox"
              value={'Drinking'}
              checked={hobbiesInput.includes('Drinking')}
              onChange={() => handleHobbyChange('Drinking')}
            />
          </label>

          <label>
            Reading
            <input
              type="checkbox"
              value={'Reading'}
              checked={hobbiesInput.includes('Reading')}
              onChange={() => handleHobbyChange('Reading')}
            />
          </label>

          <label>
            Traveling
            <input
              type="checkbox"
              value={'Traveling'}
              checked={hobbiesInput.includes('Traveling')}
              onChange={() => handleHobbyChange('Traveling')}
            />
          </label>
        </div>
        <button type="submit">Add New User</button>
      </form>
    </div>
  );
};

export default User;
