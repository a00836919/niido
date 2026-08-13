-- Lista de espera de la landing (fase 0).
-- Cualquiera puede apuntarse; nadie puede leer la lista salvo desde el panel
-- de Supabase o con la llave de servicio.

create table if not exists public.waitlist (
  id          uuid primary key default gen_random_uuid(),
  correo      text not null,
  lado        text not null check (lado in ('persona', 'anfitrion')),
  nota        text,
  creado_en   timestamptz not null default now()
);

create unique index if not exists waitlist_correo_lado_idx
  on public.waitlist (correo, lado);

alter table public.waitlist enable row level security;

drop policy if exists "cualquiera se apunta" on public.waitlist;
create policy "cualquiera se apunta"
  on public.waitlist for insert
  to anon, authenticated
  with check (
    char_length(correo) between 5 and 255
    and correo like '%@%.%'
    and (nota is null or char_length(nota) <= 500)
  );
