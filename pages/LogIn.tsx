interface IProps {
  children: React.ReactNode;
}

function LogIn(props: IProps) {
  console.log(props);
  return <div className="LogIn">Login</div>;
}

export default LogIn;
