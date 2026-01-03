"use client";
import { useState } from "react";
import styles from "./Sidebar.module.css";

const FilterItem = ({
  title,
  options,
  selectedFilters,
  onFilterChange,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleUnselectAll = () => {
    options.forEach((option) => {
      if (selectedFilters.includes(option)) {
        onFilterChange(title, option, false);
      }
    });
  };

  return (
    <div className={styles.filterItem}>
      <div className={styles.filterHeader} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.filterTitle}>{title}</span>
        <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
      </div>
      <div className={styles.filterSub}>
        {selectedFilters.length === 0
          ? "All"
          : `${selectedFilters.length} selected`}
      </div>
      {isOpen && (
        <div className={styles.filterOptions}>
          <button className={styles.unselectBtn} onClick={handleUnselectAll}>
            Unselect all
          </button>
          {options.map((option, index) => (
            <label key={index} className={styles.optionLabel}>
              <input
                type="checkbox"
                checked={selectedFilters.includes(option)}
                onChange={(e) =>
                  onFilterChange(title, option, e.target.checked)
                }
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = ({ filters, onFilterChange, onCustomizableChange }) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.customizable}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={filters.customizable}
            onChange={(e) => onCustomizableChange(e.target.checked)}
          />
          <span>CUSTOMIZABLE</span>
        </label>
      </div>

      <FilterItem
        title="IDEAL FOR"
        options={["Men", "Women", "Baby & Kids"]}
        selectedFilters={filters["IDEAL FOR"]}
        onFilterChange={onFilterChange}
      />
      <FilterItem
        title="OCCASION"
        options={["Casual", "Formal", "Party"]}
        selectedFilters={filters["OCCASION"]}
        onFilterChange={onFilterChange}
      />
      <FilterItem
        title="WORK"
        options={["Office", "Field", "Remote"]}
        selectedFilters={filters["WORK"]}
        onFilterChange={onFilterChange}
      />
      <FilterItem
        title="FABRIC"
        options={["Cotton", "Linen", "Wool"]}
        selectedFilters={filters["FABRIC"]}
        onFilterChange={onFilterChange}
      />
      <FilterItem
        title="SEGMENT"
        options={["Premium", "Regular", "Budget"]}
        selectedFilters={filters["SEGMENT"]}
        onFilterChange={onFilterChange}
      />
      <FilterItem
        title="SUITABLE FOR"
        options={["Summer", "Winter", "All season"]}
        selectedFilters={filters["SUITABLE FOR"]}
        onFilterChange={onFilterChange}
      />
      <FilterItem
        title="RAW MATERIALS"
        options={["Organic", "Recycled", "Synthetic"]}
        selectedFilters={filters["RAW MATERIALS"]}
        onFilterChange={onFilterChange}
      />
      <FilterItem
        title="PATTERN"
        options={["Plain", "Striped", "Checkered"]}
        selectedFilters={filters["PATTERN"]}
        onFilterChange={onFilterChange}
      />
    </aside>
  );
};

export default Sidebar;
