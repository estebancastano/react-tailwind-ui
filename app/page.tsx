import { RtwAlert } from "@/react-tailwind-ui/alert"
import { RtwBadge } from "@/react-tailwind-ui/badge"
import { RtwButton } from "@/react-tailwind-ui/button"
import { RtwCard } from "@/react-tailwind-ui/card"
import { RtwInput } from "@/react-tailwind-ui/input"
import { RtwModal } from "@/react-tailwind-ui/modal"
import { RtwSelect } from "@/react-tailwind-ui/select"
import { RtwTabs } from "@/react-tailwind-ui/tabs"
import { Check, Download, Send, Settings } from 'lucide-react'

export default function Page() {
  return (
    <main className="min-h-[100svh] bg-white dark:bg-black">
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-md bg-emerald-600" aria-hidden="true" />
              <h1 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                React Tailwind UI
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <RtwButton href ="https://www.npmjs.com/package/@estebancdev/react-tailwind-ui" leftIcon={<Send className="h-4 w-4" />}>Empezar</RtwButton>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-8 space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Librería de componentes</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Componentes React estilados con Tailwind listos para copiar y usar en tus proyectos.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <RtwCard title="Botones" description="Variantes y estados comunes">
            <div className="flex flex-wrap items-center gap-3">
              <RtwButton>Primario</RtwButton>
              <RtwButton variant="secondary">Secundario</RtwButton>
              <RtwButton variant="outline">Outline</RtwButton>
              <RtwButton variant="ghost">Ghost</RtwButton>
              <RtwButton variant="link">Link</RtwButton>
              <RtwButton variant="destructive">Peligro</RtwButton>
              <RtwButton loading leftIcon={<Send className="h-4 w-4" />}>
                Enviando
              </RtwButton>
              <RtwButton size="icon" aria-label="Confirmar">
                <Check className="h-4 w-4" />
              </RtwButton>
            </div>
          </RtwCard>

          <RtwCard title="Formulario" description="Inputs y Select con estados accesibles">
            <div className="grid gap-4 sm:grid-cols-2">
              <RtwInput label="Nombre" placeholder="Ada Lovelace" required helperText="Ingresa tu nombre completo" />
              <RtwInput label="Email" type="email" placeholder="ada@ejemplo.com" error="Formato de email inválido" />
              <div className="sm:col-span-2">
                <RtwSelect
                  label="Rol"
                  placeholder="Selecciona un rol"
                  items={[
                    { label: "Admin", value: "admin" },
                    { label: "Editor", value: "editor" },
                    { label: "Viewer", value: "viewer" },
                  ]}
                />
              </div>
              <div className="sm:col-span-2">
                <RtwButton className="w-full">Guardar</RtwButton>
              </div>
            </div>
          </RtwCard>

          <RtwCard title="Badges" description="Etiquetas de estado">
            <div className="flex flex-wrap items-center gap-3">
              <RtwBadge>Primary</RtwBadge>
              <RtwBadge tone="secondary">Secondary</RtwBadge>
              <RtwBadge tone="outline">Outline</RtwBadge>
              <RtwBadge tone="success">Éxito</RtwBadge>
              <RtwBadge tone="warning">Alerta</RtwBadge>
              <RtwBadge tone="info">Info</RtwBadge>
              <RtwBadge tone="destructive">Error</RtwBadge>
              <RtwBadge tone="muted">Muted</RtwBadge>
            </div>
          </RtwCard>

          <RtwCard title="Alertas" description="Mensajes con tonos y accesibles">
            <div className="space-y-3">
              <RtwAlert tone="info" title="Información" description="Este es un mensaje informativo." />
              <RtwAlert tone="success" title="Listo" description="La acción se completó con éxito." />
              <RtwAlert tone="warning" title="Atención" description="Revisa los datos antes de continuar." />
              <RtwAlert tone="destructive" title="Error" description="Ocurrió un problema inesperado." />
            </div>
          </RtwCard>

          <RtwCard title="Pestañas" description="Interfaz tabulada simple">
            <RtwTabs
              items={[
                {
                  value: "cuenta",
                  label: "Cuenta",
                  content: <div className="text-sm text-gray-600 dark:text-gray-400">Preferencias de usuario</div>,
                },
                {
                  value: "seguridad",
                  label: "Seguridad",
                  content: <div className="text-sm text-gray-600 dark:text-gray-400">2FA, sesiones y dispositivos</div>,
                },
                {
                  value: "facturacion",
                  label: "Facturación",
                  content: <div className="text-sm text-gray-600 dark:text-gray-400">Planes y pagos</div>,
                },
              ]}
            />
          </RtwCard>

          <RtwCard title="Modal" description="Diálogos accesibles">
            <div className="flex items-center gap-3">
              <RtwModal title="Confirmación" description="¿Deseas continuar con esta acción?">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Esta acción puede afectar tu configuración actual.
                </p>
              </RtwModal>
            </div>
          </RtwCard>
        </div>
      </section>

      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600 dark:text-gray-400">
          Hecha con ❤️ por <RtwButton variant="link" href="https://github.com/estebancastano">Esteban Castano</RtwButton>. Contribuciones y mejoras son bienvenidas en <RtwButton variant="link" href="https://github.com/estebancastano/react-tailwind-ui">GitHub</RtwButton>.
        </div>
      </footer>
    </main>
  )
}
