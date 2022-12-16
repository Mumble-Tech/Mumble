import { ContainerProps } from './Container';

export const IconContainer = ({children, iconSrc}: ContainerProps) => {
  return (
    <div className='w-4 h-2 p-4 bg-[#3F7D6B]'>
      <span className='bg-[#4BD8C7]'>{iconSrc}</span>
    </div>
  );
};
