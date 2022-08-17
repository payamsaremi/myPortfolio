import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function YouTube({ url }) {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return <>{hasWindow && <ReactPlayer url={url} />}</>;
}
