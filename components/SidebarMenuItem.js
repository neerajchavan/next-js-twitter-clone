import React from 'react';

const SideBarMenuItem = ({ text, Icon, active }) => {
  return (
    <div className="hoverEffect flex items-center justify-content-center text-gray-700 xl:justify-start text-lg space-x-3">
      <Icon className="h-6" />
      <span className={`${active && 'font-bold'} hidden xl:inline`}>
        {text}
      </span>
    </div>
  );
};

export default SideBarMenuItem;
