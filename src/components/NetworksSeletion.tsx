import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { O } from '@mobily/ts-belt';
import {
  IconChevronDown,
  IconCircleDotted,
  IconCircleFilled,
} from '@tabler/icons-react';

import useNetworks from '../store/useNetworks';
import useNetworkStatus from '../store/useNetworkStatus';

import AddNetworkDrawer from './AddNetworkDrawer';

function NetworkSelection(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { selectedIndex, getCurrentNetwork, switchNetwork, networks } =
    useNetworks();
  const currentNetwork = getCurrentNetwork();
  const { status } = useNetworkStatus();

  const mobile = useBreakpointValue({ base: true, md: false }) ?? false;
  const iconSize = useBreakpointValue({ base: 8, md: 14 }, { ssr: false });

  return (
    <>
      <AddNetworkDrawer isOpen={isOpen} onClose={onClose} />
      <Menu>
        <MenuButton
          as={Button}
          leftIcon={
            // eslint-disable-next-line no-nested-ternary
            status?.isSynced ? (
              <IconCircleFilled size={iconSize} color="#3AFFA7" />
            ) : O.isNone(currentNetwork) ? (
              <IconCircleFilled size={iconSize} color="red" />
            ) : (
              <IconCircleDotted size={iconSize} color="orange" />
            )
          }
          rightIcon={mobile ? <div /> : <IconChevronDown />}
          m={{ base: 0, md: 2 }}
          p={{ base: 0, md: 2 }}
          fontSize={{ base: '13px', md: '20px' }}
          size="sm"
          variant="dark"
        >
          {O.mapWithDefault(currentNetwork, 'No network', (net) => net.name)}
        </MenuButton>
        <MenuList>
          <MenuOptionGroup
            type="radio"
            value={String(selectedIndex)}
            onChange={(val) =>
              typeof val === 'string' && switchNetwork(parseInt(val, 10))
            }
          >
            {networks.map((val, idx) => (
              <MenuItemOption
                value={String(idx)}
                key={`${val.name}_${val.jsonRPC}`}
              >
                {val.name}
              </MenuItemOption>
            ))}
          </MenuOptionGroup>
          <MenuDivider />
          <MenuItem onClick={onOpen}>Add new network...</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}

export default NetworkSelection;
