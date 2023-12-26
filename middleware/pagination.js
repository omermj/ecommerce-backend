/**
 * Middleware function for pagination.
 * @param {number} pageSize - The number of items per page.
 * @returns {function} - The middleware function.
 */

const pagination = (pageSize = 10) => {
  return (req, res, next) => {
    const pageNumber = parseInt(req.query.page) || 1;
    const startIdx = (pageNumber - 1) * pageSize;
    const endIdx = pageNumber * pageSize;

    res.locals.pagination = {
      page: pageNumber,
      pageSize,
      startIdx,
      endIdx,
      generateMeta: (data) => ({
        pagination: {
          page: pageNumber,
          pageSize,
          pageCount: Math.ceil(data.length / pageSize),
          total: data.length,
        },
      }),
    };

    return next();
  };
};

export default pagination;
