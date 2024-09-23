export const projectList = [
    {
        "id": 1,
        "uuid": "eee2bdbd-e460-46b9-b793-5b3c9a02e98a",
        "name": "CRM",
        "description": "A cloud-based customer relationship management platform tailored for small businesses to manage services, appointments, and client relationships effectively.",
        "isDemoReady": false,
        "demoUrl": "",
        "imageUrl": "/crm.png",
        "tags": ["Appointment", "Small Business", "CRM"],
        "status": "active",
        "isWikiReady": false,
        "wiki": {
            "name": "CRM (Customer Relationship Management)",
            "purpose": "To provide a comprehensive solution for small businesses to manage their services, employees, and appointments, while allowing clients to find and book nearby services seamlessly.",
            "projectType": "A scalable MVP designed to automate service and appointment management for small businesses, enabling them to efficiently handle client bookings and improve customer satisfaction.",
            "overview": "CRM is a cloud-based backend system designed for small businesses to manage their stores, employees, services, and appointments, while clients can find and book nearby services with ease. The platform supports secure APIs with JWT-based authentication and authorization, integrates with Azure AD B2C for identity management, and follows a microservices architecture for scalable and efficient operations. Admins can manage business profiles, service offerings, and employee schedules, while clients can explore services using Google Maps integration and book appointments based on real-time availability. The system leverages Azure services like App Configuration for managing settings, Key Vaults for secure storage, and FluentMigrator for database migrations, making it a robust solution for managing customer relationships and appointments effectively.",
            "features": [
                "Microservice architecture built with .NET 8 for modular, maintainable, and scalable services, supporting separate business and client functionalities.",
                "Secure APIs with JWT-based authentication and authorization, ensuring secure access control and role-based permissions.",
                "Integration with Azure AD B2C for identity management, providing a scalable and customizable identity provider for both businesses and clients.",
                "Database migration support using FluentMigrator for automated schema management and version control, simplifying database evolution across environments.",
                "Centralized configuration management using Azure App Configuration, enabling consistent and dynamic management of application settings across microservices.",
                "Secure storage of sensitive information such as API keys and secrets with Azure Key Vaults, ensuring compliance with security best practices.",
                "Integration with Google Maps API via custom RestSharp client, enabling location-based service discovery and navigation for clients.",
                "Asynchronous processing of business and client operations using Azure Functions, supporting scalable and resilient service execution.",
                "Client management for handling profiles, appointment history, and personal preferences, enabling a personalized service experience.",
                "Business management features for configuring store details, managing services, scheduling employees, and tracking appointments in real-time.",
                "Real-time appointment booking system, utilizing Azure SQL Server for efficient data handling and ensuring accurate availability tracking.",
                "Automated CI/CD pipelines with Azure DevOps, supporting continuous integration and deployment for rapid, reliable updates and improvements.",
                "Scalable API design adhering to RESTful principles, providing a robust and extensible platform for future integrations and enhancements."
            ],
            "technologyStack": [
                ".NET 8",
                "Azure Functions",
                "Azure SQL Server",
                "Azure App Configuration",
                "Azure Key Vaults",
                "Azure AD B2C",
                "NextJS (Demo Frontend)"
            ],
            "architecture": "Microservice architecture with event-driven design using Azure Functions and Service Bus. Each microservice is responsible for specific tasks such as managing client profiles, handling appointments, and integrating with third-party APIs like Google Maps. Azure Functions provide serverless execution and scalability, while Azure Service Bus ensures reliable messaging between services. The system is built with clean code principles, making it maintainable and scalable for future enhancements.",
            "useCases": [
                "Managing business profiles, services, and employee schedules.",
                "Allowing clients to search for and book nearby services.",
                "Providing secure, role-based access to store and service management.",
                "Handling real-time appointment bookings and cancellations.",
                "Managing client profiles and past appointment history."
            ],
            "microservices": [
                {
                    "name": "CRM.API.Client.Identity",
                    "type": "Azure Function App",
                    "description": "Manage client profiles and authentication.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
                    "trigger": "HTTP Trigger"
                },
                {
                    "name": "CRM.API.Client.Appointment",
                    "type": "Azure Function App",
                    "description": "Handle client appointments and bookings.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
                    "trigger": "HTTP Trigger"
                },
                {
                    "name": "CRM.API.Client.Service",
                    "type": "Azure Function App",
                    "description": "Provide nearby service listings for clients.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
                    "trigger": "HTTP Trigger"
                },
                {
                    "name": "CRM.API.Business.Identity",
                    "type": "Azure Function App",
                    "description": "Manage business profiles and authentication.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
                    "trigger": "HTTP Trigger"
                },
                {
                    "name": "CRM.API.Business.Appointment",
                    "type": "Azure Function App",
                    "description": "Manage business appointments and scheduling.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
                    "trigger": "HTTP Trigger"
                },
                {
                    "name": "CRM.API.Business.Management",
                    "type": "Azure Function App",
                    "description": "Manage business services and employee scheduling.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
                    "trigger": "HTTP Trigger"
                }
            ],
            "devOps": "CI/CD implemented via Azure DevOps for continuous deployments.",
            "sourceCodeUrl": "",
            "seeAlso": [
                {
                    "name": "A Secured Microservice",
                    "url": "/a05ecc86-9313-4959-a644-f1e59fde6eeb"
                },
                {
                    "name": "Custom Auth Flow using a Microservice",
                    "url": "/46fe9dc9-4adb-45e7-a024-58cb52e37c77"
                },
                {
                    "name": "Google Maps API Integration",
                    "url": "/cca7efb5-d9a7-4f2c-b5c8-72d76797de8d"
                }
            ],
            "tags": [".NET", "Azure", "Microservices", "CosmosDB", "Service Bus"]
        }
    },
    {
        "id": 2,
        "uuid": "4f7334bd-f946-446e-81e7-77ea52c5fb9c",
        "name": "POD",
        "description": "Cloud-based ecommerce app with print-on-demand business model having full integration capabilities to Shopify stores.",
        "isDemoReady": false,
        "demoUrl": "",
        "imageUrl": "/pod.png",
        "tags": ["Dropshipping", "Print-on-Demand", "E-commerce", "Shopify"],
        "status": "active",
        "isWikiReady": false,
        "wiki": {
            "name": "POD (Print-On-Demand)",
            "purpose": "To provide a comprehensive print-on-demand solution that enables businesses to manage product customization, order fulfillment, and 3D printing operations efficiently, while seamlessly integrating with multiple e-commerce platforms to offer customers a personalized and scalable print-on-demand experience.",
            "projectType": "Scalable enterprise-level print-on-demand solution designed to manage and automate 3D printing operations for e-commerce platforms, optimized for seamless integration, resource management, and high-volume production in a 3D print farm environment.",
            "overview": "POD is a cloud-based backend system designed to integrate multiple Shopify stores for seamless print-on-demand order fulfillment. It connects to Shopify stores via a RestSharp client, allowing sellers to publish unlimited products effortlessly. The system supports payments through Braintree and Stripe, enabling automated fulfillment and shipping while adhering to best security practices using Azure products. Businesses can connect multiple stores under a single account, manage customized products, and automate payment processing for efficient operations. For administrators, POD offers robust features such as adding various filament types, materials, and generic products, empowering sellers to design and publish their offerings. It also includes advanced management tools for 3D printers, optimizing printbox volume usage and preventing product overflow. Additional admin features like order management, print job scheduling, shipping management, and filament inventory management provide complete control over the entire print-on-demand process. These capabilities make POD an enterprise-level project, ready to manage and scale 3D print farm operations with comprehensive integration, customization, and fulfillment features.",
            "features": [
                "Microservice architecture built with .NET 8 for modular, maintainable, and scalable components.",
                "Serverless execution using Azure Functions for high scalability and cost efficiency.",
                "Event-driven communication between microservices via Azure Service Bus for reliable message delivery and decoupled interactions.",
                "Data storage and management using Azure SQL Server, providing robust and secure database capabilities.",
                "Database migration support using FluentMigrator for version control and automated schema management.",
                "File and model storage in Azure Blob Storage, enabling efficient and scalable management of 3D model files and related data.",
                "Centralized configuration management using Azure App Configuration to streamline application settings across services.",
                "Secure storage and access to sensitive data such as API keys and secrets through Azure Key Vaults.",
                "Automated CI/CD pipelines with Azure DevOps for continuous integration and deployment, ensuring rapid and reliable application updates.",
                "Integration with Shopify using custom RestSharp clients for seamless interaction with e-commerce stores.",
                "Real-time order processing with asynchronous task handling, utilizing durable functions and service bus queues for effective job management.",
                "Dynamic print job scheduling and resource allocation using Azure Functions, ensuring optimal use of 3D printers and minimizing delays.",
                "Advanced error handling and retry mechanisms using Azure Service Bus to ensure resilience and reliability in message processing.",
                "Scalable API design with support for RESTful operations, adhering to best practices for maintainable and extensible endpoints."
            ],
            "technologyStack": [
                ".NET 8",
                "Azure Functions",
                "Azure Service Bus",
                "Azure SQL Server",
                "Azure Blob Storage",
                "Azure App Configuration",
                "Azure Key Vaults",
                "Azure AD B2C",
                "NextJS (Demo Frontend)"
            ],
            "architecture": "Microservice architecture leveraging an event-driven design using Azure Service Bus and Azure Functions. Each microservice is responsible for a specific functionality, such as order processing, payment management, print job scheduling, and shipping coordination. Azure Service Bus is used for reliable messaging and event propagation between services, ensuring decoupled communication and scalable event handling. Azure Functions are employed to execute discrete tasks within each microservice, enabling efficient, serverless execution and scalability. The architecture supports seamless integration with Shopify stores, allowing for real-time order tracking, automated payment processing, and dynamic 3D print job scheduling. The system is designed for high availability, resilience, and easy maintenance, making it ideal for managing a large-scale print-on-demand operation.",
            "useCases": [
                "Automating order processing and fulfillment for multiple Shopify stores.",
                "Managing 3D print job scheduling and resource allocation.",
                "Integrating payment gateways for seamless transaction processing.",
                "Handling real-time inventory management for filament and materials.",
                "Coordinating shipping and logistics for efficient order dispatch.",
                "Supporting multi-store management with centralized control."
            ],
            "microservices": [
                {
                    "name": "POD.API.Admin.Filament",
                    "type": "Azure Function App",
                    "description": "Manage filament types and inventory.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
                    "trigger": "HTTP"
                },
                {
                    "name": "POD.API.Admin.Model",
                    "type": "Azure Function App",
                    "description": "Manage 3D models and assets.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
                    "trigger": "HTTP"
                },
                {
                    "name": "POD.API.Seller.Address",
                    "type": "Azure Function App",
                    "description": "Manage business and store addresses.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
                    "trigger": "HTTP"
                },
                {
                    "name": "POD.API.Seller.Payment",
                    "type": "Azure Function App",
                    "description": "Manage seller payment methods.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
                    "trigger": "HTTP"
                },
                {
                    "name": "POD.API.Seller.Store",
                    "type": "Azure Function App",
                    "description": "Manage store information and settings.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
                    "trigger": "HTTP"
                },
                {
                    "name": "POD.API.User.Identity",
                    "type": "Azure Function App",
                    "description": "Manage user identities and authentication.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
                    "trigger": "HTTP"
                },
                {
                    "name": "POD.Functions.Geometry",
                    "type": "Azure Function App",
                    "description": "Analyze and calculate 3D model specifications.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
                    "trigger": "Blob"
                },
                {
                    "name": "POD.Functions.Payment.Schedule",
                    "type": "Azure Function App",
                    "description": "Schedule and collect payment information.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
                    "trigger": "Timer"
                },
                {
                    "name": "POD.Functions.Payment.Processing.Stripe",
                    "type": "Azure Function App",
                    "description": "Process payments via Stripe.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
                    "trigger": "Service Bus"
                },
                {
                    "name": "POD.Functions.Payment.Processing.Braintree",
                    "type": "Azure Function App",
                    "description": "Process payments via Braintree.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
                    "trigger": "Service Bus"
                },
                {
                    "name": "POD.Functions.Payment.PostProcessing",
                    "type": "Azure Function App",
                    "description": "Update database post-payment processing.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
                    "trigger": "Service Bus"
                },
                {
                    "name": "POD.Functions.PublishSchedule",
                    "type": "Azure Function App",
                    "description": "Schedule and publish products to store fronts.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
                    "trigger": "Timer"
                },
                {
                    "name": "POD.Functions.Shopify.AppInstall",
                    "type": "Azure Function App",
                    "description": "Handle new app installations on Shopify.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
                    "trigger": "Service Bus"
                },
                {
                    "name": "POD.Functions.Shopify.AppUninstall",
                    "type": "Azure Function App",
                    "description": "Handle app uninstallations on Shopify.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
                    "trigger": "Service Bus"
                },
                {
                    "name": "POD.Functions.Shopify.CallExecutes",
                    "type": "Azure Function App",
                    "description": "Route webhook notifications to the relevant microservices.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
                    "trigger": "Service Bus"
                },
                {
                    "name": "POD.Functions.Shopify.CreateWebhooks",
                    "type": "Azure Function App",
                    "description": "Create webhooks for newly integrated Shopify stores.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
                    "trigger": "Service Bus"
                },
                {
                    "name": "POD.Functions.Shopify.DeleteProducts",
                    "type": "Azure Function App",
                    "description": "Remove unpublished products from Shopify stores.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
                    "trigger": "Service Bus"
                },
                {
                    "name": "POD.Functions.Shopify.OrderFulfillment",
                    "type": "Azure Function App",
                    "description": "Fulfill orders post-payment clearance.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
                    "trigger": "Service Bus"
                },
                {
                    "name": "POD.Functions.Shopify.OrderProcessing",
                    "type": "Azure Function App",
                    "description": "Process orders before payment clearance.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
                    "trigger": "Service Bus"
                },
                {
                    "name": "POD.Functions.Shopify.PublishProcessing",
                    "type": "Azure Function App",
                    "description": "Publish products and match variants with images.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
                    "trigger": "Service Bus"
                },
                {
                    "name": "POD.Functions.Shopify.SellerStatusProcessing",
                    "type": "Azure Function App",
                    "description": "Update user status in Shopify stores.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
                    "trigger": "Service Bus"
                },
                {
                    "name": "POD.Functions.Shopify.UpdateInventory",
                    "type": "Azure Function App",
                    "description": "Update inventory levels in Shopify stores.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
                    "trigger": "Service Bus"
                },
                {
                    "name": "POD.Functions.Shopify.WebhookEndpoints",
                    "type": "Azure Function App",
                    "description": "Receive and process Shopify webhook notifications.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
                    "trigger": "HTTP"
                }
            ],
            "devOps": "CI/CD implemented via Azure DevOps for continuous deployments.",
            "sourceCodeUrl": "",
            "seeAlso": [
                {
                    "name": "A Secured Microservice",
                    "url": "/a05ecc86-9313-4959-a644-f1e59fde6eeb"
                },
                {
                    "name": "A Custom Auth Flow using a Microservice",
                    "url": "/46fe9dc9-4adb-45e7-a024-58cb52e37c77"
                },
                {
                    "name": "Azure Service Bus Integration",
                    "url": "/8a593841-83ce-44de-a224-18a7f08cbbc1"
                },
                {
                    "name": "SendGrid Integration",
                    "url": "/c8bbefdb-e137-44ea-9614-4371b9e1cd54"
                },
                {
                    "name": "Azure Blob Storage Integration",
                    "url": "/d1ffeca0-1eb3-4cd8-89db-fac8c88dccf2"
                },
            ],
            "tags": [".NET", "Azure", "Microservices", "CosmosDB", "Service Bus"]
        }
    },
    {
        "id": 3,
        "uuid": "e3b0c442-98fc-4dfb-897e-4aa3e1c8506e",
        "name": "DStudio",
        "description": "3D product design studio SaaS",
        "isDemoReady": false,
        "demoUrl": "",
        "imageUrl": "/dstudio.png",
        "tags": ["3D", "Product Designer", "SaaS"],
        "status": "draft",
        "isWikiReady": false,
        "wiki": {
            "name": "DStudio (Design Studio)",
            "purpose": "To automate order processing and 3D printing jobs from e-commerce platforms.",
            "projectType": "Enterprise-Level Azure Function-Based Microservice Architecture",
            "overview": "A cloud-based backend system that integrates multiple e-commerce platforms and automates 3D printing processes.",
            "features": [
                "Webhook notifications for order updates",
                "Real-time inventory tracking",
                "Asynchronous job scheduling for 3D printing"
            ],
            "technologyStack": [
                ".NET Core",
                "Azure Functions",
                "Cosmos DB",
                "Azure Service Bus",
                "SQL Server"
            ],
            "architecture": "Microservice architecture with event-driven design using Azure Service Bus and Functions.",
            "useCases": [
                "Automated order management",
                "3D printing job scheduling",
                "E-commerce platform integration"
            ],
            "microservices": [
                {
                    "name": "3D Print Job Scheduler",
                    "description": "Schedules and assigns 3D print jobs based on printer availability.",
                    "scalability": "Queue-based scheduling via Azure Service Bus.",
                    "deployment": "Azure Functions triggered by Service Bus queues.",
                    "trigger": "HTTP Trigger"  // Added trigger type
                }
            ],
            "devOps": "CI/CD implemented via Azure DevOps for continuous deployments.",
            "sourceCodeUrl": "https://github.com/user/pod-backend",
            "seeAlso": [
                {
                    "name": "A secured microservice template",
                    "url": "#"
                },
                {
                    "name": "Auth Flow",
                    "url": "#"
                },
                {
                    "name": "GoogleMaps Client",
                    "url": "#"
                },
            ],
            "tags": [".NET", "Azure", "Microservices", "CosmosDB", "Service Bus"]
        }
    },
    {
        "id": 4,
        "uuid": "d6fdad59-3a0c-4f91-bccf-e454f3345b6f",
        "name": "SimplePayment",
        "description": "A simple payment system to demonstrate loosely coupled microservices architecture.",
        "isDemoReady": false,
        "demoUrl": "https://fulfill3d.com/simple-payment-demo",
        "wikiUrl": "/projects/[id]/",
        "imageUrl": "/images/simple-payment.png",
        "tags": ["Stripe", "Customer", "Payment"],
        "status": "draft",
        "isWikiReady": false,
        "wiki": {
            "name": "POD (Print-On-Demand)",
            "purpose": "To automate order processing and 3D printing jobs from e-commerce platforms.",
            "projectType": "Enterprise-Level Azure Function-Based Microservice Architecture",
            "overview": "A cloud-based backend system that integrates multiple e-commerce platforms and automates 3D printing processes.",
            "features": [
                "Webhook notifications for order updates",
                "Real-time inventory tracking",
                "Asynchronous job scheduling for 3D printing"
            ],
            "technologyStack": [
                ".NET Core",
                "Azure Functions",
                "Cosmos DB",
                "Azure Service Bus",
                "SQL Server"
            ],
            "architecture": "Microservice architecture with event-driven design using Azure Service Bus and Functions.",
            "useCases": [
                "Automated order management",
                "3D printing job scheduling",
                "E-commerce platform integration"
            ],
            "microservices": [
                {
                    "name": "Order Service",
                    "description": "Handles incoming orders from e-commerce platforms.",
                    "openApiUrl": "https://api.pod.com/swagger/orders",
                    "scalability": "Horizontally scalable via Azure Functions.",
                    "deployment": "CI/CD pipeline with Azure DevOps.",
                    "linkToDocs": "https://docs.pod.com/orders",
                    "trigger": "HTTP Trigger"  // Added trigger type
                },
                {
                    "name": "Inventory Service",
                    "description": "Manages stock levels and updates inventory in real time.",
                    "openApiUrl": "https://api.pod.com/swagger/inventory",
                    "scalability": "Uses Cosmos DB for global distribution.",
                    "deployment": "Azure Functions integrated with Cosmos DB.",
                    "linkToDocs": "https://docs.pod.com/inventory",
                    "trigger": "HTTP Trigger"  // Added trigger type
                },
                {
                    "name": "3D Print Job Scheduler",
                    "description": "Schedules and assigns 3D print jobs based on printer availability.",
                    "openApiUrl": "https://api.pod.com/swagger/print-jobs",
                    "scalability": "Queue-based scheduling via Azure Service Bus.",
                    "deployment": "Azure Functions triggered by Service Bus queues.",
                    "linkToDocs": "https://docs.pod.com/print-jobs",
                    "trigger": "HTTP Trigger"  // Added trigger type
                }
            ],
            "devOps": "CI/CD implemented via Azure DevOps for continuous deployments.",
            "sourceCodeUrl": "https://github.com/user/pod-backend",
            "seeAlso": [
                {
                    "name": "A secured microservice template",
                    "url": "#"
                },
                {
                    "name": "Auth Flow",
                    "url": "#"
                },
                {
                    "name": "GoogleMaps Client",
                    "url": "#"
                },
            ],
            "tags": [".NET", "Azure", "Microservices", "CosmosDB", "Service Bus"]
        }
    },
    {
        "id": 5,
        "uuid": "81bf76e0-9e67-4b74-9be7-7cfa6f675bf1",
        "name": "ChatBox",
        "description": "This is a SaaS for AI backed live chat box for a customer service",
        "isDemoReady": false,
        "demoUrl": "https://fulfill3d.com/chat-box-demo",
        "wikiUrl": "/projects/[id]/",
        "imageUrl": "/images/chat-box.png",
        "tags": ["OpenAI", "Customer", "SaaS"],
        "status": "draft",
        "isWikiReady": false,
        "wiki": {
            "name": "POD (Print-On-Demand)",
            "purpose": "To automate order processing and 3D printing jobs from e-commerce platforms.",
            "projectType": "Enterprise-Level Azure Function-Based Microservice Architecture",
            "overview": "A cloud-based backend system that integrates multiple e-commerce platforms and automates 3D printing processes.",
            "features": [
                "Webhook notifications for order updates",
                "Real-time inventory tracking",
                "Asynchronous job scheduling for 3D printing"
            ],
            "technologyStack": [
                ".NET Core",
                "Azure Functions",
                "Cosmos DB",
                "Azure Service Bus",
                "SQL Server"
            ],
            "architecture": "Microservice architecture with event-driven design using Azure Service Bus and Functions.",
            "useCases": [
                "Automated order management",
                "3D printing job scheduling",
                "E-commerce platform integration"
            ],
            "microservices": [
                {
                    "name": "Order Service",
                    "description": "Handles incoming orders from e-commerce platforms.",
                    "openApiUrl": "https://api.pod.com/swagger/orders",
                    "scalability": "Horizontally scalable via Azure Functions.",
                    "deployment": "CI/CD pipeline with Azure DevOps.",
                    "linkToDocs": "https://docs.pod.com/orders",
                    "trigger": "HTTP Trigger"  // Added trigger type
                },
                {
                    "name": "Inventory Service",
                    "description": "Manages stock levels and updates inventory in real time.",
                    "openApiUrl": "https://api.pod.com/swagger/inventory",
                    "scalability": "Uses Cosmos DB for global distribution.",
                    "deployment": "Azure Functions integrated with Cosmos DB.",
                    "linkToDocs": "https://docs.pod.com/inventory",
                    "trigger": "HTTP Trigger"  // Added trigger type
                },
                {
                    "name": "3D Print Job Scheduler",
                    "description": "Schedules and assigns 3D print jobs based on printer availability.",
                    "openApiUrl": "https://api.pod.com/swagger/print-jobs",
                    "scalability": "Queue-based scheduling via Azure Service Bus.",
                    "deployment": "Azure Functions triggered by Service Bus queues.",
                    "linkToDocs": "https://docs.pod.com/print-jobs",
                    "trigger": "HTTP Trigger"  // Added trigger type
                }
            ],
            "devOps": "CI/CD implemented via Azure DevOps for continuous deployments.",
            "sourceCodeUrl": "",
            "seeAlso": [
                {
                    "name": "A secured microservice template",
                    "url": "#"
                },
                {
                    "name": "Auth Flow",
                    "url": "#"
                },
                {
                    "name": "GoogleMaps Client",
                    "url": "#"
                },
            ],
            "tags": [".NET", "Azure", "Microservices", "CosmosDB", "Service Bus"]
        }
    },
    {
        "id": 6,
        "uuid": "d1f669b6-49b8-48df-b4b4-53a47e5c92a2",
        "name": "AzureWheels",
        "description": "A bike rent application inspired from AZ 204",
        "isDemoReady": false,
        "demoUrl": "https://fulfill3d.com/azure-wheels-demo",
        "wikiUrl": "/projects/[id]/",
        "imageUrl": "/images/azure-wheels.png",
        "tags": ["Bike", "Rental", "MVP"],
        "status": "draft",
        "isWikiReady": false,
        "wiki": {
            "name": "POD (Print-On-Demand)",
            "purpose": "To automate order processing and 3D printing jobs from e-commerce platforms.",
            "projectType": "Enterprise-Level Azure Function-Based Microservice Architecture",
            "overview": "A cloud-based backend system that integrates multiple e-commerce platforms and automates 3D printing processes.",
            "features": [
                "Webhook notifications for order updates",
                "Real-time inventory tracking",
                "Asynchronous job scheduling for 3D printing"
            ],
            "technologyStack": [
                ".NET Core",
                "Azure Functions",
                "Cosmos DB",
                "Azure Service Bus",
                "SQL Server"
            ],
            "architecture": "Microservice architecture with event-driven design using Azure Service Bus and Functions.",
            "useCases": [
                "Automated order management",
                "3D printing job scheduling",
                "E-commerce platform integration"
            ],
            "microservices": [
                {
                    "name": "Order Service",
                    "description": "Handles incoming orders from e-commerce platforms.",
                    "openApiUrl": "https://api.pod.com/swagger/orders",
                    "scalability": "Horizontally scalable via Azure Functions.",
                    "deployment": "CI/CD pipeline with Azure DevOps.",
                    "linkToDocs": "https://docs.pod.com/orders",
                    "trigger": "HTTP Trigger"  // Added trigger type
                },
                {
                    "name": "Inventory Service",
                    "description": "Manages stock levels and updates inventory in real time.",
                    "openApiUrl": "https://api.pod.com/swagger/inventory",
                    "scalability": "Uses Cosmos DB for global distribution.",
                    "deployment": "Azure Functions integrated with Cosmos DB.",
                    "linkToDocs": "https://docs.pod.com/inventory",
                    "trigger": "HTTP Trigger"  // Added trigger type
                },
                {
                    "name": "3D Print Job Scheduler",
                    "description": "Schedules and assigns 3D print jobs based on printer availability.",
                    "openApiUrl": "https://api.pod.com/swagger/print-jobs",
                    "scalability": "Queue-based scheduling via Azure Service Bus.",
                    "deployment": "Azure Functions triggered by Service Bus queues.",
                    "linkToDocs": "https://docs.pod.com/print-jobs",
                    "trigger": "HTTP Trigger"  // Added trigger type
                }
            ],
            "devOps": "CI/CD implemented via Azure DevOps for continuous deployments.",
            "sourceCodeUrl": "",
            "seeAlso": [
                {
                    "name": "A secured microservice template",
                    "url": "#"
                },
                {
                    "name": "Auth Flow",
                    "url": "#"
                },
                {
                    "name": "GoogleMaps Client",
                    "url": "#"
                },
            ],
            "tags": [".NET", "Azure", "Microservices", "CosmosDB", "Service Bus"]
        }
    },
    {
        "id": 7,
        "uuid": "39d0a21b-e3d5-4bbd-9b20-312bf2a08c7e",
        "name": "AzurePlates",
        "description": "A nearby restaurants app to order from",
        "isDemoReady": false,
        "demoUrl": "https://fulfill3d.com/azure-plates-demo",
        "wikiUrl": "/projects/[id]/",
        "imageUrl": "/images/azure-plates.png",
        "tags": ["Food", "Restaurant", "Delivery"],
        "status": "draft",
        "isWikiReady": false,
        "wiki": {
            "name": "POD (Print-On-Demand)",
            "purpose": "To automate order processing and 3D printing jobs from e-commerce platforms.",
            "projectType": "Enterprise-Level Azure Function-Based Microservice Architecture",
            "overview": "A cloud-based backend system that integrates multiple e-commerce platforms and automates 3D printing processes.",
            "features": [
                "Webhook notifications for order updates",
                "Real-time inventory tracking",
                "Asynchronous job scheduling for 3D printing"
            ],
            "technologyStack": [
                ".NET Core",
                "Azure Functions",
                "Cosmos DB",
                "Azure Service Bus",
                "SQL Server"
            ],
            "architecture": "Microservice architecture with event-driven design using Azure Service Bus and Functions.",
            "useCases": [
                "Automated order management",
                "3D printing job scheduling",
                "E-commerce platform integration"
            ],
            "microservices": [
                {
                    "name": "Order Service",
                    "description": "Handles incoming orders from e-commerce platforms.",
                    "openApiUrl": "https://api.pod.com/swagger/orders",
                    "scalability": "Horizontally scalable via Azure Functions.",
                    "deployment": "CI/CD pipeline with Azure DevOps.",
                    "linkToDocs": "https://docs.pod.com/orders",
                    "trigger": "HTTP Trigger"  // Added trigger type
                },
                {
                    "name": "Inventory Service",
                    "description": "Manages stock levels and updates inventory in real time.",
                    "openApiUrl": "https://api.pod.com/swagger/inventory",
                    "scalability": "Uses Cosmos DB for global distribution.",
                    "deployment": "Azure Functions integrated with Cosmos DB.",
                    "linkToDocs": "https://docs.pod.com/inventory",
                    "trigger": "HTTP Trigger"  // Added trigger type
                },
                {
                    "name": "3D Print Job Scheduler",
                    "description": "Schedules and assigns 3D print jobs based on printer availability.",
                    "openApiUrl": "https://api.pod.com/swagger/print-jobs",
                    "scalability": "Queue-based scheduling via Azure Service Bus.",
                    "deployment": "Azure Functions triggered by Service Bus queues.",
                    "linkToDocs": "https://docs.pod.com/print-jobs",
                    "trigger": "HTTP Trigger"  // Added trigger type
                }
            ],
            "devOps": "CI/CD implemented via Azure DevOps for continuous deployments.",
            "sourceCodeUrl": "",
            "seeAlso": [
                {
                    "name": "A secured microservice template",
                    "url": "#"
                },
                {
                    "name": "Auth Flow",
                    "url": "#"
                },
                {
                    "name": "GoogleMaps Client",
                    "url": "#"
                },
            ],
            "tags": [".NET", "Azure", "Microservices", "CosmosDB", "Service Bus"]
        }
    }
];
