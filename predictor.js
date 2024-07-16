
let PredictionList = [

  {
    "Prediction": "Mare's promotion to Executive Producer",
    "Reason": "Mare is the highest non-administrator serving at the Club Penguin Armies league. She is not affiliated and has taken up high positions at CPA and CPAJ. Therefore, it is not unlikely that she is the next Executive Producer.",
    "PredictedFor": "After Legends Cup XIV",
    "PredictedOn": "July 16, 2024",
    "Predictor": "Fun X Time",
    "Status": "Waiting to be proved"
  },

  {
    "Prediction": "Mchappy retires from Club Penguin Armies",
    "Reason": "Mchappy has been repeatedly hinting at his leave. He has stated this in multiple posts, and also seems to be fulfilling his greatest desires to leave hallmarks on his time as Chief Executive Producer. Legends Cup XIV may have been a double-elimination style tournament for this reason.",
    "PredictedFor": "After Legends Cup XIV",
    "PredictedOn": "July 16, 2024",
    "Predictor": "Fun X Time",
    "Status": "Waiting to be proved"
  }

];

function ShowPredictions(Predictions) {
  let Count = Predictions.length;
  Predictions.forEach(Prediction => {
    document.querySelector(`#PredictorList`).innerHTML += (`
      <tr>
        <td class="PredictionID">${Count}</td>
        <td
          class="Prediction"
          title="${Prediction.Reason}"
          onclick='alert("${Prediction.Reason}")'
        >
        ${Prediction.Prediction}
        </td>
        <td class="PredictedOn">${Prediction.PredictedOn}</td>
        <td class="Predictor">${Prediction.Predictor}</td>
        <td class="Status">${Prediction.Status}</td>
      </tr>
    `);
    Count -= 1;
  });
};

ShowPredictions(PredictionList);