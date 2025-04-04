---
slug: kubernetes-operator-pattern-big-data
title: Exploring Distributed Systems With the Kubernetes Operator Pattern
authors: [nikolas]
---

The Kubernetes Operator pattern provides a few things:

1. Ease of local development and service orchestration using the same manifests
the production uses (with different parametrization) as Kubernetes
environments are provided locally via Docker Desktop, Rancher Desktop,
or tools like `minikube`. Gone are the days of needing a `docker-compose` file 
for integration testing.

2. Versatility if deploying across cloud providers is necessary. The Kubernetes
Operator pattern is a great way to achieve cloud agnosticsm with your tech
stack; all you need is Kubernetes cluster!

3. This is more a point to the prowess of containerization and virtualization in
a more general sense, but this pattern can make the accessibility of tools that
used to be considered _difficult to setup and administer_ perceivable as _easy to
bootstrap and experiment with_ i.e. distributed systems frameworks available from
the Apache Foundation.

## Ultimate Configuration and Bootstrappig

1. Skaffold and Kustomize
2. Example with Kafka
3. Example with Flink

