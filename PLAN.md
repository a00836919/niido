# Niido — Plan de producto y MVP

> Plataforma para descubrir qué hacer en Guatemala. Los pequeños negocios y creadores
> publican sus actividades (clases de baile, pintura, escultura, asados, talleres);
> la gente sin planes entra y encuentra algo que hacer esta semana.

---

## 1. Problema y usuarios

**Dolor del usuario final (el que busca plan):** "no hay nada que hacer". En realidad sí hay,
pero está disperso en Instagram, WhatsApp y el boca a boca. No hay un lugar donde ver
*qué pasa este fin de semana cerca de mí*.

**Dolor del oferente (negocio pequeño):** tiene la actividad y el espacio, pero no tiene
marketing, ni presupuesto de ads, ni forma de llenar cupos. Publica una story y se pierde.

Dos lados, entonces dos productos dentro de uno:

| Lado | Quién | Qué necesita del MVP |
|---|---|---|
| **Demanda** | 18–35 años, ciudad de Guatemala, con tiempo libre y poco plan | Ver actividades por fecha, zona, precio y categoría. Reservar en 2 taps. |
| **Oferta** | Estudio de baile, taller de cerámica, chef, guía de senderismo | Publicar una actividad en < 5 min. Ver quién se apuntó. |

**Riesgo #1 (el de verdad):** el problema del huevo y la gallina. Sin actividades no llega
gente; sin gente no llegan negocios. **El MVP no lo resuelve con tecnología, lo resuelve
con trabajo manual:** se consiguen 15–25 oferentes a mano antes de abrir al público.

---

## 2. Alcance del MVP (lo que SÍ entra)

Web app responsive (mobile-first, se usa desde el navegador del celular). Sin app nativa.

### Usuario que busca plan
- [ ] Home: feed de actividades próximas, ordenadas por fecha
- [ ] Filtros: categoría, fecha (hoy / este finde / próx. 30 días), zona, rango de precio, gratis
- [ ] Búsqueda por texto
- [ ] Detalle de actividad: fotos, descripción, precio, cupo, ubicación (mapa), anfitrión
- [ ] Reservar (con cuenta) → recibe confirmación por correo
- [ ] "Mis reservas"
- [ ] Guardar favoritos

### Anfitrión (negocio)
- [ ] Registro y perfil de anfitrión (nombre, bio, foto, redes, WhatsApp)
- [ ] Crear/editar actividad: título, descripción, categoría, fotos, precio, cupo, ubicación
- [ ] Sesiones: una actividad puede tener varias fechas/horas
- [ ] Panel: lista de reservas por sesión, con contacto del asistente
- [ ] Cancelar sesión (notifica a los reservados)

### Admin (ustedes)
- [ ] Aprobar anfitriones nuevos y actividades antes de publicarse (calidad desde el día 1)
- [ ] Despublicar / destacar actividades

### Fuera del MVP (v2 en adelante)
Pagos en línea · chat interno · reseñas y ratings · app nativa · recomendaciones
personalizadas · multi-ciudad · programa de referidos · venta de tickets con QR.

### Modelo de negocio: membresía

Niido cobra una **membresía mensual al usuario**, no una comisión por transacción. El
miembro paga una cuota fija y con eso reserva actividades del catálogo; el anfitrión recibe
un pago por asistente que llega. Es el modelo de ClassPass/MoviePass aplicado a ocio local.

Por qué encaja con el problema: el dolor no es "quiero esta clase de baile", es **"no sé qué
hacer"**. Una membresía empuja a probar cosas distintas cada semana en lugar de comprar
una sola clase, y le da al anfitrión un flujo constante de caras nuevas.

Estructura tentativa (se valida con la landing, no se asume):

| | Miembro | Anfitrión |
|---|---|---|
| Paga | cuota mensual fija | nada por publicar |
| Recibe | X reservas al mes del catálogo | pago por asistente + visibilidad |
| Extra | actividades premium con costo adicional | destacados pagados (v2) |

**Riesgo del modelo:** los pocos miembros muy activos consumen más de lo que pagan y los
inactivos se dan de baja. Se controla con un tope de reservas al mes, precios por actividad
escalonados (créditos, no reservas ilimitadas) y un catálogo con suficiente oferta gratuita
o barata. **Esto es exactamente lo que hay que validar antes de programar el motor de
créditos.**

**En el MVP no se cobra todavía.** La primera cohorte entra gratis para llenar el catálogo y
medir cuántas actividades consume una persona al mes. Ese número define el precio. El cobro
en línea (Recurrente o similar) entra hasta la v2, con el dato en la mano.

---

## 3. Arquitectura

