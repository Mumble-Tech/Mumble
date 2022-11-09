import './button.css';
import { DiGithubBadge } from "react-icons/di";

interface ButtonProps {
  label: string;
  img?: boolean;
  onClick?: () => void;
}

export const Button = ({ label, img, onClick }: ButtonProps) => {
  return (
    <button
      className='p-[.3em] border-[#66462F] rounded-xl text-sm shadow-xl btn-font flex items-center justify-between'
      style={{ backgroundColor: '#66462F', color: '#F5EDDA' }}
      onClick={onClick}
    > 
    {/* If this is the right button */}
    {img && (
      <DiGithubBadge width={20} height={20} className='mr-[0.25em]' />
    )}
      {label}
    </button>
  );
};
