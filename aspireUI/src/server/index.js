export const api = {
  fetch: function () {
    return data;
  },

  post: function (limit) {
    if (limit) {
      data.expenses.isLimitSet = true;
      data.expenses.limit = limit;
    } else {
      data.expenses.isLimitSet = false;
      data.expenses.limit = 0;
    }
  },
};

const data = {
  acccountBalance: 3000,
  cardDetails: {
    nameOnCard: 'Mark Henry',
    cardNumber: '5647341124132020',
    validity: '12/20',
    cvv: '456',
  },
  expenses: {
    isLimitSet: false,
    currentExpenditure: 345,
    limit: 0,
  },
};
