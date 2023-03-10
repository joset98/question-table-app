import { AppBar, Toolbar } from "@mui/material";
import { Login, Menu, Add, Settings, Comment } from '@mui/icons-material/';

import { NavBox } from "./styles/NavBox.styles";
import LinkButton from "../../core-ui/styled/LinkButton/LinkButton";

const Header = () => {

    return (
        <>
            <AppBar>
                <Toolbar sx={{ background: '#262a35' }}>

                    <NavBox >

                        <LinkButton
                            startIcon={<Menu />}
                        >
                            BROWSEN
                        </LinkButton>

                        <LinkButton
                            startIcon={<Add />}
                        >
                            ADD NEW QUESTION
                        </LinkButton>

                        <LinkButton
                            startIcon={<Settings />}
                        >
                            API
                        </LinkButton>

                        <LinkButton
                            startIcon={<Comment />}
                        >
                            DISCUSS
                        </LinkButton>

                        <LinkButton
                            startIcon={<Login />}
                        >
                            LOGIN
                        </LinkButton>

                    </NavBox>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;