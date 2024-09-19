import React, { useState } from 'react';
import { CheckIcon, ChevronDownIcon } from '@chakra-ui/icons';
import {
  Button,
  Checkbox,
  Divider,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  useColorMode,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuDivider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';

function ThemeTest(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex direction="column" gap={8} minW="100%">
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'} mode
      </Button>
      <ComponentAccordion />
    </Flex>
  );
}

function ComponentAccordion(): JSX.Element {
  const components = [
    { title: 'Buttons', content: <Buttons /> },
    { title: 'Checkboxes', content: <Checkboxes /> },
    { title: 'Radios', content: <Radios /> },
    { title: 'Tabs', content: <TabsTest /> },
    { title: 'Menu', content: <MenuTest /> },
    { title: 'Modal', content: <ModalTest /> },
    { title: 'Input', content: <Inputs /> },
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

function Inputs(): JSX.Element {
  return (
    <Flex direction="row" gap={2} flexWrap="wrap">
      <Input />
      <Input placeholder="with placeholder" />
      <InputGroup>
        <InputLeftAddon>+234</InputLeftAddon>
        <Input type="tel" placeholder="phone number" />
      </InputGroup>

      <Input isDisabled />
      <Input isDisabled placeholder="Here is a disabled placeholder" />

      <Input isInvalid />
      <Input isInvalid placeholder="Here is a invlid placeholder" />
    </Flex>
  );
}

function Buttons(): JSX.Element {
  const sizes = ['lg', 'md', 'sm', 'xs'] as const;
  const variants = [
    'primary',
    'secondary',
    'ghost',
    'text',
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
      <Checkbox>Normal</Checkbox>
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
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Modal content goes here...</ModalBody>
          <ModalFooter gap={3} px={8}>
            <Button variant="primary">Action primary</Button>
            <Button>Action default</Button>
            <Button variant="ghost" onClick={onClose}>
              Close ghost
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ThemeTest;
