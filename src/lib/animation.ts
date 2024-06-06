export const animateFLeft = (delay?: number, x?: number, y?: number) => ({
  hidden: { x: x, y: y, opacity: 0 },
  visible: { x: 0, y: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

export const animateFRight = (delay: number) => ({
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

export const FadeIn = (delay: number) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, delay: delay } },
});
