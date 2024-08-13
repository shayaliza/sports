// CategoryCard Component
interface CategoryCardProps {
  imageSrc: string;
  label: string;
}

function CategoryCard({ imageSrc, label }: CategoryCardProps) {
  return (
    <div className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="p-4 rounded-t-lg" src={imageSrc} alt={label} />
      <div className="px-4 py-2">
        <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white text-center">
          {label}
        </h5>
      </div>
    </div>
  );
}

// CategoryRow Component
function CategoryRow() {
  const categories: CategoryCardProps[] = [
    { imageSrc: "https://via.placeholder.com/150", label: "Category 1" },
    { imageSrc: "https://via.placeholder.com/150", label: "Category 2" },
    { imageSrc: "https://via.placeholder.com/150", label: "Category 3" },
    { imageSrc: "https://via.placeholder.com/150", label: "Category 4" },
    { imageSrc: "https://via.placeholder.com/150", label: "Category 5" },
    { imageSrc: "https://via.placeholder.com/150", label: "Category 6" },
  ];

  return (
    <div className="flex gap-4 overflow-x-auto py-4">
      {categories.map((category, index) => (
        <CategoryCard
          key={index}
          imageSrc={category.imageSrc}
          label={category.label}
        />
      ))}
    </div>
  );
}

export default CategoryRow;
