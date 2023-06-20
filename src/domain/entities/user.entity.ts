export type UserEntity = {
  id: number;
  email: string;
  password: string;
  username: string;
  name: string;
  lastName: string;
  age: number;
};

export type AddUserParams = Omit<UserEntity, "id">;
