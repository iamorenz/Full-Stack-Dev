class Driver {
  /**
   * Creates a new driver instance
   * @constructor
   * @param {string} name The name of the driver
   * @param {string} dep  The department of the driver
   * @param {string} lic  The license of the driver
   * @param {boolean} isActive Whether the driver is active or not
   */
  constructor(name, dep, lic, isActive) {
    this.driver_id = this.generateDriverId();
    this.driver_name = this.validateName(name);
    this.driver_department = this.validateDepartment(dep);
    this.driver_license = this.validateLicense(lic);
    this.driver_isActive = isActive ? true : false;
    this.driver_createdAt = new Date().toLocaleString();
  }

  /**
   * Generates a unique driver id
   * @private
   * @returns {string} The generated driver id
   */
  generateDriverId() {
    const stuID = "32";
    const randomDigit = Math.floor(Math.random() * 90 + 10);
    const randomLetter = this.generateRandomLetter(3);
    return `D${stuID}-${randomDigit}-${randomLetter}`;
  }

  /**
   * Generates a random string of uppercase letters
   * @private
   * @param {number} len The length of the random string
   * @returns {string} The generated random string of letters
   */
  generateRandomLetter(len) {
    return Array.from({ length: len }, () =>
      String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    ).join("");
  }

  /**
   * Check if the driver's name is valid
   * @private
   * @param {string} name The name to check
   * @returns {string | boolean} The validated name or false if invalid
   */
  validateName(name) {
    return typeof name === "string" && name.length >= 3 && name.length <= 20
      ? name
      : false;
  }

  /**
   * Check if the driver's department is valid
   * @private
   * @param {string} dep The department to check
   * @returns {string | boolean} The validated department or false if invalid
   */
  validateDepartment(dep) {
    const departments = ["Food", "Furniture", "Electronic"];
    return departments.includes(dep) ? dep : false;
  }

  /**
   * Check if the driver's license is valid
   * @private
   * @param {string} lic The license to check
   * @returns {string | boolean} The validated license or false if invalid
   */
  validateLicense(lic) {
    const licRegex = /^[a-zA-Z0-9]{5}$/;
    return licRegex.test(lic) ? lic : false;
  }
}

module.exports = Driver;
