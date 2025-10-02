---
description: ''
sidebar: 'getting-started'
---

# Introduction

## Overview of uEngine6 BPM
uEngine6 is a platform that supports SOA MM Level 7, providing end-to-end support from BPM-based architecture analysis to operational automation.

uEngine6 BPM is a Business Process Management System (BPMS) built on a modern cloud-native architecture. It features an AI version called Process GPT, which automates process definition, form generation, and application integration. This AI capability handles complex processes automatically, enabling full automation up to the execution stage without user intervention.

By utilizing an Event-Driven Architecture (EDA), uEngine6 minimizes dependencies between services, synchronizes application states, and manages processes without propagating failures. It also provides automated retry, compensation, and timeout handling through modeling, ensuring reliable transaction management in microservice architectures where such tasks are often complex.

With LLM AI technology, process modeling and form generation are performed automatically through natural language processing, effectively supporting a wide range of business requirements, including system integration. uEngine6 BPM is an ideal solution for organizations seeking to transition to cloud-native and microservice architectures.

## Key Features and Characteristics
- **BPMN 2.0 Support**
    + uEngine6 fully supports the OMG BPMN 2.0 specification, enabling efficient process orchestration of microservices exposed as REST APIs on the OCE. It also allows the creation of simple process-based REST microservices using pure BPMN, and its intuitive interface makes it easy to model complex business processes.
- **Multi-Instance Support**
    + Multi-instance processing is possible using subprocesses. Multiple Instances (MI) allow for dynamic execution of process segments, where the number of executions is determined at runtime. By specifying a process variable (array) as an MI parameter in the subprocess settings, the process dynamically creates as many parallel or looped instances as there are values in the variable.
- **Complex Branching**
    + Process branching can be handled using gateways. Gateways allow for conditional branching and rule definition, supporting both simple process variable comparisons and complex rules using And/Or combinations.
- **Form Mapping**
    + Data can be transferred between activities using a Data Mapper. This tool enables data mapping and transformation between different schemas, facilitating integration with other tools (e.g., legacy systems) during process execution.
- **Various System Integrations**
    + BPM supports integration with other systems through multiple methods, including Message Broker, Message Event Notation, and REST API.
- **Integration and Scalability**
    + Security, integration, and performance controls are available for external access to microservices. New APIs required for business needs can be created by mashing up existing microservice assets.
- **Process Simulation, Debugging, and Execution**
    + Processes can be simulated and tested before production deployment. Parameters used during process execution can be tested with payload values, and in case of errors, features such as restart from the error point or rollback to previous steps are provided.
- **Task Assignment**
    + Tasks can be automatically assigned to designated roles during process execution.

## Version Compatibility
- The following versions are recommended and supported for uEngine6 BPM:
    + JAVA 8
    + Apache Maven 3.6.1
    + Spring Boot 2.3.1.RELEASE
- The following versions are recommended and supported for uEngine6 Frontend:
    + NodeJS 16 or higher
