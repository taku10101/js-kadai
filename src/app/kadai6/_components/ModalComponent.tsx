import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from "@yamada-ui/react";

import React from "react";
type Props = {
  title: string;
  children: React.ReactNode;
};
export const ModalComponent = (props: Props) => {
  const { title, children } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>{title}Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalHeader>{title}Modal</ModalHeader>

        <ModalBody>{children}</ModalBody>
      </Modal>
    </>
  );
};
