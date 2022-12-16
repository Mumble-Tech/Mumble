import { Tooltip } from '@chakra-ui/react';

interface TooltipProps {
  children: React.ReactNode;
  innerContent: string;
}

export const TooltipSkeleton = ({ children, innerContent }: TooltipProps) => {
    return (
      <Tooltip hasArrow label={innerContent} color='black' bg='gray.300' placement='auto-start'>
        {children}
      </Tooltip>
    );
};
