export async function sendMailHook(emailData) {
 const response = await fetch('/api/contact', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(emailData)});
 if (!response.ok) throw new Error('Message delivery failed');
 return response.json();
}
