export default function ResultPage() {
  return (
    <div className="result-card">
      {/* <h2>
      {showResult.status === 'success'
        ? 'Success! Congratulations on Finding Falcon King Shah is mighty pleased.'
        : 'Failure! You are unable to Find Falcon King Shah'}
    </h2>
    <p>Time taken : {timeTaken}</p>
    <p>{showResult.status === 'success' && `Planet Found: ${showResult.result}`}</p> */}
      <button type="button" className="findBtn">
        Start Again
      </button>
    </div>
  );
}
