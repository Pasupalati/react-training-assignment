import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{user.name}</Typography>
        <Typography color="textSecondary">{user.email}</Typography>
        <Typography color="textSecondary">{user.phone}</Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
