import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar.jsx"
import ProjectCard from "./components/ProjectCard.jsx"
import Home from "./src/pages/Home.jsx"
import About from "./src/pages/About.jsx"
import Projects from "./src/pages/Projects.jsx"
import Services from "./src/pages/Services.jsx"
import Contact from "./src/pages/Contact.jsx"
import { ChakraProvider, Container, Box } from '@chakra-ui/react'

const MainRouter = () => {
    return (
        <ChakraProvider>
            <Box bg="gray.100" minH="100vh">
                 {/*Centered Layout */}
                <Container
                    maxW="900px"    // Adjust the max-width as needed
                    mx="auto"        // Automatically centers the container
                    p="4"            // Padding around the content
                    bg="white"       // Background color for the content area
                    boxShadow="lg"   // Optional: Adds shadow for a card-like feel
                    borderRadius="md"// Optional: Adds rounded corners
                >
                    <NavBar />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/projects" element={<Projects />} />
                        <Route exact path="/services" element={<Services />} />
                        <Route exact path="/contact" element={<Contact />} />
                    </Routes>
                </Container>
            </Box>
        </ChakraProvider>
    );
};


export default MainRouter;