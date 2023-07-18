import styles from "./Carousel.module.css";
import { useEffect, useRef, useState } from "react";

export interface CarouselProps {
  featuredPlayers: FeaturedPlayer[];
}

export interface FeaturedPlayer {
  img: string;
  twitch_id: string;
  name: string;
}

function Carousel({ featuredPlayers }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Detects the mouse position
  useEffect(() => {
    const handleWindowMouseMove = (event: MouseEvent) => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);

  // Scrolls the carousel based on mouse position
  useEffect(() => {
    let mousePercentage = 0;
    let scrollCoordX = 0;
    if (itemRef.current) {
      mousePercentage = coords.x / window.innerWidth - 0.2;
      scrollCoordX =
        mousePercentage *
        (itemRef.current.offsetWidth * featuredPlayers.length);
    }
    const carouselStartY = carouselRef.current?.offsetTop || 0;
    const carouselEndY =
      carouselStartY + (carouselRef.current?.offsetHeight || 0);
    if (coords.y >= carouselStartY && coords.y <= carouselEndY) {
      carouselRef.current?.scrollTo({ left: scrollCoordX });
    }
  }, [coords, featuredPlayers.length]);

  return (
    <div ref={carouselRef} className={styles.carousel}>
      {featuredPlayers.map((player) => {
        return (
          <div ref={itemRef} className={styles.container}>
            <div className={styles["image-container"]} key={player.twitch_id}>
              <img
                src={player.img}
                alt={`An image of ${player.name}`}
                className={styles.image}
              />
            </div>
            <div className={styles.info}>
              <p>{player.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Carousel;
