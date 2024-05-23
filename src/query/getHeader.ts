export const getHeaderData = () => {
  return `
      query {
        allCategories {
          name
          id
          slug
        }
      }
    `;
};
