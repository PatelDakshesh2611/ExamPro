import React from "react";
import { Box, Flex, Link as ChakraLink, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="gray.800" px={4} py={3}>
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Link to="/" style={{ textDecoration: "none" }}>
            <ChakraLink fontSize="xl" fontWeight="bold" color="white">
              Question Paper Management System
            </ChakraLink>
          </Link>
        </Box>
        <Flex alignItems="center" display={{ base: "none", md: "flex" }}>
          <Box>
            <Link to="/" style={{ textDecoration: "none" }}>
              <ChakraLink mr={4} color="white" _hover={{ textDecoration: "underline" }}>
                Home
              </ChakraLink>
            </Link>
          </Box>
          <Box>
            <Link to="/create-paper" style={{ textDecoration: "none" }}>
              <ChakraLink color="white" _hover={{ textDecoration: "underline" }}>
                Create Paper
              </ChakraLink>
            </Link>
          </Box>
          <Box>
            <Link  to="/signup" style={{ textDecoration: "none",marginLeft:'15px' }}>
              <ChakraLink color="white" _hover={{ textDecoration: "underline" }}>
                SignUp
              </ChakraLink>
            </Link>
          </Box>
          <Box>
            <Link  to="/login" style={{ textDecoration: "none",marginLeft:'15px' }}>
              <ChakraLink color="white" _hover={{ textDecoration: "underline" }}>
                Login
              </ChakraLink>
            </Link>
          </Box>
          {/* Add more navigation links as needed */}
        </Flex>
        <IconButton
          aria-label="Open navigation"
          icon={<HamburgerIcon />}
          color="white"
          onClick={onOpen}
          display={{ base: "block", md: "none" }}
        />
      </Flex>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Box>
              <Link to="/" style={{ textDecoration: "none" }}>
                <ChakraLink mb={4} color="black" onClick={onClose}>
                  Home
                </ChakraLink>
              </Link>
            </Box>
            <Box>
              <Link to="/create-paper" style={{ textDecoration: "none" }}>
                <ChakraLink color="black" onClick={onClose}>
                  Create Paper
                </ChakraLink>
              </Link>
            </Box>
            <Box>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <ChakraLink color="black" onClick={onClose}>
                  Signup
                </ChakraLink>
              </Link>
            </Box>
            <Box>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <ChakraLink color="black" onClick={onClose}>
                  Login
                </ChakraLink>
              </Link>
            </Box>
            
            {/* Add more navigation links as needed */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
