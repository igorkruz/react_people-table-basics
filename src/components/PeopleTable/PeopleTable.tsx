/* eslint-disable no-console */
import { FC } from 'react';
import { v4 } from 'uuid';

import { PersonItem } from '../PersonItem/PersonItem';
import { Person } from '../../types';

interface Props {
  people: Person[]
}

export const PeopleTable: FC<Props> = ({ people }) => {
  return (
    <>
      <table
        data-cy="peopleTable"
        className="table is-striped is-hoverable is-narrow is-fullwidth"
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Sex</th>
            <th>Born</th>
            <th>Died</th>
            <th>Mother</th>
            <th>Father</th>
          </tr>
        </thead>

        <tbody>
          {people.map(person => (
            <PersonItem
              person={person}
              key={v4()}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
