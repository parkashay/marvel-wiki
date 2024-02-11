### run locally:
```
git clone <repo>
(node -version 18+)
npm i
cp .env.example .env
npm run dev -> server will start on localhost:5173
```

- visit deployed link : https://marvel-wiki-silk.vercel.app/

## MarvelWiki
 - A project that fetches data from the marvel api and shows the description and the comics that the character has      appeared in
- You can compare multiple characters based on the numbers of comics they have appeared in and view a graphical visualization of the comparision.

- Built using react and vite
- tanstack query for data fetching
- jotai for state management
- react-google-charts for chart visualization
- shadcn-ui
