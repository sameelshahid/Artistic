import headerStyles from "../styles/Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <Link href="/">
        <a className={headerStyles.a}>
          <h1 className={headerStyles.title}>
            <span>Art</span>istic
          </h1>
        </a>
      </Link>
      <p className={headerStyles.description}>
        Now you can search for your favourite artist and view their upcoming
        events
      </p>
    </div>
  );
};

export default Header;
