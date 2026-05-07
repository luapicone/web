# Roadmap-HabitatIA

> Versión 1 — roadmap de negocio y producto para llevar HabitatIA desde la validación hasta una operación escalable.
>
> **Fecha base del roadmap:** mayo 2026  
> **Horizonte:** 24 meses  
> **Nivel de detalle:** alto en 0–12 meses, medio en 12–24 meses para evitar sobreplanificar.

---

## 1. Resumen ejecutivo

**HabitatIA** puede convertirse en un negocio que combine:

1. **planificación habitacional asistida por IA** para viviendas desde cero,
2. **remodelación visual asistida** a partir de fotos,
3. **marketplace de materiales** con ahorro real vía remanentes de arquitectos y oferta de corralones.

La oportunidad no está solo en “hacer renders”, sino en resolver un problema mucho más grande:

- ordenar decisiones para construir o remodelar,
- estimar costos y materiales,
- visualizar opciones antes de gastar,
- y conectar esa necesidad con oferta real de materiales a menor costo.

La tesis del negocio es:

> **HabitatIA no vende solamente diseño ni IA; vende claridad, ahorro, visualización y una mejor toma de decisiones para vivienda.**

---

## 2. Propósito: qué problema resuelve y para quién

## 2.1 Problema principal

Hoy muchas personas quieren construir, ampliar o remodelar, pero no tienen:

- claridad sobre por dónde empezar,
- una estimación confiable de costo total,
- un cálculo útil de materiales y cantidades,
- una forma simple de comparar alternativas,
- visibilidad de ahorro posible en materiales,
- una experiencia integrada entre idea, presupuesto, visualización y compra.

Además, del lado de la oferta:

- muchos arquitectos acumulan remanentes de materiales que se desperdician,
- los corralones no están integrados a una experiencia de planificación,
- el cliente termina comprando sin contexto de proyecto ni de ahorro potencial.

## 2.2 Público objetivo inicial

### Segmento principal (entrada al negocio)
- familias o personas que quieren **construir una vivienda desde cero** con presupuesto limitado o medio,
- personas que quieren **remodelar uno o dos ambientes** y necesitan visualizar antes de comprar.

### Segmentos secundarios
- arquitectos con remanentes de obra para monetizar,
- corralones que quieren captar demanda calificada,
- estudios pequeños o maestros mayores de obra que necesitan una herramienta de preventa o prediseño.

## 2.3 Qué soluciona HabitatIA

- convierte una necesidad difusa en un proyecto inicial concreto,
- transforma preferencias + presupuesto en una propuesta visual y económica,
- reduce errores tempranos de decisión,
- hace visible el ahorro vía marketplace,
- reduce desperdicio de materiales,
- genera un puente entre intención de obra y compra real.

---

## 3. Estado actual verificado y punto de partida

## 3.1 Activos verificados en los repositorios

### En `proyectos/web`
- existe una **landing de HabitatIA** en React + TypeScript + Vite,
- la landing ya comunica:
  - propuesta de valor,
  - sección de antes/después,
  - funcionalidad de remodelación con carrusel,
  - mensaje premium/editorial para presentación comercial.

### En `proyectos/Agente86`
- existe una **app separada en frontend + backend**,
- el frontend ya incluye:
  - landing base,
  - generador de viviendas,
  - chatbot de proyecto,
  - render conceptual,
  - plano conceptual,
  - carrusel de ambientes,
  - resumen PDF,
  - vista de marketplace.
- el backend ya incluye:
  - `POST /api/projects/generate`,
  - `POST /api/renders/generate`,
  - healthcheck,
  - estimación de materiales,
  - cálculo de ahorro por marketplace,
  - generación de plano conceptual.
- el render tiene fallback entre proveedores configurables:
  - DeepAI
  - Hugging Face
  - Replicate
  - Together
  - Pollinations
  - Mock
- el marketplace MVP hoy persiste en **JSON local**, lo cual sirve para pruebas pero **no es apto para producción real**.

