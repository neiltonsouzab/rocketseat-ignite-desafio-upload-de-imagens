import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />

      <ModalContent
        width="auto"
        height="auto"
        maxW="900px"
        maxH="900px"
        backgroundColor="gray.800"
      >
        <ModalBody padding="0">
          <Image maxW="900px" maxH="600px" src={imgUrl} />
        </ModalBody>
        <ModalFooter
          height="32px"
          padding="12px"
          justifyContent="flex-start"
          backgroundColor="gray.800"
          borderBottomRadius="6px"
        >
          <Link
            variant="unstyled"
            color="gray.50"
            fontSize="14px"
            href={imgUrl}
            target="_blank"
          >
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
