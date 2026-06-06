function Tours() {
  return (
    <section className="tours">
      <h2>Popular Tours</h2>

      <div className="tour-grid">
        <div className="tour-card">
          <h3>European Explorer</h3>
          <p>10 Days • Paris, Rome & London</p>
          <span>$2,499</span>
        </div>

        <div className="tour-card">
          <h3>Dubai Luxury Tour</h3>
          <p>7 Days • Desert Safari & City Tour</p>
          <span>$1,899</span>
        </div>

        <div className="tour-card">
          <h3>UK Adventure</h3>
          <p>5 Days • London Highlights</p>
          <span>$1,299</span>
        </div>
      </div>
    </section>
  );
}

export default Tours;