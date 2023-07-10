import { useRef, useState } from "react";
import { useGeoLocation } from "./useGeoLocation";

export default function App() {
  const { position, isLoading, error, getPosition } = useGeoLocation();
  const { lat, lng } = position;
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((count) => count + 1);
    getPosition();
  }

  // const countRef = useRef(0);

  return (
    <div>
      <button onClick={handleClick} disabled={isLoading}>
        Get my position
      </button>

      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS position:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
            // ref={countRef.current}
          >
            {lat}, {lng}
          </a>
        </p>
      )}

      <p>You requested position {count} times</p>
    </div>
  );
}
