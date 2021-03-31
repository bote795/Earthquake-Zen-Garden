import React from "react";
import PropTypes from "prop-types";
import styles from "./DisplayKeys.css";

function Capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export default function DisplayKeys({ keys, values }) {
  return (
    <dl>
      {keys.map((key) => {
        return (
          <React.Fragment key={key}>
            <dt>
              <b>{Capitalize(key)}</b>
            </dt>
            <dd>{values[key]}</dd>
          </React.Fragment>
        );
      })}
    </dl>
  );
}
DisplayKeys.propTypes = {
  keys: PropTypes.array.isRequired,
  values: PropTypes.object.isRequired,
};