## 3.2 Conclusión del estado actual

HabitatIA **ya no está en idea cero**. Tiene:

- narrativa inicial de marca,
- landing de presentación,
- MVP funcional de planificación/generación,
- render conceptual,
- plano conceptual,
- marketplace prototipado.

Lo que falta no es “empezar a construir”, sino **convertir lo construido en negocio validado**.

## 3.3 Lo que no está verificado en repositorio y debe confirmarse

No surge del código actual:

- capital disponible,
- dedicación real del equipo,
- estructura legal ya constituida o no,
- sistema de pagos en producción,
- CRM comercial,
- base de datos persistente para marketplace,
- acuerdos activos con arquitectos o corralones,
- adquisición real de usuarios.

## 3.4 Supuesto operativo para este roadmap

Para que el roadmap sea ejecutable, se asume inicialmente:

- **Founder/Lead Producto + Tecnología**
- **Founder/Lead Negocio + Operaciones**
- **advisor de arquitectura / obra** part-time
- soporte externo puntual de **contador / legal / branding / performance**

Si hoy el equipo real es distinto, el roadmap sigue siendo válido, pero hay que reasignar responsables.

---

## 4. Objetivos a 3, 6, 12 y 24 meses

| Horizonte | Objetivo principal | Resultado esperado |
|---|---|---|
| 3 meses | Validar demanda real | entrevistas, pilotos, primeros pagos y señal clara de interés por planificación + remodelación + marketplace |
| 6 meses | Lanzar versión comercial inicial | landing optimizada, app MVP usable, pipeline comercial y primeros clientes recurrentes/pagos |
| 12 meses | Lograr tracción | métricas de conversión y costos medibles, supply inicial del marketplace, operación básica estable |
| 24 meses | Escalar con foco | expansión de canales, automatización operativa, mejora de unit economics y posible búsqueda de inversión |

---

## 5. Modelo de negocio recomendado

## 5.1 Fuentes de ingreso iniciales

### A. Servicio de planificación paga (más rápido de validar)
Cobrar por:
- diagnóstico inicial,
- propuesta de vivienda/remodelación,
- estimación de costos,
- materiales necesarios,
- renderes y plano base.

**Por qué conviene empezar acá:**
- monetiza antes,
- no depende de tener marketplace maduro,
- permite aprender del cliente real,
- genera casos reales para luego alimentar la landing y el marketplace.

### B. Comisión por marketplace
Cobrar take rate sobre venta cerrada de materiales.

**Recomendación:**
- arrancar con comisión baja o incluso 0% temporal para activar oferta,
- luego pasar a comisión por operación o suscripción de vendedores.

### C. B2B para corralones y estudios (fase posterior)
- suscripción por presencia destacada,
- leads calificados,
- herramientas de cotización integrada,
- dashboard de demanda o stock.

## 5.2 Secuencia recomendada de monetización

1. **Primero**: servicio / propuesta / diagnóstico pago.  
2. **Segundo**: ahorro por marketplace con leads manuales o semi-manuales.  
3. **Tercero**: comisión + membresías supply side.  
4. **Cuarto**: B2B / SaaS / alianzas con corralones y estudios.

---

## 6. Pilares del producto

## 6.1 Landing page
La landing debe vender tres cosas con claridad:

1. **Planificar una casa desde cero**  
2. **Remodelar con IA desde una foto**  
3. **Ahorrar con marketplace de materiales**

### Objetivo de la landing
- captar leads,
- validar interés por segmento,
- derivar a demo, WhatsApp o waitlist,
- mostrar casos concretos y ahorro.

### Mínimos obligatorios de la landing
- propuesta de valor clara en hero,
- CTA principal: **Simular mi vivienda**,
- CTA secundaria: **Quiero remodelar**,
- CTA terciaria: **Quiero vender remanentes**,
- demo o ejemplo del flujo,
- explicación del ahorro en marketplace,
- prueba social / casos / mockups / entregables,
- FAQ,
- formulario o WhatsApp.

