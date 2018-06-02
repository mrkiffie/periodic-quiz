import * as React from "react";
import styled from "styled-components";

interface IImgProps {
  large?: boolean;
}

const Img = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: ${(p: IImgProps) => (p.large ? `45vh` : `4em`)};
  display: block;
  margin: 0 auto;
`;
Img.displayName = "Img";

interface IFlagProps {
  flag: string;
  large?: boolean;
  onLoad?: () => {};
}

export const Flag: React.SFC<IFlagProps> = ({ flag = "", onLoad, large }) => {
  return (
    <div style={{ width: "100%" }}>
      <Img
        src={`/${flag.replace(/^\//, "")}`}
        alt="Flag"
        onLoad={onLoad}
        large={large}
      />
    </div>
  );
};
