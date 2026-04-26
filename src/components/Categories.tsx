import React from 'react';

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface CategoriesProps {
  categories: Category[];
  onCategoryClick?: (categoryId: string) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ categories, onCategoryClick }) => {
  return (
    <section id="categories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title">NOS CATÉGORIES</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer"
              onClick={() => onCategoryClick?.(category.id)}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 h-64">
                <img
                  src={category.image}
                  alt={category.description}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              
              <h3 className="text-lg font-bold text-black mb-1">{category.name}</h3>
              <p className="text-sm text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
