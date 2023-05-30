import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useBreakpointValue,
  ModalFooter,
} from "@chakra-ui/react";

export const Bloqueador = () => {
  const variant = useBreakpointValue({
    base: true,
    sm: false,
  });
  return (
    <Modal size={"xs"} isOpen={variant} isCentered>
      <ModalOverlay backdropFilter="blur(5px) hue-rotate(250deg)" />
      <ModalContent rounded={"xl"} color={"white"} bgColor={"red.500"}>
        <ModalHeader boxShadow={"dark-lg"}>Gira el celular</ModalHeader>
        <ModalBody>
          Esta pagina esta diseñada para estar en Horizontal
        </ModalBody>
        <ModalFooter fontWeight={"bold"}>Dale voltealo</ModalFooter>
      </ModalContent>
    </Modal>
  );
};
