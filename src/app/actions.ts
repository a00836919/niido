"use server";

import { getSupabase } from "@/lib/supabase";

export type EstadoLista = {
  ok: boolean;
  mensaje: string;
};

const CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function apuntarse(
  _previo: EstadoLista | null,
  datos: FormData,
): Promise<EstadoLista> {
  const correo = String(datos.get("correo") ?? "").trim().toLowerCase();
  const lado = String(datos.get("lado") ?? "");
  const nota = String(datos.get("nota") ?? "").trim();

  if (!CORREO.test(correo)) {
    return { ok: false, mensaje: "Ese correo no se ve completo. Revisalo." };
  }
  if (lado !== "persona" && lado !== "anfitrion") {
    return { ok: false, mensaje: "Elegí si buscás plan o si ofrecés actividades." };
  }
  if (nota.length > 500) {
    return { ok: false, mensaje: "La nota se pasó de 500 caracteres." };
  }

  const supabase = getSupabase();
  if (!supabase) {
    return {
      ok: false,
      mensaje: "Todavía no conectamos la base de datos. Escribinos mientras tanto.",
    };
  }

  const { error } = await supabase
    .from("waitlist")
    .insert({ correo, lado, nota: nota || null });

  // 23505 = correo repetido. Para quien se apunta dos veces, eso es un éxito.
  if (error && error.code !== "23505") {
    console.error("waitlist insert", error);
    return { ok: false, mensaje: "Algo falló de nuestro lado. Probá otra vez." };
  }

  return {
    ok: true,
    mensaje:
      lado === "persona"
        ? "Listo. Te escribimos cuando abramos el catálogo."
        : "Listo. Te buscamos para cargar tus actividades.",
  };
}