## 6.2 App / producto
La app debe tener tres flujos claros:

### Flujo A — Vivienda desde cero
- chat guiado,
- captura de preferencias,
- presupuesto,
- propuesta,
- materiales,
- render,
- plano,
- resumen final.

### Flujo B — Remodelación
- subir foto,
- detectar ambiente,
- sugerir materiales,
- cambiar opciones,
- ver resultado,
- cotizar materiales.

### Flujo C — Marketplace
- oferta de remanentes de arquitectos,
- catálogo de corralones,
- matching de materiales necesarios,
- comparación entre precio regular vs marketplace,
- ahorro estimado.

## 6.3 Backoffice / operaciones
Aunque el frente sea IA, el negocio al principio va a necesitar mucho soporte manual:

- revisión manual de propuestas,
- corrección de renders cuando fallen,
- carga o moderación de publicaciones,
- contacto con compradores y sellers,
- cierre manual de primeras operaciones.

**Regla clave:** al principio optimizar por aprendizaje, no por automatización total.

---

## 7. Conexiones clave del negocio

## 7.1 Conexiones clave de producto/tecnología

| Conexión | Estado sugerido | Prioridad | Comentario |
|---|---|---:|---|
| Landing `web` ↔ App `Agente86` | conectar CTA y tracking | Alta | la landing debe mandar al flujo correcto con analytics |
| Frontend ↔ Backend | ya existe base | Alta | endurecer validación, errores y trazabilidad |
| Render providers | ya existe fallback | Alta | medir costo, latencia y tasa de éxito por proveedor |
| Material estimation ↔ Marketplace matching | ya existe MVP | Alta | convertirlo en argumento comercial principal |
| Concept floor plan | ya existe | Media | usarlo como entregable diferenciador |
| PDF summary | ya existe | Media | muy útil para entregar valor tangible y compartir |
| Persistencia marketplace | hoy JSON local | Crítica | migrar a DB o storage real antes de producir |

## 7.2 Conexiones clave de negocio

| Conexión | Objetivo | Prioridad |
|---|---|---:|
| Arquitectos con remanentes | generar oferta inicial del marketplace | Crítica |
| Corralones | ampliar oferta formal y precios de referencia | Alta |
| Leads B2C | validar demanda y pricing | Crítica |
| WhatsApp / CRM | seguimiento comercial rápido | Alta |
| Contador / legal | estructura societaria, impuestos, facturación | Alta |
| Operador comercial / partnerships | cerrar oferta y demanda inicial | Alta |

## 7.3 Stack recomendado para operar el negocio

### Esencial en Fase 0–1
- **Analytics**: GA4 + PostHog o Mixpanel
- **CRM**: HubSpot free / Pipedrive / Notion CRM
- **Canal comercial**: WhatsApp Business
- **Formularios**: Typeform / Tally / web forms propios
- **DB**: Postgres / Supabase
- **Storage**: S3 / Cloudinary / Supabase Storage
- **Autenticación**: Clerk / Supabase Auth / Auth0
- **Pagos**: Mercado Pago (Argentina) y/o Stripe si aplica
- **Email**: Resend / Brevo / Postmark

### Fase 2–3
- firma / documentos,
- automatización con n8n / Make / Zapier,
- dashboard financiero,
- scoring de leads y sellers,
- soporte / tickets,
- pricing engine o reglas más avanzadas de matching.

---

## 8. Métricas norte y métricas operativas

## 8.1 North Star Metric sugerida

**Cantidad de proyectos habitacionales entregados con propuesta + estimación + visualización por mes.**

Porque mide valor real, no solo tráfico.

## 8.2 Métricas clave por capa

### Adquisición
- visitas landing,
- CTR de CTA principal,
- costo por lead,
- tasa lead → entrevista,
- tasa entrevista → demo.

