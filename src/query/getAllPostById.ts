export const getAllPostByCategoryId = (categoryId: string) => {
  return `
        query {
            allPosts(filter: { category: { anyIn: "${categoryId}" } }) {
                title
                slug
                date
                excerpt
                coverImage {
                    url
                    alt
                }
                category {
                    id
                    name
                    slug
                }
                content {
                    blocks {
                        image {
                            url
                            title
                        }
                    }
                    links
                }
            }
        }
    `;
};
