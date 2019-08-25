import React from "react";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { dimensions } from "../common/theme";
import { TextField } from "../components/TextField";
import { Button } from "../components/Button";

function LogIn() {
  const [username, serUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleChangeUsername(username: string) {
    serUsername(username);
  }
  function handleChangePassword(password: string) {
    setPassword(password);
  }

  function handleLogin() {}

  return (
    <Layout>
      <div className="login">
        <Header />
        <form onSubmit={handleLogin} className="form">
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
            <Button submit>Login</Button>
          </div>
        </form>
      </div>
      <style jsx>{`
        .login {
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

export default LogIn;
