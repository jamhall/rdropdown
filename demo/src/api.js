class Api {
    constructor() {
        this.countries = [
          { name: "Austria", code: "AT" },
          { name: "Belgium", code: "BE" },
          { name: "Bulgaria", code: "BG" },
          { name: "Croatia", code: "HR" },
          { name: "Cyprus", code: "CY" },
          { name: "Czech Republic", code: "CZ" },
          { name: "Denmark", code: "DK" },
          { name: "Estonia", code: "EE" },
          { name: "Finland", code: "FI" },
          { name: "France", code: "FR" },
          { name: "Germany", code: "DE" },
          { name: "Greece", code: "GR" },
          { name: "Hungary", code: "HU" },
          { name: "Ireland", code: "IE" },
          { name: "Italy", code: "IT"  },
          { name: 'Latvia', code: 'LV' },
          { name: "Lithuania", code: "LT" },
          { name: "Luxembourg", code: "LU"},
          { name: "Malta", code: "MT" },
          { name: "Netherlands", code: "NL" },
          { name: "Poland", code: "PL" },
          { name: "Portugal", code: "PT" },
          { name: "Romania", code: "RO" },
          { name: "Slovakia", code: "SK" },
          { name: "Slovenia", code: "SI" },
          { name: "Spain", code: "ES" },
          { name: "Sweden", code: "SE" },
          { name: "United Kingdom", code: "GB" },
      ];
    }
    getCountriesPromise() {
        return new Promise((resolve, reject) => {
            window.setTimeout(() => {
                resolve(this.countries)
            }, 500);
        });
    }

    getCountries() {
        return this.countries;
    }
}

export default Api;
