# Consideraciones del examen

- 0.2 puntos cada pregunta correcta (4 en total).
- No penalizan las respuestas incorrectas.
- Todas las preguntas pueden tener mas de una respuesta válida, siendo necesario marcar todas las opciones correctas para obtener la puntuación de la misma.


## **1. Sobre Kubernetes Scheduler, elige las respuestas correctas:**

- A) Asigna Pods a nodos
- B) Tiene en cuenta recursos disponibles
- C) Ejecuta contenedores directamente
- D) Puede usar afinidad/anti-afinidad

**Solución:** 
a, b, d

## **2. Sobre el API Server, elige las respuestas correctas:**

- A) Es el punto central de control
- B) Expone la API de Kubernetes
- C) Almacena estado directamente en etcd
- D) Ejecuta Pods

**Solución:** 
a, b


## **3. Elige la respuesta correcta sobre Terraform**
- A) `terraform show` es el comando para aplicar los cambios
- B) `terraform planning` permite previsualizar las acciones que Terraform realizará
- C) `terraform apply` ejecuta los cambios propuestos en la infraestructura
- D) `terraform output` borra el estado actual

**Solución:** 
c

## **4. Sobre Pods, elige las respuestas correctas:**

- A) Son efímeros por naturaleza
- B) Tienen IP propia
- C) Siempre contienen un solo contenedor
- D) Se reprograman automáticamente si fallan

**Solución:** 
a, b, d

## **5. Sobre ReplicaSet, elige las respuestas correctas:**

- A) Garantiza número de réplicas
- B) Reemplaza Pods fallidos
- C) Permite rollout directamente
- D) Es usado por Deployments

**Solución:** 
a, b, d

## **6. Sobre Deployments, elige las respuestas correctas:**

- A) Permiten rollback
- B) Usan ReplicaSets
- C) Gestionan directamente nodos
- D) Permiten estrategias de actualización

**Solución:**
a, b, d

## **7. Selecciona que afirmación es incorrecta sobre Git y el comando Cherry-pick**
- A) `git cherry-pick <hash>` aplica los cambios de un commit específico a la rama actual
- B) Es útil para traer correcciones de errores (hotfixes) de una rama a otra sin hacer merge completo
- C) Crea un commit totalmente nuevo con un nuevo hash
- D) Borra el commit original de la rama de origen

**Solución:**
d


## **8. Sobre StatefulSets, elige las respuestas correctas:**

- A) Mantienen identidad estable
- B) Son adecuados para bases de datos
- C) No permiten escalado
- D) Usan ReplicaSets por debajo

**Solución:**
a, b

## **9. Elige las respuestas correctas sobre Services:**

- A) ClusterIP es el tipo por defecto
- B) NodePort expone externamente
- C) LoadBalancer depende del proveedor cloud
- D) Ingress es un tipo de recurso Service

**Solución:**
a, b, c

## **10. Selecciona que afirmación es incorrecta sobre Cloud Functions y Cloud Run**
- A) Cloud Functions es mejor para fragmentos de código pequeños basados en eventos
- B) Cloud Run ofrece más flexibilidad al permitir cualquier lenguaje o librería vía Docker
- C) Cloud Functions no permite escalar a cero
- D) Cloud Run cobra por el tiempo que la instancia está procesando peticiones

**Solución:**
c


## **11. Elige las respuestas correctas sobre StorageClass:**

- A) Define provisionadores
- B) Permite aprovisionamiento dinámico
- C) Es necesario para PV estáticos
- D) Puede definir parámetros del almacenamiento

**Solución:** 
a,b,d

## **12. Elige las respuestas correctas respecto a los ConfigMaps:**

- A) Guardan configuración no sensible
- B) Se pueden montar como archivos
- C) Se usan para secretos
- D) Se pueden inyectar como variables de entorno

**Solución:**
a,b,d

## **13. Elige la respuesta correcta sobre Cloud Functions (2nd Gen)**
- A) Está construida sobre Cloud Run y Eventarc
- B) Solo puede ser activada por peticiones TCP
- C) Solo puede ser activada por peticiones HTTP
- D) No permite control sobre la concurrencia de las instancias

**Solución:**
a

## **14. Elige las respuestas correctas sobre IAM:**

- A) Define roles y permisos
- B) Usa políticas
- C) Es solo para usuarios humanos
- D) Permite cuentas de servicio

**Solución:**
a,b,d

## **15. Elige las respuestas correctas respecto a comandos Git**
- A) El comando `git branch -n` es el estándar para crear una rama
- B) `git checkout -b <nombre>` crea una rama y salta a ella
- C) `git switch -c <nombre>` es una alternativa moderna para crear y cambiar de rama
- D) `git commit -m` sirve para fusionar ramas

**Solución:**
b,c


## **16. Elige las respuestas correctas respecto a los workflows de GitHub Actions**
- A) Los workflow se ejecutan en pods de GKE
- B) Los archivos de workflow deben ubicarse en `.github/workflows/`
- C) El formato utilizado para definir los workflows es únicamente JSON
- D) Un repositorio puede tener múltiples archivos de workflow para diferentes eventos

**Solución:**
b,d

## **17. Elige las respuestas correctas sobre Prometheus**
- A) Prometheus utiliza un modelo "Push" para recolectar todas las métricas
- B) Prometheus utiliza un modelo "Pull" realizando scraping de endpoints HTTP
- C) Las métricas se almacenan en una base de datos de series temporales
- D) No soporta el descubrimiento dinámico de servicios

**Solución:**
b,c

## **18. Elige las respuestas correctas sobre GitHub Actions**
- A) Un "Job" es un conjunto de pasos que se ejecutan en el mismo runner
- B) Los "Steps" dentro de un job se ejecutan siempre en paralelo
- C) Un workflow puede contener múltiples "Jobs" que se ejecutan en paralelo por defecto
- D) La sección `on:` define los eventos que disparan el workflow

**Solución:** 
a,c,d

## **19. Que afirmación es correcta sobre Google Cloud Logging**
- A) Cloud Logging permite centralizar los logs de Cloud Run, GKE y Cloud Functions
- B) No es posible filtrar logs por nivel de severidad (Error, Info, Warning)
- C) `gcloud logging get` permite consultar logs desde la terminal
- D) Los logs de Cloud Run se borran inmediatamente después de que la instancia se detiene

**Solución:** 
a

## **20. Que afirmaciones son correctas sobre el fichero de estado de Terraform**
- A) El archivo `terraform.tfstate` contiene el mapeo entre el código y la infraestructura real
- B) Siempre debe subirse el archivo `tfstate` a un repositorio Git público sin cifrar
- C) `terraform refresh` actualiza el estado local con los cambios hechos manualmente en la nube
- D) El estado solo puede guardarse de forma local en el disco del desarrollador

**Solución:** 
a,c

