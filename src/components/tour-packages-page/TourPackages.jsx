import Card from "../../shared_components/Card";

const TourPackages = ({ packages }) => (
  <div className="max-w-7xl mx-auto mt-12 px-6 mb-16">
    <h2 className="text-4xl font-bold text-gray-900 mb-2">Our Packages</h2>
    <div className="w-[100px] h-1 bg-green-500 mb-10"></div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {packages.map((pkg, idx) => (
        <Card
          key={idx}
          image={pkg.image}
          title={pkg.title}
          duration={pkg.duration}
          months={pkg.months}
          difficulty={pkg.difficulty}
          description={pkg.description}
          country={pkg.country || "Nepal"}
        />
      ))}
    </div>
  </div>
);

export default TourPackages;
