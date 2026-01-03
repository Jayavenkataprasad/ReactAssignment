"use client";
import { useState, useMemo } from "react";
import styles from "./ProductLayout.module.css";
import Sidebar from "./Sidebar";
import FilterBar from "./FilterBar";
import ProductCard from "./ProductCard";

const ProductLayout = ({ products }) => {
  const [showFilter, setShowFilter] = useState(true);
  const [sortOption, setSortOption] = useState("RECOMMENDED");
  const [filters, setFilters] = useState({
    customizable: false,
    "IDEAL FOR": [],
    OCCASION: [],
    WORK: [],
    FABRIC: [],
    SEGMENT: [],
    "SUITABLE FOR": [],
    "RAW MATERIALS": [],
    PATTERN: [],
  });

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const updateFilter = (category, value, checked) => {
    setFilters((prev) => ({
      ...prev,
      [category]: checked
        ? [...prev[category], value]
        : prev[category].filter((item) => item !== value),
    }));
  };

  const toggleCustomizable = (checked) => {
    setFilters((prev) => ({ ...prev, customizable: checked }));
  };

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Simple demo filtering - map some filters to product categories
    if (filters["IDEAL FOR"].length > 0) {
      filtered = filtered.filter((product) => {
        const category = product.category.toLowerCase();
        return filters["IDEAL FOR"].some((ideal) => {
          if (ideal.toLowerCase().includes("men"))
            return category.includes("men");
          if (ideal.toLowerCase().includes("women"))
            return category.includes("women");
          if (
            ideal.toLowerCase().includes("baby") ||
            ideal.toLowerCase().includes("kids")
          )
            return (
              category.includes("jewelery") || category.includes("electronics")
            );
          return false;
        });
      });
    }

    // Add more filter logic as needed for other categories
    // For demo, we'll keep it simple

    // Sorting
    switch (sortOption) {
      case "NEWEST":
        filtered = [...filtered].sort((a, b) => b.id - a.id);
        break;
      case "POPULAR":
        // Assuming rating as popularity
        filtered = [...filtered].sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      case "PRICE_HIGH_LOW":
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case "PRICE_LOW_HIGH":
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      default:
        // RECOMMENDED - keep original order
        break;
    }

    return filtered;
  }, [products, filters, sortOption]);

  return (
    <div className={styles.container}>
      <FilterBar
        itemCount={filteredAndSortedProducts.length}
        showFilter={showFilter}
        onToggleFilter={toggleFilter}
        sortOption={sortOption}
        onSortChange={setSortOption}
      />
      <div className={styles.content}>
        {showFilter && (
          <Sidebar
            filters={filters}
            onFilterChange={updateFilter}
            onCustomizableChange={toggleCustomizable}
          />
        )}
        <div
          className={`${styles.productGrid} ${
            !showFilter ? styles.fullWidth : ""
          }`}
        >
          {filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
