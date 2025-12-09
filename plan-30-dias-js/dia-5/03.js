/* 🟦 Día 5 — Ejercicio 3 (DEFINITIVO)
📌 Nombre
normalizeEmails
📌 Consigna profesional
Implementá normalizeEmails(emails) que:
    1. Reciba un array de emails.
    2. Devuelva todos los mails en minúscula.
    3. No muta el array original.
🟩 Console.log obligatorios

⭐ Método “pro” sugerido después:
    • map + trim */

// las dos las hice solo
function normalizeEmails(emails) {

    return emails.map((ele) => ele.trim().toLowerCase())
}


/* function normalizeEmails(emails) {
    let normalized = []
    for (let i = 0; i < emails.length; i++) {
        normalized.push(emails[i].toLowerCase())
    }
    return normalized
} */
console.log(normalizeEmails([" NICO@MAIL.COM", "Test@GMAIL.com"]));
// → ["nico@mail.com", "test@gmail.com"]