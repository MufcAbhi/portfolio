import styled from 'styled-components';

export const Error = styled.span`
  color: #ff4136;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const Center = styled.div`
  text-align: center;
`;

export const InputField = styled.div`
  position: relative;
  margin-bottom: 1rem;
  background-color: var(--input-color);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem 0.25rem;

  label {
    display: block;
    margin-bottom: 7px;
    font-size: var(--smaller-font-size);
    color: var(--title-color);
  }

  input {
    font-size: 16px;
  }
`;

export const Input = styled.input`
  width: 100%;
  background-color: var(--input-color);
  color: var(--text-color);
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  border: none;
  outline: none;
  padding: 0.25rem 0.5rem 0.5rem 0;
`;

export const ButtonIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  margin-left: var(--mb-0-5);
  transition: 0.3s;
`;
