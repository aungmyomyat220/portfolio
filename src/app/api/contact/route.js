export async function POST(request) {
 const base = process.env.API_BASE_URL;
 const key = process.env.API_KEY;
 if (!base || !key) return Response.json({error: 'Contact service is not configured'}, {status: 503});
 try {
  const {email, name, content} = await request.json();
  if (typeof email !== 'string' || typeof name !== 'string' || typeof content !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || !name.trim() || name.length > 100 || !content.trim() || content.length > 5000) return Response.json({error: 'Invalid message'}, {status: 400});
  const response = await fetch(`${base.replace(/\/$/, '')}/portfolio_mailservice`, {method: 'POST', headers: {'Content-Type': 'application/json', 'API_KEY': key}, body: JSON.stringify({email, name, content}), signal: AbortSignal.timeout(15000)});
  if (!response.ok) return Response.json({error: 'Delivery failed'}, {status: 502});
  const result = await response.json();
  if (result.statusCode !== 200) return Response.json({error: 'Delivery failed'}, {status: 502});
  return Response.json({ok: true});
 } catch {return Response.json({error: 'Delivery failed'}, {status: 502});}
}
