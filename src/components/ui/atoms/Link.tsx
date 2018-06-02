import styled from "styled-components";
import { Link as RawLink } from "@reach/router";

import { ButtonStyle } from "./Button";

export const Link = styled(RawLink)`
  ${ButtonStyle};
`;
Link.displayName = "Link";
