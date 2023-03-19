import {useState,useRef} from 'react';
import {VStack,Flex,Heading} from '@chakra-ui/layout';
import {IconButton} from '@chakra-ui/button';
import {useColorMode} from '@chakra-ui/color-mode';
import {Spacer,Link,Drawer,DrawerOverlay,Button,useMediaQuery, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter} from '@chakra-ui/react';
import {FaSun,FaMoon,FaGithub,FaFacebook,FaInstagram,FaLinkedin} from 'react-icons/fa';
import {HiMenu} from 'react-icons/hi'
import Header from './components/header.d';
import Skills from './components/skills';
import Project from './components/projects.d';
import Contact from './components/contact.d';



function App() {
  const{colorMode,toggleColorMode}=useColorMode();
  const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)')
  const isdark=colorMode==="dark";
  const [open,setOpen]=useState(false);
  const btnRef =useRef<HTMLDivElement>(null);
  return (
    <div className="App">
       <VStack p={5}>
            <Flex w='100%'>
            {
              (!isNotSmallerScreen)?<><Drawer
              finalFocusRef={btnRef}
              isOpen={open} onClose={()=>{setOpen(false)}}>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerHeader mb={"10"} bgGradient={"linear(to-r,cyan.400,blue.500,purple.600)"}>Hi,<br/> This is Nirdosh</DrawerHeader>
                  <DrawerBody>
                  <VStack>
                  <Link w={"100%"}  onClick={()=>{setOpen(false)}} href='#'>Home</Link>
                  <Link w={"100%"}  onClick={()=>{setOpen(false)}} href='#2'>Skills</Link>
                  <Link w={"100%"}  onClick={()=>{setOpen(false)}} href='#3'>Projects</Link>
                  <Link w={"100%"}  onClick={()=>{setOpen(false)}} href='#4'>Contact Me</Link>
                  </VStack>
                  </DrawerBody>
                  <DrawerFooter>Copyright &copy; Nirdosh 2023</DrawerFooter>
                </DrawerContent>
                </Drawer>
                <IconButton icon={<HiMenu/>} onClick={()=>{setOpen(true)}} aria-label='drawericon'/>
                </>:null}
            <Heading ml='8' size='md' fontWeight='semibold' color='cyan.400'>Nirdosh</Heading>
            <Spacer></Spacer>
            {isNotSmallerScreen?<>
            <Link href='#'><Button ml={"2"} mr={"2"}>Home</Button></Link>
            <Link href='#2'><Button mr={"2"}>Skills</Button></Link>
            <Link href='#3'><Button mr={"2"}>Projects</Button></Link>
            <Link href='#4'><Button mr={"2"}>Contact</Button></Link>
            </>:null}
            <IconButton icon={isdark?<FaSun/>:<FaMoon/>} isRound={true} onClick={toggleColorMode} aria-label='colormode'></IconButton>
            <IconButton ml='2' icon=<FaFacebook/> isRound={true} onClick={()=>window.open("https://www.facebook.com/nirdosh.lamixane.1/")}  aria-label='Facebook'></IconButton>
            <IconButton ml='2' icon=<FaInstagram/> isRound={true} onClick={()=>window.open("https://www.instagram.com/_nirdosh.l/")}  aria-label='Instagram'></IconButton>
            <IconButton ml='2' icon=<FaGithub/> isRound={true} onClick={()=>window.open("https://github.com/NirdoshL/NirdoshL/")}  aria-label='Github'></IconButton>
            <IconButton ml='2' icon=<FaLinkedin/> isRound={true} onClick={()=>window.open("https://www.linkedin.com/in/nirdosh-lamixane/")}  aria-label='Linkedin'></IconButton>
            </Flex>
        </VStack>
    <Header/>
    <Skills/>
    <Project/>
    <Contact/>
    </div>
  );
}

export default App;
