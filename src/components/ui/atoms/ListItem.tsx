import styled from "styled-components";
import { ButtonStyle } from "./Button";
export const ListItem = styled.li`
  ${ButtonStyle};
  display: inline-block;
  width: auto;
`;
ListItem.displayName = "ListItem";
