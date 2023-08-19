"use client";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import "../css/Wonder.css";
const Wonder = () => {
  return (
    <div>
      <Box
        backgroundColor={"#edf8fe"}
        width={"70%"}
        m={"auto"}
        textAlign={"center"}
        padding={30}
      >
        <p>
          Let your friends, family, and co-workers (anonymously) rate your
          social skills.
        </p>
        <Heading>Ever wondered what others think of you?</Heading>
        <Box display={'flex'} justifyContent={'center'} textAlign={'center'} mt={150}>

        <div class="flower">
          <div class="petal petal-1"></div>
          <div class="petal petal-2"></div>
          <div class="petal petal-3"></div>
          <div class="petal petal-4"></div>
          <div class="petal petal-5"></div>
          <div class="petal petal-6"></div>
          <div class="core">
            <p>1</p>
          </div>
        </div>
        <div class="flower">
          <div class="petal petal-1"></div>
          <div class="petal petal-2"></div>
          <div class="petal petal-3"></div>
          <div class="petal petal-4"></div>
          <div class="petal petal-5"></div>
          <div class="petal petal-6"></div>
          <div class="core">
            <p>2</p>
          </div>
        </div>
        <div class="flower">
          <div class="petal petal-1"></div>
          <div class="petal petal-2"></div>
          <div class="petal petal-3"></div>
          <div class="petal petal-4"></div>
          <div class="petal petal-5"></div>
          <div class="petal petal-6"></div>
          <div class="core">
            <p>3</p>
          </div>
        </div>
        </Box>
      </Box>
    </div>
  );
};

export default Wonder;
