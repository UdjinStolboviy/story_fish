import React from "react";
import { StyledContainer } from './styles';

interface IProps {
    children:React.ReactNode
}

const  Container = ({ children  }:IProps) => (
    <StyledContainer>{ children }</StyledContainer>
)
 
export default Container