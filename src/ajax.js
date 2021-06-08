const apiHost = 'https://bakesaleforgood.com';

export default {
  async fetchInitialDeals() {
    try {
      let response = await fetch(`${apiHost}/api/deals`);
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  },
  async fetchDealDetails(dealId) {
    try {
      let response = await fetch(`${apiHost}/api/deals/${dealId}`);
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  },
  async fetchDealFromSearch(searchText) {
    try {
      let response = await fetch(
        `${apiHost}/api/deals?searchTerm=${searchText}`,
      );
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  },
};
