"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#0a0a0b", color: "#e8e6e1" }}>
        <main
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>Something went wrong</h1>
          <p style={{ maxWidth: "28rem", opacity: 0.75, marginBottom: "1.5rem" }}>
            The page hit an error. Hard-refresh the browser, or from the project folder run{" "}
            <code style={{ color: "#c9a227" }}>npm run dev:clean</code> (clears cache and restarts).
          </p>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              padding: "0.75rem 1.5rem",
              borderRadius: "9999px",
              border: "none",
              background: "#c9a227",
              color: "#0a0a0b",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
          {process.env.NODE_ENV === "development" && (
            <pre
              style={{
                marginTop: "2rem",
                maxWidth: "40rem",
                overflow: "auto",
                fontSize: "0.75rem",
                opacity: 0.5,
                textAlign: "left",
              }}
            >
              {error.message}
            </pre>
          )}
        </main>
      </body>
    </html>
  );
}
