export default class ApiService { // Assurez-vous d'utiliser "default" ici
  async post(url, data) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return response; // Assurez-vous de renvoyer la réponse
    } catch (error) {
      console.error("Erreur lors de l'appel à l'API:", error.toString());
      throw error; // Relancer l'erreur pour qu'elle soit attrapée par le catch
    }
  }
}