import React from "react";
import { AppBar, Button, Toolbar } from "@mui/material";
import { Login, Menu, Add, Settings, Comment } from '@mui/icons-material/';

import { NavBox } from "./styles/NavBox.styles";

const Header = (props) => {

    return (
        <>
            <AppBar>
                    <Toolbar sx={{background: '#262a35'}}>

                        <NavBox >

                            <Button
                                startIcon={<Menu/>}
                            >
                                BROWSE
                            </Button>

                            <Button
                                startIcon={<Add/>}
                            >
                                ADD NEW QUESTION
                            </Button>

                            <Button
                                startIcon={<Settings/>}
                            >
                                API
                            </Button>

                            <Button
                                startIcon={<Comment/>}
                            >
                                DISCUSS
                            </Button>

                            <Button
                                startIcon={<Login/>}
                            >
                                LOGIN
                            </Button>

                        </NavBox>

                    </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;