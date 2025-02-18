import React from 'react';

export default function Footer() {
  const date = new Date();
  return (
    <footer>
      <p>© {date.getFullYear()} | Emre Şahbaz</p>
    </footer>
  );
}
