"use client";
import { Box, Heading, Text } from "@chakra-ui/react";
import purple from "../assests/purple.png";
import Image from "next/image";

function Slider() {
  return (
    <div>
      <Box
        borderRadius={"30px 30px"}
        width={"70%"}
        h={"auto"}
        display={"flex"}
        m={"auto"}
        marginTop={100}
        justifyContent={"space-between"}
        backgroundColor={"#fef7f1"}
      >
        <Box border={"0px solid red"} w={"50%"}>
          <Text textAlign={"left"} marginLeft={"85px"} marginTop={"20px"}>
            Built out of frustration
          </Text>
          <Heading
            textAlign={"left"}
            marginLeft={"85px"}
            marginTop={"15px"}
            fontSize={"40px"}
          >
            Meet the ahead app
          </Heading>
          <Box border={"0px solid red"} m={"auto"}>
            <Image src={purple} alt={"purple"} height={200} width={400} />
          </Box>
        </Box>

        <Box border={"0px solid blue"} w={"50%"}>
          <Box margin={"auto"} border={"0px solid green"} w={"78%"} mt={"90px"}>
            <Text
              fontSize={"20px"}
              p={"20px"}
              textAlign={"left"}
              lineHeight={"30px"}
            >
              A personalized pocket coach that provides bite-sized ,
              science-driven tools to boast emotional intelligence.{" "}
            </Text>

            <Text
              fontSize={"20px"}
              p={"20px"}
              textAlign={"left"}
              lineHeight={"30px"}
            >
              Think of it as a pocket cheerleader towards a better, more
              fulfilling.
            </Text>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Slider;
