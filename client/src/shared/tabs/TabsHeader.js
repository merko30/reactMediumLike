import React from "react";

const TabsHeader = ({ tabs, active, setActive }) => {
  return (
    <ul className="flex items-center bg-gray-100 h-12">
      {tabs.map(tab => {
        const {
          props: { title },
          type: { name }
        } = tab;
        const isActive = active === tab.props.title;
        const bg = isActive ? "bg-green-300" : "";
        const text = isActive ? "text-green-700" : " text-gray-500";
        return (
          name === "Tab" && (
            <li
              key={title}
              style={{ letterSpacing: "0.3em" }}
              className={`${bg} ${text} list-none uppercase flex-1 text-center h-full flex justify-center items-center cursor-pointer`}
              onClick={() => setActive(title)}
            >
              {title}
            </li>
          )
        );
      })}
    </ul>
  );
};

export default TabsHeader;