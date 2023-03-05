import { getUser, UserData } from '@/services/api/user';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { decrement, increment } from '@/store/counterReducer';
import { RootState } from '@/store';

const Home: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getUser();
        setUsers(data);
      } catch (error: any) {
        console.error('Error fetching data:', error.message);
        throw error;
      }
    };

    fetchData();
  }, []);

  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Example Users</h2>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
      <h2>Redux Counter</h2>
      <div>
        <div>
          <button aria-label="Increment value" onClick={() => dispatch(increment())}>
            Increment
          </button>
          <span>{count}</span>
          <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