### Producto
- tasa de finalización del chat,
- tasa de generación exitosa de propuesta,
- tasa de render exitoso,
- tiempo a primera propuesta,
- tasa de guardado / descarga de PDF.

### Negocio
- tasa demo → pago,
- ticket promedio,
- payback CAC,
- margen bruto por proyecto,
- NPS / satisfacción,
- repetición o referidos.

### Marketplace
- cantidad de sellers activos,
- SKUs publicados,
- cobertura de materiales por proyecto,
- GMV mensual,
- take rate,
- ahorro promedio mostrado,
- tasa matching proyecto ↔ oferta.

### Salud del negocio
- CAC,
- LTV,
- churn si hubiera suscripción,
- cash runway,
- burn mensual,
- margen por canal.

---

## 9. Roadmap por fases

---

# Fase 0 — Validación (0 a 8 semanas)

## Objetivo de fase
Demostrar que existe **dolor real**, disposición a pagar y una propuesta de valor entendible antes de invertir fuerte en producto o estructura.

## Qué tiene que quedar validado
- que la gente entiende la propuesta,
- que al menos un segmento paga por planificación/remodelación,
- que el ahorro del marketplace genera interés real,
- que arquitectos/corralones aceptarían participar.

## Hitos de la fase

| Hito medible | Responsable | Fecha límite sugerida | Métrica de éxito | Recursos | Riesgo | Contingencia |
|---|---|---|---|---|---|---|
| 40 entrevistas completas: 20 potenciales clientes B2C, 10 arquitectos, 10 corralones | Lead Negocio | Semana 3 | 40 entrevistas documentadas | founders + agenda + formulario | sesgo de entrevistas amistosas | entrevistar desconocidos y no solo red cercana |
| Landing validada con CTA diferenciados: vivienda, remodelación, vender remanentes | Lead Producto | Semana 3 | landing online + tracking básico | repo `web`, analytics, copy | mensaje confuso | hacer test A/B de hero y CTAs |
| 10 demos o walkthroughs del flujo | Lead Producto + Negocio | Semana 4 | 10 demos realizadas | landing + MVP + agenda | demo larga o poco clara | usar demo guiada de 15 min máximo |
| 5 clientes pagos por servicio inicial de planificación/remodelación | Lead Negocio | Semana 6 | 5 pagos cobrados | checkout/manual, propuesta comercial | interés sin pago | ofrecer paquete piloto acotado con entrega clara |
| 15 sellers potenciales interesados en publicar remanentes o stock | Lead Partnerships | Semana 7 | 15 interesados + 5 comprometidos | outreach, deck, formulario | supply side frío | arrancar por arquitectos conocidos y obras recientes |
| Definición de pricing piloto | Lead Negocio | Semana 8 | 1 tabla de precios con validación real | entrevistas + pilotos | precio arbitrario | testear 2 o 3 paquetes con distinto alcance |

## Entregables mínimos de Fase 0
- landing con tracking,
- deck de negocio,
- flujo demo funcional,
- pricing piloto,
- base de entrevistas,
- primeros casos reales.

## Gate para pasar a Fase 1
Pasar a Fase 1 solo si se cumplen **al menos 4 de estas 5 condiciones**:

- 5 clientes pagos,
- 40 entrevistas realizadas,
- tasa landing → lead >= 3%,
- al menos 5 sellers interesados en subir materiales,
- al menos 70% de los entrevistados entiende claramente el valor de HabitatIA.

---

# Fase 1 — Lanzamiento (2 a 5 meses)

## Objetivo de fase
Lanzar HabitatIA como negocio formal con:

- estructura legal mínima,
- producto mínimo vendible,
- proceso comercial claro,
- primeros clientes recurrentes.

## Alcance recomendado del producto en esta fase

### Vender sí o sí
- chat de relevamiento,
- propuesta de vivienda/remodelación,
- estimación de costo,
- cálculo de materiales,
- render conceptual,
- plano conceptual,
- resumen entregable,
- marketplace como capa de ahorro sugerido.

