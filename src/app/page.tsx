export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        color: "#111111",
        padding: "80px 20px",
        fontFamily: "Arial"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto"
        }}
      >
        <p
          style={{
            letterSpacing: "4px",
            fontSize: "12px",
            color: "#666",
            marginBottom: "20px"
          }}
        >
          PREMIUM AI ECOMMERCE
        </p>

        <h1
          style={{
            fontSize: "72px",
            lineHeight: "1",
            maxWidth: "900px",
            fontWeight: "700"
          }}
        >
          Le futur du commerce intelligent.
        </h1>

        <p
          style={{
            marginTop: "30px",
            fontSize: "20px",
            maxWidth: "700px",
            lineHeight: "1.7",
            color: "#555"
          }}
        >
          Une expérience e-commerce ultra premium
          pensée pour la Côte d’Ivoire et le monde.
        </p>

        <button
          style={{
            marginTop: "40px",
            background: "#111",
            color: "#fff",
            border: "none",
            padding: "18px 34px",
            borderRadius: "999px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Explorer la boutique
        </button>
      </div>
    </main>
  );
}