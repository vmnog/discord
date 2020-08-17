import styled from "styled-components";

export const Container = styled.div`
  grid-area: SL; /* Indicando qual area ele representa */

  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--tertiary);
  padding: 11px 0;
  max-height: 100vh; /* A sidebar ocupa toda altura */

  overflow-y: scroll; /* Se o conteudo for maior então habilita o scroll */

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Separator = styled.div`
  width: 32px;
  border-bottom: 2px solid var(--quarternary);

  margin-bottom: 8px;
`;
