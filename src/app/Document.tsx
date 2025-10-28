import stylesUrl from "@/app/styles/index.css?url"

export const Document: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Tower OS</title>
      <link rel="stylesheet" href={stylesUrl} />
      <link rel="modulepreload" href="/src/client.tsx" />
    </head>
    <body className="bg-gray-50 text-gray-800 font-sans antialiased">
      <div id="root">{children}</div>
      <script type="module" src="/src/client.tsx"></script>
    </body>
  </html>
)
