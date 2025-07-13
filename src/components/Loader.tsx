import { SpiralGalaxy } from "react-loaderkit";

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <SpiralGalaxy size={80} color="#8B5CF6" speed={1.2} />
    </div>
  );
};

export default Loader;
