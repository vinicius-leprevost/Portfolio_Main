'use client';

import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { HamburgerIcon, CloseIcon, CalendarIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';

// Adjusted links array with route paths
const Links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' }
];

// Modify the NavLink component to use React Router's Link
const NavLink = ({ children, to }) => {
    return (
        <Box
            as={Link} // Use the Link component from react-router-dom
            to={to} // 'to' prop to specify the path for navigation
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}
        >
            {children}
        </Box>
    );
};

// Define prop types for the NavLink component
NavLink.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired, // Ensure 'to' prop is a string for navigation
};

export default function WithAction() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box>Logo</Box>
                        {/* Desktop Navigation */}
                        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link.name} to={link.path}>
                                    {link.name}
                                </NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        {/* Link to the Contact Page via Button */}
                        <Button
                            as={Link}  // Use Link from react-router-dom
                            to="/contact"  // Navigate to contact page
                            variant={'solid'}
                            colorScheme={'teal'}
                            size={'sm'}
                            mr={4}
                            leftIcon={<CalendarIcon />}>
                            Contact Me
                        </Button>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    size={'sm'}
                                    src={
                                        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                    }
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuDivider />
                                <MenuItem>Centennial Student Info</MenuItem>
                                <MenuDivider />
                                <MenuItem>Test</MenuItem>
                                <MenuDivider />
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {/* Mobile Navigation */}
                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link.name} to={link.path}>
                                    {link.name}
                                </NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}
