import { HeaderStyled } from "./Header.styled";
import HeaderLogo from "./HeaderLogo";
import HeaderSearchBar from "./HeaderSearchBar";
import HeaderUserBtns from "./HeaderUserBtns";

export default function Header() {
  return (
    <div>
      <HeaderStyled>
        <HeaderLogo />

        <HeaderSearchBar />

        <HeaderUserBtns />
      </HeaderStyled>
    </div>
  );
}
