import { Injectable } from '@nestjs/common';
export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'Marius',
      username: 'mariu1010',
      password: 'sosecure',
    },
    {
      id: 2,
      name: 'Kyle',
      username: 'keyl',
      password: 'sosecure',
    },
    {
      id: 3,
      name: 'Martin',
      username: 'martin00',
      password: 'sosecure',
    },
    {
      id: 4,
      name: 'Kay',
      username: 'kaykay',
      password: 'sosecure',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
