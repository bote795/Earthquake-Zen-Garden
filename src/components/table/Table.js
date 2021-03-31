import React, { useState } from "react";
import { format } from "date-fns";
import { TIME_FORMAT } from "../../constants/date";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Table.css";
const Row = ({ id, title, mag, time }) => (
  <tr>
    <td>
      <Link to={`/earthquake/${id}`}>{title}</Link>
    </td>
    <td>{mag}</td>
    <td>{format(time, TIME_FORMAT)}</td>
  </tr>
);
Row.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  mag: PropTypes.number,
  time: PropTypes.instanceOf(Date),
};

export default function Table({ rowsInfo }) {
  const [data, setData] = useState([]);
  const [toggleObj, setToggleObj] = useState({
    title: false,
    mag: false,
    time: false,
  });

  function compareBy(key, toggle) {
    return function (a, b) {
      if (a[key] < b[key]) return !toggle ? -1 : 1;
      if (a[key] > b[key]) return !toggle ? 1 : -1;
      return 0;
    };
  }

  const sortBy = (key) => {
    let arrayCopy = [...rowsInfo];
    let toggle = toggleObj[key];
    arrayCopy.sort(compareBy(key, toggle));
    setToggleObj({ ...toggleObj, [key]: !toggle });
    setData(arrayCopy);
  };
  let temp = rowsInfo;
  if (data.length > 0) {
    temp = data;
  }
  const rows = temp.map((rowData) => <Row key={rowData.id} {...rowData} />);
  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => sortBy("title")}>Title</th>
          <th onClick={() => sortBy("mag")}>Magnitude</th>
          <th onClick={() => sortBy("time")}>Time</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
Table.propTypes = {
  rowsInfo: PropTypes.array,
};
