import { fonts, colors } from "../common/theme";

interface IProps {
  children: React.ReactNode;
}

export function Layout(props: IProps) {
  const { children } = props;
  return (
    <div className="App">
      {children}
      <style jsx global>
        {`
          @import url("https://fonts.googleapis.com/css?family=Lato&display=swap");

          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;

            display: grid;
            grid-template-columns: minmax(auto, 800px);
            justify-content: center;

            font-family: "Lato", sans-serif;
            font-size: ${fonts.size.medium};
            color: ${colors.textPrimary};
          }
        `}
      </style>
    </div>
  );
}
