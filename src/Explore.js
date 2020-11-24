import React, { useState } from 'react';
import { 
  Heading,
  Stack,
  Button,
  Checkbox, 
  Flex,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Select,
} from "@chakra-ui/core";

import jsonprofiles from './profiles.json';
import veganprofiles from './vegans.json';
import similarprofiles from './similarprofiles.json'
import './App.css'
import Profile from './components/profile/Profile';
import SimilarProfile from './components/profile/SimilarProfile.js';

const Explore = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [profiles, setProfiles] = useState(jsonprofiles)
  const [isLoading, setLoading] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [modalOpen, isModalOpen] = useState(true);
  const [isEditing, setEditing] = useState(false);

  console.log(profiles)

  const filter = () => {
    isModalOpen(false);
    setLoading(true);
    setTimeout(() => setLoading(false), 500)
    setProfiles(veganprofiles)
  }

  const setDropdownIndex = (index) => {
    setClickedIndex(index)
  }

  return (
      <div className="explorepage">
        <Flex align="center">
          <Button
            variantColor="blue"
            onClick={() => isModalOpen(true)}
          >
            Edit My Preferences
          </Button>
          <Button
            onClick={() => setEditing(!isEditing)}
            variantColor={isEditing ? "red": "blue"}
          >
            {isEditing ? "Save Edit" : "Edit Profiles"}
          </Button>
        </Flex>
        <Stack spacing={3}>
            <Heading as="h1" size="2xl">Food Friends</Heading>
            <Heading as="h2" size="xl">Explore</Heading>
        </Stack>
        {
          isLoading ? 
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            /> : (
            <Flex wrap="wrap" justify="space-around">
              {profiles.map((p, index) => {
                return (
                  <div style={{ paddingBottom: "10px" }}>
                    <Profile profile={p} setDropdownIndex={setDropdownIndex} isEditing={isEditing}/>
                    {index === clickedIndex ? (
                      <div className="similar-profiles">
                        {similarprofiles.map(sp => {
                          return (
                          <SimilarProfile profile={sp}/>
                        )})}
                      </div> 
                      ) : null}
                  </div>)
              })}
            </Flex>
          )
        }
        <Modal isOpen={modalOpen} onClose={() => isModalOpen(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>My Preferences</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Select placeholder="Select diet">
                <option value="option1">Keto</option>
                <option value="option2">Vegan</option>
                <option value="option3">Vegetarian</option>
              </Select>
              <Checkbox variantColor="blue" defaultIsChecked padding={10}>
                Only My City
              </Checkbox>
              <Select placeholder="Select price">
                <option value="option1">$</option>
                <option value="option2">$$</option>
                <option value="option3">$$$</option>
              </Select>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={filter}>
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    )
}

export default Explore;