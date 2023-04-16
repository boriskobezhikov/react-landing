import React from 'react';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import Header from './components/Header';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';
import PageFour from './components/PageFour';

function App() {
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(ZoomOut(1,2))}>
          <Header/>
          <PageOne/>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
      <Animator animation={batch(MoveOut())}>
        <PageTwo/>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
      <Animator animation={batch(ZoomOut(1,1.1))}>
        <PageThree/>
        </Animator>
      </ScrollPage>
      <ScrollPage page={3}>
      <Animator animation={batch(FadeIn())}>
        <PageFour/>
          </Animator>
      </ScrollPage>
    </ScrollContainer>
    
  );
}

export default App;
