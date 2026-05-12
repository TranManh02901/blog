import React from 'react';
import { useColorMode, useColorModeValue, IconButton} from '@chakra-ui/react';
import { BsMoon, BsSun } from 'react-icons/bs';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(BsMoon, BsSun);

  return (
    <IconButton
      _hover={{
        bgColor : 'rgba(52, 52, 52, 0.2)'
      }}
      colorScheme='rgba(52, 52, 52, 0.2)'
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color={useColorModeValue('blue.600','yellow.500')}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
