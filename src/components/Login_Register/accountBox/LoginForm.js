import React, { useContext } from "react";
import {Link} from "react-router-dom"
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink1,
  MutedLink,
  SubmitButton,
} from "./Common";
import { Marginer } from "../marginer";
import { AccountContext } from "./AccountContext";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink1 href="#">Forget your password?</MutedLink1>
      <Marginer direction="vertical" margin="1.6em" />
      <Link to="/">
        <SubmitButton type="submit">Signin</SubmitButton>
      </Link>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}