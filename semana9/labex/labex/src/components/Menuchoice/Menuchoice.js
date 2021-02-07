import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";


const StyledUl = styled.ul`
    list-style-type: none;
    margin: 0;
    overflow: hidden;
    background-color: #333;
    padding: 0px;
    background-color: grey;
    color: black;
    font-weight: bold;
`;

const StyledLi = styled.li`
    float: left;
    height: 100%;
    padding: 10px;
    &:hover {
        background-color: red;
    }
`;

const DropDownContent = styled.div`
    display: none;
    position: absolute;
    min-width: 160px;
    z-index: 1;
`;

const DropDownLi = styled(StyledLi)`
    display: inline-block;
    &:hover ${DropDownContent} {
        display: block;
    }
`;

const StyledA = styled.a`
    display: inline-block;
    text-align: center;
    text-decoration: none;
`;

const SubA = styled(StyledA)`
    text-decoration: none;
    display: block;
    text-align: left;
    background-color: lightblue;
    padding: 10px;
`;

class MenuChoice extends Component {
    handleClick = action => {
        if (!action) return;

        if (this.props.onClick) this.props.onClick(action);
    };

    render = () => {
        return (
            <StyledUl>
                <DropDownLi>
                    <StyledA onClick={() => this.handleClick("DropDown")}>
                        Rotas de Viagens
                    </StyledA>
                    <DropDownContent>
                        {" "}
                        <SubA onClick={() => this.handleClick("Link1")}>
                            Marte
                        </SubA>
                        <SubA onClick={() => this.handleClick("Link2")}>
                            Lua
                        </SubA>
                        <SubA onClick={() => this.handleClick("Link3")}>
                            Jupiter
                        </SubA>
                    </DropDownContent>
                </DropDownLi>
            </StyledUl>
        );
    };
}

export default MenuChoice;