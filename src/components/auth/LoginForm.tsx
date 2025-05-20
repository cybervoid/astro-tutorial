import { useState } from 'preact/hooks';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${import.meta.env.PUBLIC_AUTH_API_URL}${import.meta.env.PUBLIC_AUTH_LOGIN_ENDPOINT}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      
      // Store the token in localStorage
      localStorage.setItem('authToken', data.token);
      
      // Redirect to dashboard
      window.location.href = '/dashboard';
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div class="login-form">
      <sl-card class="card-overview">
        <div slot="header">
          <h2>Login</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <sl-input
            type="email"
            label="Email"
            placeholder="Enter your email"
            value={email}
            onInput={(e: any) => setEmail(e.target.value)}
            required
          />

          <sl-input
            type="password"
            label="Password"
            placeholder="Enter your password"
            value={password}
            onInput={(e: any) => setPassword(e.target.value)}
            required
            class="mt-4"
          />

          {error && (
            <sl-alert variant="danger" open class="mt-4">
              <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
              {error}
            </sl-alert>
          )}

          <div class="mt-4">
            <sl-button type="submit" variant="primary" loading={loading}>
              Login
            </sl-button>
          </div>
        </form>

        <div slot="footer">
          Don't have an account? <a href="/auth/register">Register here now</a>
        </div>
      </sl-card>
    </div>
  );
} 