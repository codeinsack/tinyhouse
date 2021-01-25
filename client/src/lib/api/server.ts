interface Body {
  query: string;
}

export const server = {
  fetch: async (body: Body): Promise<any> => {
    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return response.json();
  },
};
