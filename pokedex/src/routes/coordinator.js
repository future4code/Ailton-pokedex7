export const goToHomePage = (navigate) => {
  navigate("/");
};
export const goToDetailPage = (navigate, id) => {
  navigate(`/detailPage/${id}`);
};
export const goToPokedex = (navigate) => {
  navigate("/pokedex");
};
export const goToBattlePage = (navigate) => {
  navigate("/battlePage");
};
export const goToErrorPage = (navigate) => {
  navigate("/errorPage");
};
export const goBack = (navigate) => {
  navigate(-1);
};