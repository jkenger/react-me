import { useTheme } from "../context/ThemeContext";
import tw from "twin.macro";
import { styled } from "styled-components";

const Input = styled.input`
  ${({ className }) => tw`${className}`}
  ${(props) => props.disabled && tw`bg-gray-300`}
  ${tw`dark:bg-gray-900 dark:text-white dark:border-gray-700 bg-gray-100 border-gray-300 focus:shadow-sm transition-all duration-100 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:border-gray-300`}
`;

export default Input;
