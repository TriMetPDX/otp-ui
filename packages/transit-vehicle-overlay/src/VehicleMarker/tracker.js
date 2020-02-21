import React from "react";
import PropTypes from "prop-types";
import { transitVehicleType } from "@opentripplanner/core-utils/src/types";
import { PopupStyle } from "./styled";

/**
 * presentational component for tracking button on marker popup
 */
function VehicleTracker(props) {
  const { vehicle, tracked, setTracked } = props;

  function handleClick() {
    if (tracked) {
      setTracked(null, true);
    } else {
      setTracked(vehicle.blockId || vehicle.tripId);
    }
  }

  const text = tracked ? "Stop Tracking" : "Track Vehicle";
  const cls = tracked ? "active" : "";
  return (
    <PopupStyle.Button onClick={handleClick} className={cls}>
      {text}
    </PopupStyle.Button>
  );
}

VehicleTracker.defaultProps = {
  vehicle: null,
  tracked: false
};

VehicleTracker.propTypes = {
  vehicle: transitVehicleType,
  tracked: PropTypes.bool,
  setTracked: PropTypes.func.isRequired
};

export default VehicleTracker;
