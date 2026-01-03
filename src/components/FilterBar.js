import styles from './FilterBar.module.css';

const FilterBar = ({ itemCount, showFilter, onToggleFilter, sortOption, onSortChange }) => {
  return (
    <div className={styles.filterBar}>
      <div className={styles.left}>
        <span className={styles.itemCount}>{itemCount} ITEMS</span>
        <button className={styles.toggleBtn} onClick={onToggleFilter}>
          {showFilter ? '< HIDE FILTER' : '> SHOW FILTER'}
        </button>
      </div>
      <div className={styles.right}>
        <div className={styles.sortDropdown}>
          <select value={sortOption} onChange={(e) => onSortChange(e.target.value)}>
            <option value="RECOMMENDED">RECOMMENDED</option>
            <option value="NEWEST">NEWEST FIRST</option>
            <option value="POPULAR">POPULAR</option>
            <option value="PRICE_HIGH_LOW">PRICE: HIGH TO LOW</option>
            <option value="PRICE_LOW_HIGH">PRICE: LOW TO HIGH</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
