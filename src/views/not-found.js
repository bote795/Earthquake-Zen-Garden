import React, { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 - Not Found";
  }, []);
  return (
    <div>
      <p>Not Found!</p>
    </div>
  );
}
