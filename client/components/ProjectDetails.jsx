import PropTypes from 'prop-types';
import {
    Box,
    Heading,
    Text,
    Stack,
    Image,
    useColorModeValue,
} from '@chakra-ui/react';

const ProjectDetails = ({ title, long_description, images, technologies }) => {
    return (
        <Box
            maxW={'full'} // Responsive widths for mobile, tablet, and desktop
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}
        >
            <Stack spacing={4}>
                <Heading
                    color={useColorModeValue('gray.700', 'white')}
                    fontSize={'3xl'}
                    fontFamily={'body'}
                >
                    {title}
                </Heading>

                {images.filter(Boolean).map((src, index) => (
                    <Image
                        key={index}
                        src={src}
                        alt={`Image ${index + 1}`}
                        objectFit="cover"
                        w="full"
                        h="200px"
                        mb={2}
                    />
                ))}

                {/* Render long_description */}
                <Text color={'gray.500'} textAlign='justify'>{long_description}</Text>
                {technologies && (
                    <Text
                        color={'green.500'}
                        textTransform={'uppercase'}
                        fontWeight={800}
                        fontSize={'sm'}
                        letterSpacing={1.1}
                    >
                        <Text
                            textTransform={'uppercase'}
                            fontWeight={500}
                            fontSize={'sm'}
                            letterSpacing={0.1}
                        >
                            Used Technologies:
                        </Text>
                        {technologies}
                    </Text>
                )}
            </Stack>
        </Box>
    );
};

ProjectDetails.propTypes = {
    title: PropTypes.string.isRequired,
    long_description: PropTypes.string,
    technologies: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
};

ProjectDetails.defaultProps = {
    long_description: '',
    technologies: '',
    images: [],
};

export default ProjectDetails;
