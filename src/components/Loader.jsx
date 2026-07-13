import React, { useEffect, useState } from "react";

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader-wrap ${hidden ? "hidden" : ""}`} id="loader">
      <div className="loader-text">AA</div>
    </div>
  );
}
