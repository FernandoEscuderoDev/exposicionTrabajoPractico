import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useBreakpointValue,
  ModalFooter,
  Icon,
} from "@chakra-ui/react";
import { TbDeviceMobileRotated } from "react-icons/tb";

export const Bloqueador = () => {
  const variant = useBreakpointValue({
    base: true,
    sm: false,
  });
  return (
    <Modal size={"xs"} isOpen={variant} isCentered>
      <ModalOverlay backdropFilter="blur(10px) hue-rotate(290deg)" />
      <ModalContent boxShadow={"dark-lg"} rounded={"xl"} color={"white"} bgColor={"red.500"}>
        <ModalHeader display={"flex"} gap={2} justifyContent={"center"} alignItems={"center"} roundedTop={'xl'} boxShadow={"dark-lg"}>
          Gira el celular
          <Icon boxSize={8} as={TbDeviceMobileRotated} />
        </ModalHeader>
        <ModalBody p={"7"}>
          Esta pagina esta diseñada para estar en Horizontal
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
