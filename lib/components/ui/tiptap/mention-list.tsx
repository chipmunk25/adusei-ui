import { SuggestionItem } from "./suggestion";

const MentionList: React.FC<{
  items: SuggestionItem[];
  command: (item: SuggestionItem) => void;
}> = ({ items, command }) => {
  return (
    <div className="suggestions">
      {items.map((item, index) => (
        <button
          key={index}
          onClick={() => command(item)}
          className="flex items-center p-2 cursor-pointer hover:bg-gray-700"
        >
          <img
            src={item.image}
            alt={item.label}
            className="w-10 h-10 mr-3 rounded-full"
            onError={(e) => {
              e.currentTarget.src = `https://avatar.iran.liara.run/username?username=${item.label}`;
            }}
          />
          <div>
            <div className="font-semibold">{item.label}</div>
            <div className="text-sm">{item.email}</div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default MentionList;
