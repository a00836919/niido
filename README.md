# Niido

Plataforma para descubrir qué hacer en Guatemala. Los negocios pequeños publican sus
actividades; los miembros las reservan con una membresía mensual.

Estado actual: **fase 0** — landing pública con lista de espera. Ver [PLAN.md](PLAN.md).

## Correr en local

```bash
npm install
cp .env.example .env.local   # y llenar las variables
npm run dev
```

La landing funciona sin Supabase, pero el formulario devuelve un error hasta que se
configuren las variables.

## Conectar Supabase

1. Crear un proyecto en [supabase.com](https://supabase.com).
2. Correr `supabase/migrations/0001_waitlist.sql` en el SQL Editor.
3. Copiar Project URL y la llave `anon` a `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
```

La tabla `waitlist` solo permite INSERT por RLS: nadie puede leer la lista con la llave
pública. Los correos se consultan desde el Table Editor de Supabase.

## Desplegar en Vercel

1. Subir el repo a GitHub e importarlo en Vercel.
2. Agregar las dos variables de entorno en Settings → Environment Variables.
3. Deploy. Cada push a `main` republica.

## Estructura

```
src/app/page.tsx        la landing completa
src/app/actions.ts      server action que guarda en la lista de espera
src/components/         Rodillo (planes que van pasando), Lista (formulario)
src/lib/planes.ts       planes de muestra del hero
supabase/migrations/    SQL versionado
```
