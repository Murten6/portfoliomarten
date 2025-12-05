"use client";
import { useEffect } from "react";

export default function MailtoRedirect() {
  useEffect(() => {
    window.location.href = "mailto:martenfleuren@gmail.com";
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-900 text-white">
      <p>Opening your email client…</p>
    </div>
  );
}
