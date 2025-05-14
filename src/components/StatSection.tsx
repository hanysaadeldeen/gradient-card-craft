
import StatCard from "./StatCard";

const StatSection = () => {
  return (
    <div className="w-full bg-[#101014] py-16 px-4">
      <style jsx="true">{`
        .gradient-border-yellow {
          background: linear-gradient(60deg, rgba(240, 228, 58, 0.5), rgba(240, 228, 58, 0.1), rgba(240, 228, 58, 0.5));
          background-size: 200% 100%;
          animation: gradient-shift 4s ease infinite;
        }
        
        .gradient-border-purple {
          background: linear-gradient(60deg, rgba(168, 152, 255, 0.5), rgba(168, 152, 255, 0.1), rgba(168, 152, 255, 0.5));
          background-size: 200% 100%;
          animation: gradient-shift 4s ease infinite;
        }
        
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <StatCard value="+120" label="Solutions" color="yellow" />
          <StatCard value="+200" label="Clients" color="purple" />
          <StatCard value="+10" label="Years Of Experience" color="yellow" />
          <StatCard value="+144" label="Projects" color="purple" />
          <StatCard value="+30" label="Team" color="yellow" />
        </div>
      </div>
    </div>
  );
};

export default StatSection;
