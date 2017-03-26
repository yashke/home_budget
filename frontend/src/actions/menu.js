export const LOAD_MENU = "LOAD_MENU";
export const GO_TO_PAGE = "GO_TO_PAGE";

export function loadMenu() {
  return {
    type: LOAD_MENU
  }
}

export function goToPage(page) {
  return {
    type: GO_TO_PAGE,
    page: page
  }
}