### No intentar todavía
- automatización total,
- logística compleja de materiales,
- catálogo masivo nacional,
- app mobile nativa,
- demasiadas verticales a la vez.

## Hitos de la fase

| Hito medible | Responsable | Fecha límite sugerida | Métrica de éxito | Recursos | Riesgo | Contingencia |
|---|---|---|---|---|---|---|
| Estructura legal y fiscal definida | Lead Negocio + contador | Mes 3 | facturación habilitada + cuenta bancaria + circuito impositivo | asesor contable/legal | freno administrativo | arrancar con estructura mínima legalmente viable y escalar luego |
| MVP comercial estable online | Lead Tech | Mes 3 | onboarding, propuesta y entrega funcionando | frontend, backend, deploy | bugs o fallas en generación | fallback manual y soporte humano |
| Persistencia real del marketplace migrada desde JSON | Lead Tech | Mes 4 | listings persistentes y trazables | DB/storage | pérdida de datos o límites de Vercel | Supabase/Postgres + storage simple |
| 20 clientes pagos acumulados | Lead Negocio | Mes 4 | 20 ventas reales | ads, outreach, referidos | baja conversión | paquetizar oferta y vender por llamada/WhatsApp |
| 30 publicaciones activas en marketplace | Lead Partnerships | Mes 5 | 30 SKUs activos | onboarding sellers | poco supply | publicar primero stock curado manualmente |
| Funnel comercial definido | Lead Growth | Mes 5 | fuente de leads + CRM + seguimiento | CRM + WhatsApp + automation básica | leads sin seguimiento | secuencia manual diaria y SLA comercial |

## Objetivos comerciales de Fase 1
- cerrar primeros casos de éxito reales,
- documentar antes/después,
- conseguir testimonios,
- entender qué paquete se vende más,
- probar si el marketplace influye en la decisión de compra.

## Gate para pasar a Fase 2
- 20 clientes pagos acumulados,
- tasa demo → pago >= 20%,
- NPS o satisfacción alta en pilotos,
- MVP sin dependencia crítica de un solo proveedor manual,
- al menos 30 publicaciones activas en marketplace.

---

# Fase 2 — Tracción (6 a 12 meses)

## Objetivo de fase
Convertir HabitatIA en una operación repetible con métricas sanas, procesos documentados y capacidad de crecer sin caos.

## Prioridades de esta fase
1. medir bien,
2. mejorar conversión,
3. profesionalizar marketplace,
4. ordenar operaciones,
5. demostrar unit economics.

## Hitos de la fase

| Hito medible | Responsable | Fecha límite sugerida | Métrica de éxito | Recursos | Riesgo | Contingencia |
|---|---|---|---|---|---|---|
| CAC, LTV y payback medidos por canal | Lead Growth / Finanzas | Mes 7 | dashboard operativo activo | analytics + CRM + finanzas | medir mal o mezclar canales | empezar simple: planilla + dashboard semanal |
| 75 clientes pagos acumulados | Lead Negocio | Mes 8 | 75 ventas | equipo comercial mínimo | crecimiento sin retención | paquetizar upsells y referidos |
| 100+ publicaciones activas marketplace | Lead Partnerships | Mes 8 | 100 SKUs activos | onboarding sellers | oferta poco útil | priorizar materiales de mayor demanda y rotación |
| Tasa de matching proyecto → oferta >= 35% | Lead Producto + Marketplace | Mes 9 | 35% de proyectos con match relevante | data + oferta | poca cobertura de stock | campañas de captación por material faltante |
| Procesos básicos documentados | Operaciones | Mes 9 | SOPs de ventas, soporte, publicación, entrega | docs + owner claro | dependencia de personas | checklists y QA semanal |
| 1er equipo operativo mínimo contratado | Founders | Mes 10 | roles cubiertos en ventas/ops/tech | caja o capital | contratar antes de tiempo | part-time/freelance hasta validar volumen |
| Flujo de caja cercano a equilibrio o financiamiento asegurado | Founders | Mes 12 | runway > 9 meses o break-even parcial | ventas o inversión | burn sin aprendizaje | recortar features y volver a foco core |

