// table.tsx
import styles from '../component/table.module.css';
// table.tsx
import React from 'react';

const data = [
  { id: 1, name: 'Super Fast', value: 250 },
  { id: 2, name: 'Highper fast', value: 150 },
];

const TableComponent: React.FC = () => {
  return (
    <div>
      <h2>Ranking</h2>
      <table className={styles.table}>
        <thead>
          <tr className={styles.row}>
            <th className={styles.header}>ID</th>
            <th className={styles.header}>Name</th>
            <th className={styles.header}>Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id} className={styles.row}>
              <td className={styles.cell}>{item.id}</td>
              <td className={styles.cell}>{item.name}</td>
              <td className={styles.cell}>${item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
};

export default TableComponent;
