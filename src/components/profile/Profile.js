import React, {useState} from 'react';
import { 
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuOptionGroup,
    MenuItemOption,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
} from "@chakra-ui/core";

import './Profile.css';
import image from '../../images/image.png';
import Pill from '../Pill'

const Profile = ({profile, setDropdownIndex}) => {
    const [isFollowing, setFollowing] = useState("Follow");
    const [icon, setIcon] = useState("triangle-down");
    const [showSimilarProfiles, setShowSimilarProfiles] = useState(false);
    const [isEditing, setEditing] = useState(false);
    const [diet, setDiet] = useState(profile.diet);
    const [popoverOpen, setPopoverOpen] = useState(false)

    const dropdown = () => {
        icon === "triangle-down" ? setIcon("triangle-up") : setIcon("triangle-down");
        setShowSimilarProfiles(!showSimilarProfiles);
        showSimilarProfiles ? setDropdownIndex(-1) : setDropdownIndex(profile.index);
    }

    const editDiet = (newDiet) => {
        setDiet(newDiet)
        setPopoverOpen(!popoverOpen)
    }

    return (
        <div className="profile">
            <div className="content">
                <div className="edit">
                    <Button 
                        onClick={() => setEditing(!isEditing)}
                        variantColor={isEditing ? "red": "gray"}
                    >
                        {isEditing ? "Save Edit" : "Edit"}
                    </Button>
                </div>
                <div className="image">
                    <img src={image} alt=""/>
                </div>
                <div className="info">
                    <span className="name"><b>{profile.name}</b></span>
                </div>
                <div className="dietpills">
                    <div className="pill"><Pill data={diet}/></div>
                    {
                        isEditing ?
                        ( <Popover usePortal isOpen={popoverOpen}>
                            <PopoverTrigger>
                                <IconButton size="sm" icon="edit" onClick={() => setPopoverOpen(true)}/>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverArrow />
                                <PopoverHeader>Choose a new diet.</PopoverHeader>
                                <PopoverCloseButton />
                                <PopoverBody>
                                    <Button variantColor="white" onClick={() => editDiet("vegan")}><Pill data="vegan"/></Button>
                                    <Button variantColor="white" onClick={() => editDiet("keto")}><Pill data="keto"/></Button>
                                    <Button variantColor="white" onClick={() => editDiet("gluten-free")}><Pill data="gluten-free"/></Button>
                                    <Button variantColor="white" onClick={() => editDiet("vegetarian")}><Pill data="vegetarian"/></Button>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover> ) : null
                    }

                    {/* <Menu>
                        <MenuButton as={Button} rightIcon="chevron-down" border="1px solid grey">
                        Diet
                        </MenuButton>
                        <MenuList minWidth="240px">
                        <MenuOptionGroup title="Diet" type="checkbox">
                            <MenuItemOption value="vegan">Vegan</MenuItemOption>
                            <MenuItemOption value="keto">Keto</MenuItemOption>
                            <MenuItemOption value="gluten-free">Gluten-Free</MenuItemOption>
                        </MenuOptionGroup>
                        </MenuList>
                    </Menu> */}
                </div>
                <div className="info">
                    <b>{profile.city}, FL</b> &nbsp; | &nbsp; <b>{profile.priceRange}</b>
                </div>
                <div className="info">
                    <b>Favorite Restaurants:</b> &nbsp; {profile.places[0]}, {profile.places[1]}
                </div>
                <div className="info">
                    <b>Favorite Foods:</b> &nbsp; {profile.foods[0]}, {profile.foods[1]}
                </div>
                <div className="buttons">
                    <div className="image"><button className="followbutton" onClick={() => setFollowing("Following")}>{isFollowing}</button></div>
                    <IconButton 
                      variantColor="teal"
                      aria-label="Call Segun"
                      size="lg"
                      icon={icon}
                      height={10}
                      onClick={dropdown}
                    />
                </div>
            </div>
        </div>
    )
}

export default Profile;