## Métricas de éxito sugeridas al cierre de Fase 2
- CAC recuperable en menos de 4 meses,
- tasa lead → pago medible por canal,
- tasa de finalización del chat > 45%,
- tasa de render exitoso > 85%,
- tasa de matching marketplace > 35%,
- sellers activos mensuales > 25,
- testimonios y casos publicados suficientes para vender mejor.

## Gate para pasar a Fase 3
- canal comercial repetible,
- unit economics entendidos,
- operación soportable por procesos y no solo por founders,
- marketplace demostrando valor económico real.

---

# Fase 3 — Escala (12 a 24 meses)

## Objetivo de fase
Escalar solo lo que ya mostró señales reales de negocio.

## En esta fase sí tiene sentido trabajar en:
- automatización fuerte,
- expansión geográfica,
- más integración con corralones,
- mejoras profundas de matching y pricing,
- fundraising si hace falta acelerar.

## Hitos de la fase

| Hito medible | Responsable | Fecha límite sugerida | Métrica de éxito | Recursos | Riesgo | Contingencia |
|---|---|---|---|---|---|---|
| Automatización operativa de onboarding, seguimiento y reporting | Operaciones + Tech | Mes 15 | reducción de tiempo manual por proyecto | automation stack | automatizar caos | automatizar solo procesos ya estables |
| Expansión a nuevas plazas / ciudades priorizadas | Negocio + Partnerships | Mes 16 | 2–3 mercados nuevos activos | partnerships locales | dispersión | elegir plazas con oferta y demanda probables |
| 300+ clientes pagos acumulados | Comercial | Mes 18 | 300 ventas | equipo comercial | crecimiento sin margen | priorizar rentabilidad por canal |
| 300+ publicaciones marketplace y sellers recurrentes | Marketplace Lead | Mes 18 | recurrencia supply side | onboarding + incentivos | catálogo muerto | curar oferta y premiar sellers activos |
| Integración de pagos/comisiones automatizadas | Producto + Finanzas | Mes 18 | take rate operable | pasarela + legal | fricción regulatoria | empezar con pagos asistidos/manuales |
| Búsqueda de inversión opcional | Founders | Mes 18–24 | data room + métricas defendibles | deck + finanzas | levantar antes de tiempo | bootstrap si los números todavía no cierran |
| Expansión de línea B2B | Founders | Mes 20–24 | pilotos con corralones/estudios | producto y partnerships | perder foco B2C | abrir B2B solo si B2C ya aprendió suficiente |

## Qué no conviene hacer en escala
- abrir demasiados países o segmentos a la vez,
- lanzar demasiadas líneas de negocio sin foco,
- perseguir inversión sin métricas defendibles,
- agregar features vistosas que no mejoren ventas, retención o margen.

---

## 10. Responsables por área

> Recomendación: asignar responsables por **rol**, aunque al inicio varias áreas recaigan en la misma persona.

| Área | Responsable ideal | Qué define |
|---|---|---|
| Producto | Founder Producto / PM | roadmap, UX, prioridades, validación |
| Tecnología | Tech Lead / Founder Tech | arquitectura, backend, integraciones, calidad |
| Negocio | Founder Negocio | pricing, propuesta de valor, revenue |
| Growth | Growth / Performance | adquisición, landing, métricas, funnel |
| Partnerships | BizDev / Marketplace Lead | arquitectos, corralones, oferta supply side |
| Operaciones | Ops Lead | soporte, QA, publicaciones, seguimiento |
| Finanzas / Legal | externo + founder | estructura legal, impuestos, runway, cobros |

---

## 11. Recursos necesarios por etapa

## Fase 0
- founders dedicados,
- analytics básico,
- landing optimizada,
- CRM simple,
- 1 canal de cobro,
- tiempo comercial intensivo.

