import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useBreakpointValue,
} from "@chakra-ui/react";

export const Bloqueador = () => {
  const variant = useBreakpointValue({
    base: true,
    sm: false,
  });
  return (
    <Modal
      size={"xl"}
      isOpen={variant}
      isCentered
    >
      <ModalOverlay backdropFilter="blur(5px) hue-rotate(250deg)" />
      <ModalContent>
        <ModalHeader>Voltea el celular</ModalHeader>
        <ModalBody>aasasdas</ModalBody>
      </ModalContent>
    </Modal>
  );
};
