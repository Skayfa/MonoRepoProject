import React from 'react';
import { useSetListQuery } from '@nx-apollo-react-ex/data-access';


/* eslint-disable-next-line */
export interface SetListProps { }

export const SetList = (props: SetListProps) => {
  const { loading, error, data } = useSetListQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul>
      {data?.allSets?.map((e) => (
        <li key={e?.id}>
          {e?.year} - <strong>{e?.name}</strong> ({e?.numParts} parts)
        </li>
      ))}
    </ul>
  );
};

export default SetList;