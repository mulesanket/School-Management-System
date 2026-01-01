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
      try {
        data = text ? JSON.parse(text) : null;
      } catch {
        data = text;
      }

      if (!res.ok) {
        const msg = (data && data.message) ? data.message : text || res.statusText;
        throw new Error(msg);
      }

      // If backend returns a token, store it. Otherwise store returned user object.
      if (data && typeof data === "object" && "token" in data) {
        localStorage.setItem("authToken", data.token);
      } else if (data) {
        localStorage.setItem("parentUser", JSON.stringify(data));
      }

      // Redirect to dashboard (keep existing routing behavior if any)
      window.location.href = "/parent/dashboard";
    } catch (err: any) {
      setError(err?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2>Parent Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </div>

        <div>
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>

        {error && <div style={{ color: "crimson", marginTop: 8 }}>{error}</div>}
      </form>
    </div>
  );
}
