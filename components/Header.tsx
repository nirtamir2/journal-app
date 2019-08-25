import Link from "next/link";
import { dimensions, colors, animations } from "../common/theme";

export function Header() {
  return (
    <header className="header">
      <div className="header_main">
        <h1 className="header_title">
          <Link href="/">Digital Journal</Link>
        </h1>
        <div>|</div>
        <h2 className="header_subtitle">Create A Note</h2>
      </div>
      <div className="header_login">
        <Link href="login">Log in</Link>
        <Link href="signup">Sign up</Link>
      </div>
      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .header_title {
          margin: 0;
        }

        .header_title > :global(a) {
          color: currentColor;
          text-decoration: none;
          transition: color ${animations.duration};
        }

        .header_title > :global(a:hover) {
          color: ${colors.primary};
          text-decoration: none;
        }

        .header_subtitle {
          color: ${colors.textSecondary};
          margin: 0;
        }

        .header_main {
          display: grid;
          grid-auto-flow: column;
          grid-gap: ${dimensions.gutter};
          align-items: center;
        }

        .header_login {
          display: grid;
          grid-auto-flow: column;
          grid-gap: ${dimensions.gutter};
          align-items: center;
        }

        .header_login > :global(a) {
          position: relative;
          text-decoration: none;
          color: ${colors.primary};
        }

        .header_login > :global(a:before) {
          content: "";

          height: 1px;
          width: 100%;

          position: absolute;
          left: 0;
          bottom: -${dimensions.gutterSmall};

          background: currentColor;

          transform-origin: 0;
          transform: scaleX(0);

          transition: transform ${animations.duration};
        }

        .header_login > :global(a:hover:before) {
          transform: scaleX(1);
        }
      `}</style>
    </header>
  );
}
