import React from 'react';

const AuthForm = ({
    email = '',
    password = '',
    loading,
    setEmail = (f) => f,
    setPassword,
    handleSubmit,
    showPasswordInput = false,
    hideEmailInput = false
}) => (
    <form onSubmit={handleSubmit}>
        {!hideEmailInput && (
            <section>
                <label>Email Address</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    disabled={loading}
                />
            </section>
        )}

        {showPasswordInput && (
            <section>
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter new password"
                    disabled={loading}
                />
            </section>
        )}

        <button disabled={loading}>
            Submit
        </button>
    </form>
);

export default AuthForm;
