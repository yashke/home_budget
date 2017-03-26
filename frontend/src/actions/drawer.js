export const TOGGLE_DRAWER = "TOGGLE_DRAWER";
export const CLOSE_DRAWER = "CLOSE_DRAWER";

export function toggleDrawer() {
  return {
    type: TOGGLE_DRAWER
  }
}

export function closeDrawer() {
  return {
    type: CLOSE_DRAWER
  }
}
