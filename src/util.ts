export function getBreakpoint(breakpoint: string) {
  return parseFloat(
    getComputedStyle(document.body).getPropertyValue(breakpoint),
  );
}
