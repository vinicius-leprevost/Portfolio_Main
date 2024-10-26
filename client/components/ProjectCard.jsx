import { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Button,
    useColorModeValue,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import DetailedCard from './ProjectDetails.jsx'; // Import the detailed card component

const ProjectCard = ({
                        title,
                        technologies,
                        short_description,
                        long_description,
                        mainImageSrc,
                        extraImageSrc1,
                        extraImageSrc2,
                        extraImageSrc3,
                        extraImageSrc4,
                        startDate,
                        endDate,
                        children
                       }) => {
    const [isOpen, setIsOpen] = useState(false); // Modal state

    const handleOpen = () => setIsOpen(true);  // Open modal
    const handleClose = () => setIsOpen(false); // Close modal

    return (
        <>
            <Center py={6}>
                <Box
                    maxW={'445px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.900')}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    p={6}
                    overflow={'hidden'}
                    _hover={{
                        transform: 'scale(1.05)',
                        transition: 'transform 0.2s ease-in-out',
                    }}
                    transition="transform 0.2s ease-in-out"
                >
                    {/* Image */}
                    <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                        <img
                            src={mainImageSrc}
                            alt={title}
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        />
                    </Box>

                    {/* Content */}
                    <Stack>
                        {/* Date placed above technologies */}
                        {startDate && (
                            <Text color={'gray.500'} fontSize={'sm'} mb={-2} mt={-5}>
                                {startDate}
                            </Text>
                        )}
                        {endDate && (
                            <Text color={'gray.500'} fontSize={'sm'} mb={-2} mt={-5}>
                                {endDate}
                            </Text>
                        )}

                        {technologies && (
                            <Text
                                color={'green.500'}
                                textTransform={'uppercase'}
                                fontWeight={800}
                                fontSize={'sm'}
                                letterSpacing={1.1}
                            >
                                {technologies}
                            </Text>
                        )}
                        <Heading
                            color={useColorModeValue('gray.700', 'white')}
                            fontSize={'2xl'}
                            fontFamily={'body'}
                        >
                            {title}
                        </Heading>
                        {/* Render short_description */}
                        <Text color={'gray.500'} textAlign='justify'>{short_description}</Text>
                    </Stack>

                    {/* Additional content */}
                    {children && <Stack mt={4}>{children}</Stack>}

                    {/* Button at the bottom */}
                    <Stack mt={6} align={'center'}>
                        <Button
                            colorScheme="blue"
                            variant="solid"
                            onClick={handleOpen} // Open modal when clicked
                            _hover={{
                                bg: 'blue.500',
                            }}
                        >
                            More Details
                        </Button>
                    </Stack>
                </Box>
            </Center>

            {/* Modal for Detailed Card */}
            <Modal isOpen={isOpen} onClose={handleClose} size="4xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {/* Pass details to the DetailedCard */}
                        <DetailedCard
                            title={title}
                            long_description={long_description}
                            images={[
                                mainImageSrc,
                                extraImageSrc1,
                                extraImageSrc2,
                                extraImageSrc3,
                                extraImageSrc4
                            ]}
                            technologies={technologies}
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

// PropTypes validation
ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    technologies: PropTypes.string,
    short_description: PropTypes.string,
    long_description: PropTypes.string,
    mainImageSrc: PropTypes.string.isRequired,
    extraImageSrc1: PropTypes.string,
    extraImageSrc2: PropTypes.string,
    extraImageSrc3: PropTypes.string,
    extraImageSrc4: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    children: PropTypes.node,
};

// Default props
ProjectCard.defaultProps = {
    technologies: '',
    short_description: '',
    long_description: '',
    date: '',
    endDate: ''
};

export default ProjectCard;
