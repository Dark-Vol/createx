import { FC } from 'react';
import { Layers, MessagesSquare, Star, ThumbsUp } from 'lucide-react';

import { BenefitsButtonsTypes } from '@/types/homepage/benefits/benefits-buttons.types';

const BenefitsButton: FC<BenefitsButtonsTypes> = ({
  title,
  id,
  activeButtonIndex,
  setActiveButtonIndex,
}) => {
  const handleClick = () => {
    if (activeButtonIndex === id) return;
    setActiveButtonIndex(id);
  };

  const icons = [<Star key="star" />, <ThumbsUp key="thumbs" />, <Layers key="layers" />, <MessagesSquare key="messages" />];

  return (
    <button
      onClick={handleClick}
      className={`flex gap-2 items-center justify-center border border-solid leading-[1.6] text-base font-bold min-h-[46px] rounded ${
        activeButtonIndex === id ? 'border-primary text-primary' : 'border-transparent text-gray-400'
      }`}
    >
      {icons[id]}
      <span>{title}</span>
    </button>
  );
};

export default BenefitsButton;