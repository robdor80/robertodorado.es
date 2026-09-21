---
title: Cuadrante App
summary: Aplicación Android para gestionar calendarios de turnos, incidencias, permisos y vacaciones.
type: android
status: development
featured: true
technologies:
  - Kotlin
  - Jetpack Compose
  - Material 3
  - DataStore
---

## Qué es Cuadrante App

Cuadrante App es una aplicación Android en desarrollo para organizar calendarios de turnos de trabajo y consultar la planificación laboral desde el dispositivo.

## Gestión de turnos

La aplicación incluye un calendario mensual, permite seleccionar una fecha de referencia y admite tanto un patrón de turnos 6×6 como patrones personalizados.

El patrón 6×6 utilizado actualmente sigue esta secuencia:

`M M T T N N + S L L L L L`

En ella, `M` corresponde a mañana, `T` a tarde, `N` a noche, `S` a saliente y `L` a libre.

## Ausencias e incidencias

Cuadrante App permite gestionar incidencias, asuntos propios (AP), permisos y vacaciones. También incorpora selección múltiple de fechas para registrar asuntos propios.

## Tecnología

La aplicación está desarrollada con Kotlin, Jetpack Compose y Material 3. Los datos se conservan localmente mediante DataStore.
