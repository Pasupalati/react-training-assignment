import React from 'react';
import { Grid } from '@mui/material';
import UserCard from './UserCard';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <Grid container spacing={3}>
      {users.map(user => (
        <Grid item xs={12} sm={6} md={4} key={user.id}>
          <UserCard user={user} />
        </Grid>
      ))}
    </Grid>
  );
};

export default UserList;
