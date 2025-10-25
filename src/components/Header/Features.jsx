import { Pencil, Layers, Files } from "lucide-react";

const FeatureCard = ({ Icon, title, description }) => (
  <div className="flex flex-col items-center p-6 text-center">
    <div className="text-blue-600 mb-4">
      <Icon size={32} strokeWidth={2.5} />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2 tracking-tight">
      {title}
    </h3>
    <p className="text-sm text-gray-500 max-w-xs">{description}</p>
  </div>
);
export default FeatureCard;
