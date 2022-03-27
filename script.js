function calc() {
  var no_sv = parseFloat(document.getElementById("no_sv").value);
  var mil_sv = parseFloat(document.getElementById("mil_sv").value);
  var no_mv = parseFloat(document.getElementById("no_mv").value);
  var mil_mv = parseFloat(document.getElementById("mil_mv").value);
  var no_lv = parseFloat(document.getElementById("no_lv").value);
  var mil_lv = parseFloat(document.getElementById("mil_lv").value);

  let sv_co2_saving = 0;
  let sv_cost_saving = 0;
  let mv_co2_saving = 0;
  let mv_cost_saving = 0;
  let lv_co2_saving = 0;
  let lv_cost_saving = 0;

  if (no_sv >= 1) {
    /* Calculation for Diesel Vehicles */
    var sv_co2_for_given_mileage = 130 * mil_sv * 0.000001;
    var sv_cost_for_given_mileage = 0.12 * mil_sv;

    /* Calculation for EV Vehicles */
    var sv_ev_co2_for_given_mileage = 0 * mil_sv * 0.000001;
    var sv_ev_cost_for_given_mileage = 0.05 * mil_sv;

    /* Saving Calculation */
    sv_co2_saving = sv_co2_for_given_mileage - sv_ev_co2_for_given_mileage;
    sv_cost_saving = sv_cost_for_given_mileage - sv_ev_cost_for_given_mileage;
  } else if (no_mv >= 1) {
    /* Calculation for Diesel Vehicles */
    var mv_co2_for_given_mileage = 290 * mil_mv * 0.000001;
    var mv_cost_for_given_mileage = 0.18 * mil_mv;

    /* Calculation for EV Vehicles */
    var mv_ev_co2_for_given_mileage = 0 * mil_mv * 0.000001;
    var mv_ev_cost_for_given_mileage = 0.09 * mil_mv;

    /* Saving Calculation */
    mv_co2_saving = mv_co2_for_given_mileage - mv_ev_co2_for_given_mileage;
    mv_cost_saving = mv_cost_for_given_mileage - mv_ev_cost_for_given_mileage;
  } else if (no_lv >= 1) {
    /* Calculation for Diesel Vehicles */
    var lv_co2_for_given_mileage = 400 * mil_lv * 0.000001;
    var lv_cost_for_given_mileage = 0.22 * mil_lv;

    /* Calculation for EV Vehicles */
    var lv_ev_co2_for_given_mileage = 0 * mil_lv * 0.000001;
    var lv_ev_cost_for_given_mileage = 0.12 * mil_lv;

    /* Saving Calculation */
    lv_co2_saving = lv_co2_for_given_mileage - lv_ev_co2_for_given_mileage;
    lv_cost_saving = lv_cost_for_given_mileage - lv_ev_cost_for_given_mileage;
  }

  var total_sv_co2 = no_sv * sv_co2_saving;
  var total_sv_pound = no_sv * sv_cost_saving;

  var total_mv_co2 = no_mv * mv_co2_saving;
  var total_mv_pound = no_mv * mv_cost_saving;

  var total_lv_co2 = no_lv * lv_co2_saving;
  var total_lv_pound = no_lv * lv_cost_saving;

  var final_co2_saving = total_sv_co2 + total_mv_co2 + total_lv_co2;
  var final_cost_saving = total_sv_pound + total_mv_pound + total_lv_pound;
  document.getElementById("co2").value = final_co2_saving;
  document.getElementById("cost").value = final_cost_saving;
}
