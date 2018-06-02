import styled from "styled-components";

interface INavProps {
  open: boolean;
}
export const Nav = styled.nav.attrs({
  role: "navigation"
})`
  top: 0;
  height: 100vh;
  width: 256px;
  max-width: 80%;
  position: absolute;
  background: #fff;
  transition: transform 0.2s;
  transform: translateX(${(p: INavProps) => (p.open ? `0` : `-20`)}em);
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1;
  font-size: 16px;
`;
Nav.displayName = "Nav";