## Fase 1
- DB persistente,
- auth mínima,
- storage,
- CRM más ordenado,
- legal/contable,
- operación de soporte manual.

## Fase 2
- dashboard de métricas,
- automatización básica,
- 1 o 2 hires clave,
- acuerdos iniciales con supply,
- procesos documentados.

## Fase 3
- pagos más integrados,
- automatización de onboarding y postventa,
- expansión comercial,
- soporte operativo escalable,
- potencial capital externo.

---

## 12. Riesgos principales y planes de contingencia

| Riesgo | Impacto | Señal temprana | Plan de contingencia |
|---|---|---|---|
| El cliente ve valor visual pero no paga | Alto | muchas demos, pocos cierres | simplificar oferta, vender paquete concreto y no “plataforma completa” |
| Marketplace sin oferta suficiente | Alto | pocos sellers y poco stock útil | arrancar curado y focalizado por materiales de alta demanda |
| Marketplace con oferta pero sin transacción | Alto | ahorro se muestra pero no se concreta | usar matching asistido manual y cerrar operaciones acompañadas |
| Costos altos de render / IA | Medio | uso alto, baja conversión | limitar generaciones por etapa, usar preview y fallback barato |
| Producto demasiado amplio | Alto | backlog infinito, foco difuso | priorizar un caso de uso principal por etapa |
| Dependencia de founders | Alto | todo pasa por 1 o 2 personas | documentar procesos, contratar ops/growth antes de escalar |
| Mala precisión en costos/materiales | Alto | desconfianza del cliente | mostrar rangos, disclaimers y revisión humana inicial |
| Fricción legal/fiscal en marketplace | Medio | demora en cobrar o formalizar sellers | empezar con modelo de lead/referral o intermediación asistida |

---

## 13. Errores comunes a evitar

1. **Ir directo a construir más features sin validar pago real.**  
   Lo más importante no es agregar más IA, sino confirmar que alguien paga por el resultado.

2. **Hacer un roadmap rígido.**  
   Este documento tiene que revisarse cada 30–45 días.

3. **No definir métricas de avance.**  
   Sin métricas, no hay forma de saber si HabitatIA es producto interesante o negocio real.

4. **Intentar lanzar construcción desde cero, remodelación, marketplace, B2C y B2B al mismo tiempo.**  
   Hay que secuenciar.

5. **Pensar demasiado en escala antes de validar operaciones pequeñas.**  
   Primero cerrar casos reales, después automatizar.

6. **Planificar más de 18 meses con excesivo detalle.**  
   Por eso este roadmap detalla fuerte hasta 12 meses y deja 12–24 meses en nivel estratégico.

---

## 14. Recomendación estratégica final

La forma más sana de armar HabitatIA como negocio es esta:

### Paso 1
**Vender primero planificación + visualización como servicio/producto asistido.**

### Paso 2
**Usar esos casos para probar el argumento económico del marketplace.**

### Paso 3
**Construir la oferta del marketplace a partir de demanda real, no al revés.**

### Paso 4
**Medir unit economics y recién ahí profesionalizar escala.**

Si HabitatIA intenta arrancar como “super app completa” desde el día uno, el riesgo de dispersión es alto.  
Si arranca como una herramienta que resuelve un problema real y cobra por eso, el negocio tiene muchas más chances de crecer bien.

---

## 15. Próximo paso recomendado inmediato (próximos 15 días)

1. validar y ajustar este roadmap,
2. definir **caso de uso principal de entrada**:
   - vivienda desde cero,
   - remodelación,
   - o híbrido con dos CTAs separados,
3. cerrar propuesta comercial inicial,
4. medir landing + leads + entrevistas,
5. conseguir primeros pagos reales antes de ampliar el producto.

---

## 16. Resumen de una línea

> **HabitatIA debería nacer como un negocio que vende claridad, ahorro y visualización para decisiones habitacionales, usando IA como motor y el marketplace como palanca de valor económico real.**
