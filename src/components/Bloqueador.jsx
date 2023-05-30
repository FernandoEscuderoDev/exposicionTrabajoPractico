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
      <ModalOverlay backdropFilter="blur(5px) hue-rotate(250deg)" />
      <ModalContent rounded={"xl"} color={"white"} bgColor={"red.500"}>
        <ModalHeader display={"flex"} gap={2} justifyContent={"center"} alignItems={"center"} boxShadow={"dark-lg"}>
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
