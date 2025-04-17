"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { jwtDecode } from 'jwt-decode'; //  Install this: npm install jwt-decode

interface DecodedToken {
  iss?: string;
  sub?: string;
  aud?: string;
  exp?: number;
  iat?: number;
  email?: string;
  //  Add other properties you expect in your token
}

export default function AuthCodeError() {
  const [decodedToken, setDecodedToken] = useState<DecodedToken | null>(null);

  useEffect(() => {
    const hash = window.location.hash; // Get the fragment
    const params = new URLSearchParams(hash.substring(1)); // Remove '#' and parse

    const accessToken = params.get('access_token');

    if (accessToken) {
      try {
        const decoded = jwtDecode(accessToken) as DecodedToken;
        setDecodedToken(decoded);
      } catch (error) {
        console.error('Error decoding access token:', error);
        //  Handle the error (e.g., show a generic error message)
      }
    }
  }, []);

  return (
    <div className="max-w-md w-full px-6 py-8 rounded-lg">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Authentication Error
        </h1>
        {decodedToken ? (
          <div>
            <p className="mb-6 text-white-600">
              We encountered an issue during authentication.
            </p>
            <p className="mb-2 text-white-600">
              User Email: {decodedToken.email || 'N/A'}
            </p>
            {/* Display other user info if available */}
          </div>
        ) : (
          <div className="mb-6 text-white-600">
            <p>There was a problem with the authentication process.</p>
            <p className="mt-2">Please try signing in again.</p>
          </div>
        )}
        <Link
          href="/sign-in"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Return to Sign In
        </Link>
      </div>
    </div>
  );
}