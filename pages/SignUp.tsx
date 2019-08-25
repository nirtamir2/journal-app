import React from "react";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { dimensions } from "../common/theme";
import { TextField } from "../components/TextField";
import { Button } from "../components/Button";

function SignUp() {
  const [username, serUsername] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleChangeUsername(username: string) {
    serUsername(username);
  }

  function handleChangeName(name: string) {
    setName(name);
  }
  function handleChangePassword(password: string) {
    setPassword(password);
  }

  function handleSignUp() {}

  return (
    <Layout>
      <div className="SignUp">
        <Header />
        <form onSubmit={handleSignUp} className="form">
          <TextField
            label="Nane:"
            value={name}
            required
            onChange={handleChangeName}
          />
          <TextField
            label="Username:"
            value={username}
            required
            onChange={handleChangeUsername}
          />
          <TextField
            label="Password:"
            type="password"
            value={password}
            required
            onChange={handleChangePassword}
          />
          <div>
            <Button submit>Sign Up</Button>
          </div>
        </form>
      </div>
      <style jsx>{`
        .SignUp {
          padding: ${dimensions.gutter};

          display: grid;
          grid-auto-flow: row;
          grid-gap: ${dimensions.gutter};
        }
        .form {
          display: grid;
          grid-auto-flow: row;
          grid-gap: ${dimensions.gutter};
        }
      `}</style>
    </Layout>
  );
}

export default SignUp;
