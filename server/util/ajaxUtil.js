const ajaxUtil = {
  getResponseFn: res => (data, error) => {
    if (error) {
      if (process.env.NODE_ENV === 'development') {
        console.trace(error);
      }

      if (typeof error === 'string') {
        error = {
          message: error,
        };
      }

      if (typeof error === 'object' && error.faultString !== undefined) {
        error = {
          message: error.faultString,
        }
      }

      res.status(500).json(error);
    } else {
      res.json(data);
    }
  },
};

module.exports = ajaxUtil;
