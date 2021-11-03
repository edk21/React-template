import styled from "styled-components"

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
`;

export const MutedLink1 = styled(MutedLink)`
  align-self: flex-end;
  margin: -15px 50px 20px 0;
`

export const BoldLink = styled.a`
  font-size: 11px;
  color: rgb(2, 62, 138);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 320px;
  height: 42px;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 0px 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(2, 62, 138);
  }
`;

export const SubmitButton = styled.button`
  width: 345px;
  padding: 11px;
  color: #ade8f4;
  font-size: 15px;
  font-weight: 600;
  margin-right: 58px;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(2, 62, 138);
  background: linear-gradient(
    58deg,
    rgba(2, 62, 138, 1) 20%,
    rgba(2, 62, 238, 1) 100%
  );
  &:hover {
    filter: brightness(1.1);
  }
`;