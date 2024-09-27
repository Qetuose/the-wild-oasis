import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "By name (A-Z)" },
          { value: "name-desc", label: "By name (Z-A)" },
          { value: "regularPrice-asc", label: "By price (low firts)" },
          { value: "regularPrice-desc", label: "By price (hight firts)" },
          { value: "maxCapacity-asc", label: "By capacity (low firts)" },
          { value: "maxCapacity-desc", label: "By capacity (hight firts)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
