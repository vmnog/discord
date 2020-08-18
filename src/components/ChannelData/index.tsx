import React from "react";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";
import ChannelMessage, { Mention } from "../ChannelMessage";

const ChannelData: React.FC = () => {
  return (
    <Container>
      <Messages>
        <ChannelMessage
          author="Fulaninho de tal"
          date="17/08/2020"
          content="Esta é uma mensagem"
        />

        <ChannelMessage
          author="Fulaninho de tal"
          date="17/08/2020"
          content="Esta é uma mensagem"
        />

        <ChannelMessage
          author="Botinho de tal"
          date="17/08/2020"
          content="Esta é uma mensagem de um bot"
          isBot
        />

        <ChannelMessage
          author="Fulaninho de tal"
          date="17/08/2020"
          content="Esta é uma mensagem"
        />

        <ChannelMessage
          author="Fulaninho de tal"
          date="17/08/2020"
          content="Esta é uma mensagem"
        />

        <ChannelMessage
          author="Fulaninho de tal"
          date="17/08/2020"
          content="Esta é uma mensagem"
        />

        <ChannelMessage
          author="Fulaninho de tal"
          date="17/08/2020"
          content={
            <>
              <Mention>@Victor Nogueira</Mention>, Olá :)
            </>
          }
          hasMention
        />

        <ChannelMessage
          author="Fulaninho de tal"
          date="17/08/2020"
          content="Esta é uma mensagem"
        />

        <ChannelMessage
          author="Fulaninho de tal"
          date="17/08/2020"
          content="Esta é uma mensagem"
        />

        <ChannelMessage
          author="Fulaninho de tal"
          date="17/08/2020"
          content="Esta é uma mensagem"
        />

        <ChannelMessage
          author="Fulaninho de tal"
          date="17/08/2020"
          content="Esta é uma mensagem"
        />

        <ChannelMessage
          author="Victor Nogueira"
          date="17/08/2020"
          content="Este é um dos meus projetos do portfólio"
        />

        <ChannelMessage
          author="Fulaninho de tal"
          date="17/08/2020"
          content={
            <>
              <Mention>@Victor Nogueira</Mention>, bom trabalho !!
            </>
          }
          hasMention
          isBot
        />

        <ChannelMessage
          author="Fulaninho de tal"
          date="17/08/2020"
          content="Esta é uma mensagem"
        />

        <ChannelMessage
          author="Fulaninho de tal"
          date="17/08/2020"
          content="Esta é uma mensagem"
        />

        <ChannelMessage
          author="Botinho de tal"
          date="17/08/2020"
          content="Esta é uma mensagem de um bot"
          isBot
        />

        <ChannelMessage
          author="Fulaninho de tal"
          date="17/08/2020"
          content="Esta é uma mensagem"
        />

        <ChannelMessage
          author="Fulaninho de tal"
          date="17/08/2020"
          content="Esta é uma mensagem"
        />

        <ChannelMessage
          author="Fulaninho de tal"
          date="17/08/2020"
          content="Esta é uma mensagem"
        />

        <ChannelMessage
          author="Fulaninho de tal"
          date="17/08/2020"
          content={
            <>
              <Mention>@Victor Nogueira</Mention>, Olá :)
            </>
          }
          hasMention
        />

        <ChannelMessage
          author="Fulaninho de tal"
          date="17/08/2020"
          content="Esta é uma mensagem"
        />

        <ChannelMessage
          author="Fulaninho de tal"
          date="17/08/2020"
          content="Esta é uma mensagem"
        />

        <ChannelMessage
          author="Fulaninho de tal"
          date="17/08/2020"
          content="Esta é uma mensagem"
        />

        <ChannelMessage
          author="Fulaninho de tal"
          date="17/08/2020"
          content="Esta é uma mensagem"
        />

        <ChannelMessage
          author="Victor Nogueira"
          date="17/08/2020"
          content="Este é um dos meus projetos do portfólio"
        />

        <ChannelMessage
          author="Fulaninho de tal"
          date="17/08/2020"
          content={
            <>
              <Mention>@Victor Nogueira</Mention>, bom trabalho !!
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
