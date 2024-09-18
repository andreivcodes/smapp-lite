import { Button, Divider, Flex, Text, useColorMode } from '@chakra-ui/react';

function ThemeTest(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex direction="column" gap={8}>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'} mode
      </Button>
      <Buttons />
    </Flex>
  );
}

function Buttons(): JSX.Element {
  return (
    <Flex direction="column" gap={2}>
      <Flex direction="column" alignItems="center" gap={2}>
        <Text fontSize="xl">Large buttons</Text>
        <Flex direction="row" gap={2}>
          <Button size="lg" variant="primary">
            Primary lg
          </Button>
          <Button size="lg" variant="secondary">
            Secondary lg
          </Button>
          <Button size="lg" variant="ghost">
            Ghost lg
          </Button>
          <Button size="lg" variant="destructive">
            Destructive lg
          </Button>
        </Flex>
        <Flex direction="row" gap={2}>
          <Button size="lg" variant="primary" isDisabled>
            Disabled Primary lg
          </Button>
          <Button size="lg" variant="secondary" isDisabled>
            Disabled Secondary lg
          </Button>
          <Button size="lg" variant="ghost" isDisabled>
            Disabled Ghost lg
          </Button>
          <Button size="lg" variant="destructive" isDisabled>
            Disabled Destructive lg
          </Button>
        </Flex>
      </Flex>
      <Divider />
      <Flex direction="column" alignItems="center" gap={2}>
        <Text fontSize="xl">Medium buttons (default)</Text>
        <Flex direction="row" gap={2}>
          <Button variant="primary">Primary md</Button>
          <Button variant="secondary">Secondary md</Button>
          <Button variant="ghost">Ghost md</Button>
          <Button variant="destructive">Destructive md</Button>
        </Flex>
        <Flex direction="row" gap={2}>
          <Button variant="primary" isDisabled>
            Disabled Primary md
          </Button>
          <Button variant="secondary" isDisabled>
            Disabled Secondary md
          </Button>
          <Button variant="ghost" isDisabled>
            Disabled Ghost md
          </Button>
          <Button variant="destructive" isDisabled>
            Disabled Destructive md
          </Button>
        </Flex>
      </Flex>
      <Divider />
      <Flex direction="column" alignItems="center" gap={2}>
        <Text fontSize="xl">Small buttons </Text>
        <Flex direction="row" gap={2}>
          <Button size="sm" variant="primary">
            Primary sm
          </Button>
          <Button size="sm" variant="secondary">
            Secondary sm
          </Button>
          <Button size="sm" variant="ghost">
            Ghost sm
          </Button>
          <Button size="sm" variant="destructive">
            Destructive sm
          </Button>
        </Flex>
        <Flex direction="row" gap={2}>
          <Button size="sm" variant="primary" isDisabled>
            Disabled Primary sm
          </Button>
          <Button size="sm" variant="secondary" isDisabled>
            Disabled Secondary sm
          </Button>
          <Button size="sm" variant="ghost" isDisabled>
            Disabled Ghost sm
          </Button>
          <Button size="sm" variant="destructive" isDisabled>
            Disabled Destructive sm
          </Button>
        </Flex>
      </Flex>

      <Divider />
      <Flex direction="column" alignItems="center" gap={2}>
        <Text fontSize="xl">Extra small buttons </Text>
        <Flex direction="row" gap={2}>
          <Button size="xs" variant="primary">
            Primary xs
          </Button>
          <Button size="xs" variant="secondary">
            Secondary xs
          </Button>
          <Button size="xs" variant="ghost">
            Ghost xs
          </Button>
          <Button size="xs" variant="destructive">
            Destructive xs
          </Button>
        </Flex>
        <Flex direction="row" gap={2}>
          <Button size="xs" variant="primary" isDisabled>
            Disabled Primary xs
          </Button>
          <Button size="xs" variant="secondary" isDisabled>
            Disabled Secondary xs
          </Button>
          <Button size="xs" variant="ghost" isDisabled>
            Disabled Ghost xs
          </Button>
          <Button size="xs" variant="destructive" isDisabled>
            Disabled Destructive xs
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default ThemeTest;
