import styled from "styled-components";

interface IOverlayProps {
  open: boolean;
}
export const Overlay = styled.div`
  opacity: ${(p: IOverlayProps) => (p.open ? 1 : 0)};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.54);
  transition: opacity 0.4s,
    transform 0s ${(p: IOverlayProps) => (p.open ? `0s` : `0.4s`)};
  transform: translateX(${(p: IOverlayProps) => (p.open ? `0%` : `-100%`)});
  z-index: 1;
  user-select: ${(p: IOverlayProps) => (p.open ? `none` : `all`)}};
`;
Overlay.displayName = "Overlay";
