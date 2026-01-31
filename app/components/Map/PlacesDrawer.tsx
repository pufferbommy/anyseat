import type { WorkplacePlace } from '~/types/workplace.d';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Button
} from "@heroui/react";

interface PlacesDrawerProps {
  places: WorkplacePlace[];
  selectedPlaceId: string | null;
  onSelectPlace: (id: string | null) => void;
}

const PlacesDrawer: React.FC<PlacesDrawerProps> = ({ places, selectedPlaceId, onSelectPlace }) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button className='fixed bottom-0 left-0' onPress={onOpen}>Open Drawer</Button>
      <Drawer isOpen={isOpen} placement='bottom' onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
            <DrawerHeader className="flex flex-col gap-1">Drawer Title</DrawerHeader>
                <DrawerBody>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                    risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                    quam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                    risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                    quam.
                  </p>
                  <p>
                    Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
                    adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                    officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                    nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                    deserunt nostrud ad veniam.
                  </p>
                </DrawerBody>
                <DrawerFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Action
                  </Button>
                </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default PlacesDrawer;