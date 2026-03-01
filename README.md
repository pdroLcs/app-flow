# app-flow

API simples desenvolvida em TypeScript e Node.js para listar episódios de podcasts.

O objetivo do projeto é demonstrar um fluxo básico de trabalho com servidor HTTP nativo, organização em camadas (controllers, services, repositories) e uso de enums para status/headers.

## Estrutura

- `src/app.ts` – ponto de entrada, roteamento básico
- `src/server.ts` – criação do servidor HTTP
- `src/controllers` – lógica que lê requisições e envia respostas
- `src/services` – regras de negócio e formatação de resposta
- `src/repositories` – acesso a dados (arquivo JSON)
- `src/models` – definições de tipos/interfaces
- `src/utils` – enums e utilitários gerais

O projeto usa TypeScript com compilação para `dist/` via `tsc`.

## Scripts

```bash
npm run dist   # transpila para JavaScript em dist/
npm run watch   # observa alterações e recompila automaticamente
npm run dev     # executa o servidor usando ts-node (requer dependências de desenvolvimento)
```

## Uso

Defina a variável de ambiente `PORT` e execute o servidor. Em seguida, faça requisições GET:

- `/api/list` – retorna todos os episódios
- `/api/episode?p=<nome>` – filtra pelo nome do podcast (consulta via query string)

As respostas vêm em JSON com o campo `statusCode` apropriado e o corpo contendo os dados.

## Contribuição

Projeto educativo; fique à vontade para abrir issues ou enviar PRs com melhorias.
