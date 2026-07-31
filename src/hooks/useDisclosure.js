import { useCallback, useState } from 'react';

export const useDisclosure = (initialOpen = false) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);
  const onToggle = useCallback(() => setIsOpen(prev => !prev), []);

  return { isOpen, onOpen, onClose, onToggle };
};
