interface IProps {
  children: React.ReactNode;
}

function SignUp(props: IProps) {
  console.log(props);

  return <div className="SignUp">SignUp</div>;
}

export default SignUp;
