import { useState } from 'react';
import {
    FormControl,
    FormLabel,
    Input,
    // Button,
    // Modal,
    // ModalOverlay,
    // ModalContent,
    // ModalHeader, ModalCloseButton, ModalBody,
} from '@chakra-ui/react'

const ContactForm = () => {
    // const [isOpen, setIsOpen] = useState(false); // Modal state
    //
    // const handleOpen = () => setIsOpen(true);  // Open modal
    // const handleClose = () => setIsOpen(false); // Close modal

    return (
        <>
            <FormControl isRequired>
                <FormLabel>First name</FormLabel>
                <Input placeholder='First name' />
            </FormControl>
            {/*<Button*/}
            {/*    colorScheme="blue"*/}
            {/*    variant="solid"*/}
            {/*    onClick={handleOpen}*/}
            {/*    _hover={{*/}
            {/*        bg: 'blue.500',*/}
            {/*    }}*/}
            {/*>*/}
            {/*    OPEN CONTACT*/}
            {/*</Button>*/}
            {/*<Modal isOpen={isOpen} onClose={handleClose} size="4xl">*/}
            {/*    <ModalOverlay />*/}
            {/*    <ModalContent>*/}
            {/*        <ModalHeader></ModalHeader>*/}
            {/*        <ModalCloseButton />*/}
            {/*        <ModalBody>*/}
            {/*            <FormControl isRequired>*/}
            {/*                <FormLabel>First name</FormLabel>*/}
            {/*                <Input placeholder='First name' />*/}
            {/*            </FormControl>*/}
            {/*        </ModalBody>*/}
            {/*    </ModalContent>*/}
            {/*</Modal>*/}
        </>
    );
};

export default ContactForm;
