function StatisticCard({ number, title }) {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="stat-card">

        <h2>{number}</h2>

        <p>{title}</p>

      </div>
    </div>
  );
}

export default StatisticCard;