function calc() {
  var no_sv = parseFloat(document.getElementById("no_sv").value);
  var mil_sv = parseFloat(document.getElementById("mil_sv").value);

  /* Calculation for Diesel Vehicles */
  var co2_for_given_mileage = 130 * mil_sv * 0.000001;
  var cost_for_given_mileage = 0.12 * mil_sv;

  /* Calculation for EV Vehicles */
  var ev_co2_for_given_mileage = 0 * mil_sv * 0.000001;
  var ev_cost_for_given_mileage = 0.05 * mil_sv;

  /* Saving Calculation */
  var co2_saving = co2_for_given_mileage - ev_co2_for_given_mileage;
  var cost_saving = cost_for_given_mileage - ev_cost_for_given_mileage;

  document.getElementById("result").value = cost_saving;
}
