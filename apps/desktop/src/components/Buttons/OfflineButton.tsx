import {TooltipSkeleton} from "../General/Tooltip/Tooltip";
import { HiStatusOffline, HiStatusOnline } from 'react-icons/hi';

interface OfflineButtonProps {
  isOffline: boolean;
  className?: string;
}

export const OfflineButton =  ({ isOffline }: OfflineButtonProps) => {
  return (
    <TooltipSkeleton innerContent={isOffline ? 'Offline' : 'Online'}>
      <button
        className='bg-transparent'
      >
      <span className='flex'>
        {isOffline ? <HiStatusOnline /> : <HiStatusOffline />}
      </span>
      </button>
    </TooltipSkeleton>
  );
};
