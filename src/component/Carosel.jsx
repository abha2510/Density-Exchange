'use client'
import React from "react";
import { Flex, Box, Heading } from "@chakra-ui/react";
import "../css/Carosel.css";
import Image from "next/image";
import orange from "../assests/orange.png"
const Carosel = () => {
  return (
    <Box marginTop={"100px"}>   
   <Heading ml={230}>Does this sound familiar...
        <Image 
        className="waveAnimation" 
        src={orange} 
        height={100} 
        width={100} 
        marginTop={20} 
    />
 
</Heading>

    <Flex marginTop={"70px"} justifyContent={"space-evenly"}>
      <Box className="box" backgroundColor={"#f8d3a1"}>
        <p className="emoji">😲</p>
        <p className="head">You get a promotion at work</p>
        <p className="text">
          You question yourself and wonder when they'll realize you are an
          unqualified imposter instead of trusting yourself and your abilities
        </p>
      </Box>

      <Box className="tilted-div" backgroundColor={"#6035ee"} color={"white"}>
        <p className="emoji">😠</p>
        <p className="head">You argue with a colleague</p>
        <p style={{ color: "white" }} className="text">
          You get angry and defensive, instead of staying open and working
          towards common ground
        </p>
      </Box>

      <Box className="box" backgroundColor={"#d0d9f4"}>
        <p className="emoji">🤨</p>
        <p className="head">You attend a class reunion</p>
        <p className="text">
          You compare yourself with your peers achievements instrad of making
          your self judgement more independent on others
        </p>
      </Box>
      <Box className="box" backgroundColor={"#a6f0ff"}>
        <p className="emoji">😒</p>
        <p className="head">You are at a lively dinner party</p>
        <p className="text">
          You play on you phone instead of confidently approaching strangers and
          striking up a chat
        </p>
      </Box>
    </Flex>
    </Box>
  );
};

export default Carosel;
