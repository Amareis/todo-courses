import React, {useEffect, useState} from 'react'
import './norm.css'
import styled from "styled-components";
import store from "./store/store";
import {observer} from "mobx-react-lite";
import {Box, Button, ButtonGroup, Container, CssBaseline, makeStyles, Grid} from "@material-ui/core";
import {Appbar} from "./newComponents/AppBar/AppBar";
import layoutStore from "./store/layoutStore";
import {Results} from "./newComponents/Results/Results";
import {Content} from "./newComponents/Content/Content";
import {blockStatement} from '@babel/types';
import {Category} from "./newComponents/Category/Category";


const useStyles = makeStyles((theme) => ({
    root: {
	   position: "relative",
	   width: "100vw",
	   height: "100vh",
	   maxHeight: '100vh',
	   backgroundColor: "#FFDEE9",
	   backgroundImage: " linear-gradient(315deg, #FFDEE9 0%, #B5FFFC 100%)",
	   display: "flex",
	   flexDirection: "column",
    },
    container: {
        position: "relative",
	   display: "grid",
	   gridTemplateColumns: "150px 300px 1fr"
    },

    button: {
	   display: "flex",
	   direction: "column",
	   width: "100%"
    },


}))
const App = observer(() => {
    const classes = useStyles()

    useEffect(() => {
	   setTimeout(() => {
		  store.apiDelay4second()
	   }, 4000)
    }, [store.canIStartSearch]);
    useEffect(() => {
	   store.startProgram();
    }, []);

    return (
	   <div className={classes.root}>
		  <CssBaseline/>
		  <Appbar/>

		  <Container maxWidth="lg" className={classes.container}>
			 <Category/>
			 <Results/>
			 {layoutStore.activeView === 'content' ?
				<Content/> : <div>когда карточка не отображается ты можешь меня увидеть</div>}

		  </Container>

	   </div>

    );
})

export default App;

export const Typography = styled.div`

  font-size: ${props => props.fontSize || "40px"};
  font-family: Roboto;
  cursor: pointer;
  font-weight: ${props => props.fontWeight || "100"};
  color: ${props => props.color || 'rgba(255,255,255,1)'}`

