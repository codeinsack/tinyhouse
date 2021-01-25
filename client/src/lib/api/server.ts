interface Body {
  query: string;
}

export const server = {
  fetch: async <TData = any>(body: Body) => {
    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return response.json() as Promise<{ data: TData }>;
  },
};
