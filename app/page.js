export default function Home() {
  return (
    <main style={{ padding: 30, fontFamily: "Arial" }}>
      <h1>Car Rental – TBA</h1>
      <p>Reliable. Affordable. Simple car rentals.</p>

      <section>
        <h2>Available Vehicle</h2>
        <div style={{ border: "1px solid #ccc", padding: 20, maxWidth: 400 }}>
          <h3>2008 BMW 528xi</h3>
          <p>Luxury sedan – clean & reliable</p>
          <p><strong>$75 / day</strong></p>
          <button>Book Now</button>
        </div>
      </section>

      <section style={{ marginTop: 40 }}>
        <h2>How It Works</h2>
        <ol>
          <li>Select your car</li>
          <li>Choose rental dates</li>
          <li>Confirm booking</li>
        </ol>
      </section>

      <footer style={{ marginTop: 60 }}>
        <p>© 2025 Car Rental – TBA</p>
      </footer>
    </main>
  );
}
