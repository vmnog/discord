import React from "react";

import { Container, Role, User, Avatar } from "./styles";

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Victor Nogueira" />

      <Role>Disponível - 1</Role>
      <UserRow nickname="Guilherme Rodz" isBot />

      <UserRow nickname="Fulaninho de tal" />
      <UserRow nickname="Fulaninho de tal" />
      <UserRow nickname="Fulaninho de tal" />
      <UserRow nickname="Fulaninho de tal" />
      <UserRow nickname="Fulaninho de tal" />
      <UserRow nickname="Fulaninho de tal" />
      <UserRow nickname="Fulaninho de tal" />
      <UserRow nickname="Fulaninho de tal" />
      <UserRow nickname="Fulaninho de tal" />
      <UserRow nickname="Fulaninho de tal" />
      <UserRow nickname="Fulaninho de tal" />
      <UserRow nickname="Fulaninho de tal" />
      <UserRow nickname="Fulaninho de tal" />
      <UserRow nickname="Fulaninho de tal" />
      <UserRow nickname="Fulaninho de tal" />
      <UserRow nickname="Fulaninho de tal" />
      <UserRow nickname="Fulaninho de tal" />
      <UserRow nickname="Botinho de tal" isBot />
      <UserRow nickname="Fulaninho de tal" />
      <UserRow nickname="Fulaninho de tal" />
      <UserRow nickname="Botinho de tal" isBot />
      <UserRow nickname="Botinho de tal" isBot />
      <UserRow nickname="Fulaninho de tal" />
    </Container>
  );
};

export default UserList;
