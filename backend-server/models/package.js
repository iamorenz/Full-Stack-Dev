class Package {
  /**
   * Creates a new package instance
   * @constructor
   * @param {string} title  The title of the package
   * @param {number} weight The weight of the package
   * @param {string} destination The destination of the package
   * @param {string} description The description of the package
   * @param {boolean} isAllocated Whether the package is allocated or not
   */
  constructor(title, weight, destination, description, isAllocated) {
    this.package_id = this.generatePackageId();
    this.package_title = this.validateTitle(title);
    this.package_weight = this.validateWeight(weight);
    this.package_destination = this.validateDestination(destination);
    this.package_description = this.validateDescription(description);
    this.package_createdAt = new Date().toLocaleString();
    this.package_isAllocated = isAllocated ? true : false;
  }

  /**
   * Generates a unique package id
   * @private
   * @returns {string} The generated package id
   */
  generatePackageId() {
    const initials = "GZ";
    const randomUp = this.generateRandomLetter(2);
    const randomNum = Math.floor(Math.random() * 900 + 100);
    return `P${randomUp}-${initials}-${randomNum}`;
  }

  /**
   * Generates a random string of uppercase letters
   * @private
   * @param {string} len The length of the random string
   * @returns {string} The generated random string of letters
   */
  generateRandomLetter(len) {
    return Array.from({ length: len }, () =>
      String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    ).join("");
  }

  /**
   * Check if the title is valid
   * @private
   * @param {string} title  The title to validate
   * @returns {string | boolean} The validated title or false if invalid
   */
  validateTitle(title) {
    const titleRegex = /^[a-zA-Z0-9]{3,15}$/;
    return titleRegex.test(title) ? title : false;
  }

  /**
   * Check if the weight is valid
   * @private
   * @param {string} weight The weight to validate
   * @returns {string | boolean} The validated weight or false if invalid
   */
  validateWeight(weight) {
    return weight > 0 ? weight : false;
  }

  /**
   * Check if the destination is valid
   * @private
   * @param {string} destination The destination to validate
   * @returns {string | boolean} The validated destination or false if invalid
   */
  validateDestination(destination) {
    const desRegex = /^[a-zA-Z0-9]{5,15}$/;
    return desRegex.test(destination) ? destination : false;
  }

  /**
   * Check if the description is valid
   * @param {string} description  The description to validate
   * @returns {string | boolean} The validated description or false if invalid
   */
  validateDescription(description) {
    if (
      typeof description === "string" &&
      description.length > 0 &&
      description.length <= 30
    ) {
      return description;
    } else if (typeof description === "string" && description.length === 0) {
      return "No description provided";
    } else {
      return false;
    }
  }
}

module.exports = Package;
