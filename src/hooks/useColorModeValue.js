import { useColorMode } from './useColorMode';

export const useColorModeValue = (light, dark) => {
  const { colorMode } = useColorMode();
  return colorMode === 'dark' ? dark : light;
};
