"use client";
import React from "react";
import mob from "../assests/mob.png";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import "../css/Home.css"
import Image from "next/image";
const Home1 = () => {
  return (
    <div>
      <Box
        backgroundColor={"#eeebfe"}
        display={"flex"}
        justifyContent={"space-between"}
        borderRadius={"30px 30px"}
        width={"70%"}
        h={"auto"}
        m={"auto"}
      >
        <Box
          border={"0px solid red"}
          w={"40%"}
          textAlign={"left"}
          margin={"auto"}
        >
          <Text>Ahead App</Text>
          <Heading fontSize={50} mt={10}>
            Master your Life by mastering emotions
          </Heading>
        </Box>

        <Box
          border={"0px solid red"}
          w={"52%"}
          display={"flex"}
          position="relative"
        >
          <Box
            m={"auto"}
            border={"0px solid black"}
            position="absolute"
            top="250px"
            left="-8px"
            zIndex="10"
            w={"150px"}
            textAlign={"center"}
            borderRadius={20}
          >
            <Card>
              <CardHeader>
                <Heading size="md" backgroundColor={"#6bb894"} h={50}>
                  🎇◸
                </Heading>
              </CardHeader>
              <CardBody backgroundColor={"#f5f1f4"}>
                <Text textAlign={"left"}>
                  Can you find what best calms you down?
                </Text>
              </CardBody>
            </Card>
          </Box>
          <Box border={"0px solid black"} zIndex="1">
            <Image src={mob} alt="mobile"></Image>
          </Box>
          
        </Box>
       
      </Box>
      <Box
        border={"0px solid black"}
        width={"60%"}
        h={"auto"}
        m={"auto"}
        padding={20}
        marginTop={100}
      >
        <SimpleGrid spacing={6} templateColumns="repeat(3,1fr)">
          <Card>
            <CardHeader>
              <Heading size="md"> EQ beats IQ</Heading>
            </CardHeader>
          </Card>
          <Card w={"70%"}>
            <CardBody>
              <Text>
                People with high emotional intelligence (EQ) live more fulfilled
                lives. They tend to be happier and have healthier relationships.
              </Text>
            </CardBody>
          </Card>
          <Card w={"70%"}>
            <CardBody>
              <Text>
                They are more sucessful in their pursuits and make for inspiring
                leaders. According to science, they earn $29k a year.
              </Text>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default Home1;
