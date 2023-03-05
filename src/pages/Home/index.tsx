import { getUser, UserData } from '@/services/api/user';
import { useEffect, useState } from 'react';

const Home = () => {
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

  return (
    <div>
      <h2>Example Users</h2>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default Home;