```
Next.js 15 (App Router, TypeScript)  ──►  Supabase
  · Server Components para el feed         · Postgres + Row Level Security
  · Tailwind + shadcn/ui                   · Auth (email OTP + Google)
  · desplegado en Vercel                   · Storage (fotos de actividades)
                                           · Edge Function → correos (Resend)
```

**Por qué así:** Supabase da auth, base de datos, storage y reglas de seguridad en un solo
lugar y con plan gratis suficiente para el MVP. Vercel despliega Next.js sin configuración.
La seguridad vive en la base de datos (RLS), no en el frontend — así un bug de UI no
expone datos de otros anfitriones.

### Modelo de datos (borrador)

```
profiles         id(→auth.users) · nombre · avatar · telefono · rol(user|host|admin)
hosts            id · profile_id · nombre_negocio · bio · logo · redes · estado(pendiente|aprobado)
categories       id · nombre · slug · icono
activities       id · host_id · titulo · descripcion · categoria_id · precio_gtq
                    duracion_min · direccion · lat · lng · zona · estado(borrador|revision|publicada)
activity_images  id · activity_id · url · orden
sessions         id · activity_id · inicia_en · cupo_total · estado(abierta|llena|cancelada)
bookings         id · session_id · user_id · personas · estado(confirmada|cancelada) · creada_en
favorites        user_id · activity_id
```

Reglas clave en RLS: cualquiera lee actividades `publicada`; un host solo escribe las suyas;
un usuario solo ve sus propias reservas; el host ve las reservas de sus sesiones.
El cupo se controla con una función en Postgres que reserva de forma atómica (evita
sobreventa cuando dos personas reservan el último lugar a la vez).

---

## 4. Roadmap de ejecución

| Fase | Qué se hace | Tiempo estimado |
|---|---|---|
| **0. Landing + validación** | Landing pública con lista de espera de los dos lados. Hablar con 10 usuarios y 10 negocios. Confirmar que pagarían la membresía / publicarían. | 1–2 semanas |
| **1. Cimientos** | Repo, Next.js + Tailwind + shadcn, Supabase, auth, deploy a Vercel | 2–3 días |
| **2. Datos** | Migraciones SQL, RLS, seeds con datos de prueba, tipos generados | 2 días |
| **3. Descubrimiento** | Home, filtros, búsqueda, detalle de actividad | 4–5 días |
| **4. Anfitriones** | Registro, panel, crear actividad, sesiones, ver reservas | 4–5 días |
| **5. Reservas** | Flujo de reserva, cupos atómicos, correos, "mis reservas" | 3 días |
| **6. Admin + pulido** | Moderación, SEO/OG, estados vacíos, analítica, dominio | 3 días |
| **7. Beta cerrada** | 15–25 anfitriones cargados a mano, 50–100 usuarios invitados | 2 semanas |

**Métricas que dicen si funciona:** actividades publicadas por semana · reservas por
actividad · % de sesiones que llenan al menos 50% del cupo · usuarios que vuelven a
la semana siguiente. Si nadie vuelve la segunda semana, el problema no era el que creíamos.

---

## 5. Riesgos y cómo se atacan

1. **Nadie publica** → conseguimos los primeros 20 anfitriones a mano; el equipo carga sus
   actividades por ellos si hace falta.
2. **Se apuntan y no llegan** → correo recordatorio 24h antes y contacto directo por WhatsApp
   del anfitrión. Si el no-show es alto, en v2 se cobra un anticipo.
3. **Actividades desactualizadas** → sesiones con fecha; lo viejo desaparece solo del feed.
4. **Confianza y seguridad** → moderación previa de cada anfitrión, dirección visible,
   contacto verificado. Nada de encuentros a ciegas.
5. **Se convierte en un directorio muerto** → la métrica que importa no es cuántas
   actividades hay, sino cuántas reservas ocurren.

---

## 6. Siguientes pasos inmediatos

**Ahora (fase 0):**
1. Crear proyecto en Supabase y correr `supabase/migrations/0001_waitlist.sql`
2. Desplegar la landing en Vercel con dominio propio
3. Compartirla y medir: correos capturados por lado, y cuántos negocios responden
4. En paralelo: lista de 30 negocios candidatos en Guatemala con su contacto

**Señal para pasar a la fase 1:** ~150 correos del lado usuario y ~15 negocios interesados.
Si el lado negocio no llega, el producto no tiene catálogo y no hay app que valga.

### Qué falta decidir
- Precio de la membresía y si son reservas o créditos al mes
- Cuánto recibe el anfitrión por asistente
- Ciudad de arranque (¿solo capital, o Antigua también?)
- Registro de marca "Niido" y dominio
