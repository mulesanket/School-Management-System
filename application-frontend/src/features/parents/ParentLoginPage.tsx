// application-frontend/src/features/parents/ParentLoginPage.tsx
import React, { useState } from "react";

const API_BASE = (import.meta.env.VITE_API_BASE_URL as string) || "";

export default function ParentLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/auth/parent/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const text = await res.text();
      let data: any = null;
      try { data = text ? JSON.parse(text) : null; } catch { data = text; }

      if (!res.ok) {
        const msg = (data && data.message) ? data.message : text || res.statusText;
        throw new Error(msg);
      }

      // If backend returns { token: "..." } save it. Otherwise save returned user object.
      if (data && typeof data === "object" && "token" in data) {
        localStorage.setItem("authToken", data.token);
      } else if (data) {
        localStorage.setItem("parentUser", JSON.stringify(data));
      }

      // simple redirect to dashboard
      window.location.href = "/parent/dashboard";
    } catch (err: any) {
      setError(err?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ maxWidth: 520, margin: "40px auto", padding: 12 }}>
      <h2>Parent Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 8 }}>
          <label>Email</label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>Password</label>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <button type="submit" disabled={loading}>
            {loading ? "Logging in…" : "Login"}
          </button>
        </div>

        {error && <div style={{ marginTop: 12, color: "crimson" }}>{error}</div>}
      </form>
    </main>
  );
}
