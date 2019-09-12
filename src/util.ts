export function assertNever(v: never): void {
  // needed for type checker
}


export function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise(resolve => {
    const i = new Image();
    i.onload = () => resolve(i);
    i.src = url;
  });
}
