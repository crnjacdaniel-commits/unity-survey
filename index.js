const survey = new Survey.Model(json);
  survey.onComplete.add(async (sender) => {
    const data = sender.data; // Antworten als Objekt
    console.log("Antworten:", data);

    // URL deiner Apps Script Web-App
    const API = "https://script.google.com/macros/s/AKfycbxtQpl6PehXIhyD_iM4FpiRyr7YBYhWVzZjnbjWnQpb_ewFwvBjwi07clq-NqbQJ7hhIA/exec";

    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const result = await res.text();
      alert(result.ok ? "Antwort gespeichert!" : "Fehler beim Speichern");
    } catch (err) {
      console.error(err);
      alert("Fehler beim Senden");
    }
  });
$("#surveyElement").Survey({ model: survey });
