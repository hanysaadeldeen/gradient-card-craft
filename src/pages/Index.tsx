
import StatSection from "@/components/StatSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#101014] text-white">
      <header className="py-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Our Achievements</h1>
        <p className="mt-2 text-gray-400">Delivering exceptional results for over a decade</p>
      </header>
      
      <main>
        <StatSection />
      </main>
    </div>
  );
};

export default Index;
