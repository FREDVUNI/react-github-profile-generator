import React from 'react'
import {AppBar,Toolbar,Typography, Box,Avatar} from '@mui/material'
import { GitHub } from '@mui/icons-material'
import styled from '@emotion/styled'
import {Link} from 'react-router-dom'

const NavBar = () =>{
    const StyledToolbar = styled(Toolbar)({
        display:"flex",
        justifyContent:"space-between"
    });

    const Icons = styled(Box)({ 
        display:"flex",
        alignItems:"center",
        gap:"20px"
    })
    return (
    <>
    <AppBar position="sticky" sx={{ backgroundColor:"#212426",boxShadow:"none"}}>
            <StyledToolbar>
                <Typography  
                    sx={{ 
                        display:{xs:"none",sm:"block"},
                        fontSize: "2rem",
                        fontWeight:"500",
                        letterSpacing: "0.9px",
                        color:"#ddd",
                        backgroundClip: "text",
                    }}                    
                > 
                <Link to="/" className="link-h1"><GitHub sx={{ color:"#ddd",marginRight:"30px" }}/>Git landia</Link> 
                </Typography>
                  <GitHub sx={{ display:{xs:"block",sm:"none"}}}/>
                  <Link to="/repos" className="link">Repos</Link>
                <Icons>
                    <Avatar src="https://avatars.githubusercontent.com/u/41730664?v=4" sx={{ width:30,height:30 }}/>
                </Icons>
            </StyledToolbar>
    </AppBar>
    </>
    )
}

export default NavBar