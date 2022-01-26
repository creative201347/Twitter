const SidebarLinks = ({ text, Icon, active }) => {
  return (
    <div
      className={`text-[#d9d9d9] flex items-center justify-center
    xl:justify-start text-lg space-x-3 hoverAnimation ${active && "font-bold"}`}
    >
      <Icon className="h-7 " />
      <span className="hidden xl:inline">{text}</span>
    </div>
  );
};

export default SidebarLinks;
