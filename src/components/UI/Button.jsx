import { css, styled } from "styled-components";
import tw from "twin.macro";

const Button = styled.button`
  ${({ className }) =>
    css`
      ${className}
    `}
  ${tw`flex items-center justify-center rounded-lg transition-all duration-100 space-x-1 text-xs px-3 py-2 shadow-sm border disabled:cursor-not-allowed`}
`;

export default Button;
