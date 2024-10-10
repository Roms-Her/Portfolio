export default class Control {
  
  static isValidEmail(email) {
    if (typeof email !== 'string') {
      throw new TypeError("L'email n'est pas valide");
    }
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return regexEmail.test(email);
  }
  
  static isValidInputText(text) {
    if (typeof text !== 'string' || text.trim().length === 0) {
      throw new TypeError("Veuillez remplir les champs obligatoires");
    }
    return true;
  }
}
