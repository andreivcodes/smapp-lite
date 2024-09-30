import { useState } from 'react';
import { ChakraStylesConfig, Select } from 'chakra-react-select';
import { ArrowDownIcon, ChevronDownIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  Switch,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import { IconEye } from '@tabler/icons-react';

function ThemeTest(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex direction="column" gap={8} minW="100%">
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'} mode
      </Button>
      <ComponentAccordion />
      <Selects />
    </Flex>
  );
}

function ComponentAccordion(): JSX.Element {
  const components = [
    { title: 'Texts', content: <Texts /> },
    { title: 'Buttons', content: <Buttons /> },
    { title: 'Checkboxes', content: <Checkboxes /> },
    { title: 'Radios', content: <Radios /> },
    { title: 'Tabs', content: <TabsTest /> },
    { title: 'Menu', content: <MenuTest /> },
    { title: 'Modal', content: <ModalTest /> },
    { title: 'Input', content: <Inputs /> },
    { title: 'Select', content: <Selects /> },
    { title: 'Switch', content: <Switches /> },
    { title: 'Drawer', content: <DrawerTest /> },
  ];

  return (
    <Accordion allowMultiple>
      {components.map((component) => (
        <AccordionItem key={component.title}>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              {component.title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>{component.content}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function Texts(): JSX.Element {
  return (
    <Flex direction="column" gap={2} flexWrap="wrap">
      <Heading size="lg">Large heading</Heading>
      <Heading size="md">Medium heading</Heading>
      <Heading size="sm">Small heading</Heading>

      <Text size="lg">Large text</Text>
      <Text size="md">Medium text</Text>
      <Text size="sm">Small text</Text>
    </Flex>
  );
}

function Switches(): JSX.Element {
  return (
    <Flex direction="row" gap={2} flexWrap="wrap">
      <Switch />
    </Flex>
  );
}

function DrawerTest(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Flex flexDir="column" gap={4}>
              <Input placeholder="Type here..." />
              <Divider />
              <Select placeholder="Select" />
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Button mr={3}>Save</Button>
            <Button variant="textSecondary" onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function Selects(): JSX.Element {
  const chakraStyles: ChakraStylesConfig = {
    inputContainer: (provided, state) => ({
      ...provided,
      minW: '200px',
    }),
    menuList: (provided, state) => ({
      ...provided,
      borderRadius: '10px',
    }),
  };

  return (
    <Flex direction="row" gap={2} flexWrap="wrap">
      <Select
        placeholder="Select option"
        menuPortalTarget={document.body}
        styles={{
          menuPortal: (provided) => ({ ...provided, zIndex: 100 }),
        }}
        options={[
          {
            label: 'Option one',
            value: 'option-one',
          },
          {
            label: 'Option two',
            value: 'option-two',
          },
          {
            label: 'Option three',
            value: 'option-three',
          },
        ]}
        chakraStyles={chakraStyles}
      />

      <Select placeholder="Disabled" isDisabled chakraStyles={chakraStyles} />
    </Flex>
  );
}

function Inputs(): JSX.Element {
  return (
    <Flex direction="row" gap={2} flexWrap="wrap">
      <Input />
      <Input placeholder="with placeholder" />
      <InputGroup>
        <InputLeftAddon>+234</InputLeftAddon>
        <Input type="tel" placeholder="phone number" />
      </InputGroup>

      <InputGroup>
        <Input />
        <InputRightElement>
          <IconEye />
        </InputRightElement>
      </InputGroup>

      <Input isDisabled />
      <Input isDisabled placeholder="Here is a disabled placeholder" />

      <Input isInvalid />
      <Input isInvalid placeholder="Here is a invlid placeholder" />

      <Textarea />
      <Textarea placeholder="Here is a sample placeholder" />
      <Textarea placeholder="disabled" isDisabled />
      <Textarea placeholder="invalid" isInvalid />
    </Flex>
  );
}

function Buttons(): JSX.Element {
  const sizes = ['lg', 'md', 'sm', 'xs'] as const;
  const variants = [
    'primary',
    'secondary',
    'text',
    'textSecondary',
    'destructive',
  ] as const;

  return (
    <Flex direction="column" gap={4}>
      {sizes.map((size) => (
        <ButtonSection key={size} size={size} variants={variants} />
      ))}
    </Flex>
  );
}

function ButtonSection({
  size,
  variants,
}: {
  size: string;
  variants: readonly string[];
}): JSX.Element {
  return (
    <Flex direction="column" alignItems="center" gap={2}>
      <Text fontSize="xl">{size.toUpperCase()} buttons</Text>
      <Flex direction="row" gap={2} flexWrap="wrap">
        {variants.map((variant) => (
          <Button key={`${variant}-${size}`} size={size} variant={variant}>
            {variant} {size}
          </Button>
        ))}
      </Flex>
      <Flex direction="row" gap={2} flexWrap="wrap">
        {variants.map((variant) => (
          <Button
            key={`${variant}-${size}-disabled`}
            size={size}
            variant={variant}
            isDisabled
          >
            Disabled {variant} {size}
          </Button>
        ))}
      </Flex>
      <Divider />
    </Flex>
  );
}

function Checkboxes(): JSX.Element {
  return (
    <Flex direction="row" gap={2} flexWrap="wrap">
      <Checkbox variant="">Normal</Checkbox>
      <Checkbox isChecked>Checked</Checkbox>
      <Checkbox isDisabled>Disabled</Checkbox>
      <Checkbox isDisabled isChecked>
        Disabled Checked
      </Checkbox>
    </Flex>
  );
}

function Radios(): JSX.Element {
  const [value, setValue] = useState('1');
  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction="row">
        <Radio value="1">First</Radio>
        <Radio value="2">Second</Radio>
        <Radio value="3">Third</Radio>
        <Radio value="4" isDisabled>
          Disabled
        </Radio>
      </Stack>
    </RadioGroup>
  );
}

function TabsTest(): JSX.Element {
  return (
    <Tabs>
      <TabList>
        <Tab>Active</Tab>
        <Tab>Inactive</Tab>
        <Tab>Inactive</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Panel 1</TabPanel>
        <TabPanel>Panel 2</TabPanel>
        <TabPanel>Panel 3</TabPanel>
      </TabPanels>
    </Tabs>
  );
}

function MenuTest(): JSX.Element {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuDivider />
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
}

function ModalTest(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Placeholder for header</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ModalBody>
          <ModalFooter gap={3} px={8}>
            <Button>Button</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ThemeTest;
