import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const response = await fetch('https://vp2auyrgy2.execute-api.us-east-2.amazonaws.com/prod/onboarding', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        themeId: 'ONBT42CQ3223226G5MHSFMQ68M68ZD',
        redirectUrl: 'https://rectanglehealth.com',
        locale: 'en-US'
      })
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to process request' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
} 