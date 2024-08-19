import {
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { IconSettings } from '@tabler/icons-react';

import useMnemonics from '../hooks/useMnemonics';
import useWallet from '../store/useWallet';

import KeyManager from './KeyManager';
import MnemonicsModal from './MnemonicsModal';
import WipeOutAlert from './WipeOutAlert';

function MainMenu(): JSX.Element {
  const { exportWalletFile } = useWallet();

  const wipeAlert = useDisclosure();

  const keyManagerDrawer = useDisclosure();
  const { revealMnemonics } = useMnemonics();
  const mobile = useBreakpointValue({ base: true, md: false }) ?? true;

  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Settings"
          icon={<IconSettings size={mobile ? 20 : 24} />}
          size="sm"
          variant="dark"
          m={mobile ? 0 : 2}
          p={mobile ? 0 : 2}
        />
        <MenuList>
          <MenuItem onClick={keyManagerDrawer.onOpen}>
            Manage keys & accounts
          </MenuItem>
          <MenuItem onClick={revealMnemonics}>Backup mnemonic</MenuItem>
          <MenuItem onClick={exportWalletFile}>Export wallet file</MenuItem>
          <MenuDivider />
          <MenuItem color="red" onClick={wipeAlert.onOpen}>
            Wipe out
          </MenuItem>
        </MenuList>
      </Menu>
      <WipeOutAlert disclosure={wipeAlert} />
      <MnemonicsModal />
      <KeyManager
        isOpen={keyManagerDrawer.isOpen}
        onClose={keyManagerDrawer.onClose}
      />
    </>
  );
}

export default MainMenu;
