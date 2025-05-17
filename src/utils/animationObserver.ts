export interface AnimationObserverOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function setupAnimationObserver(
  selector: string,
  animationClass: string,
  options: AnimationObserverOptions = {}
): () => void {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    once = true,
  } = options;

  const elements = document.querySelectorAll(selector);
  
  if (elements.length === 0) return () => {};

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          entry.target.classList.remove(animationClass);
        }
      });
    },
    {
      threshold,
      rootMargin,
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });

  // Return a cleanup function
  return () => {
    elements.forEach((element) => {
      observer.unobserve(element);
    });
  };
}