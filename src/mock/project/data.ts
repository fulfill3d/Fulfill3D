export const projectList = [
    {
        "id": 1,
        "name": "CRM",
        "description": "Customer relationship management tailored for small businesses.",
        "demoUrl": "https://crm.fulfill3d.com/",
        "imageUrl": "/crm.png",
        "tags": ["Appointment", "Small Business", "CRM"],
        "status": "active",
        "wiki": {
            "name": "CRM",
            "purpose": "Developing an MVP/PoC for `Square Appointment` alike web app",
            "projectType": "MVP (Minimum Viable Product)",
            "overview": "A cloud-based backend system where businesses could manage their stores, employees, services, appointments and where clients could manage and book an appointment from nearby services",
            "features": [
                "Secure APIs with JWT-based authentication/authorization",
                "Azure AD B2C for IdP",
                "Microservices with clean code",
                "Database migration with FluentMigrator",
                "Azure App Configuration to store config values",
                "Azure Key Vaults to store sensitive data (api keys, secrets)",
                "Connecting to Google Maps API with a custom RestSharp client"
            ],
            "technologyStack": [
                ".NET 8",
                "Azure Functions",
                "Azure SQL Server",
                "Azure App Configuration",
                "Azure Key Vaults"
            ],
            "architecture": "Microservice architecture with event-driven design using Azure Functions.",
            "useCases": [
                "Manage services/employees/appointments of a specific store",
                "Manage stores of a business",
                "Get nearby services as a client (Google Maps API)",
                "Book a service based on availability"
            ],
            "microservices": [
                {
                    "name": "CRM.API.Client.Identity",
                    "description": "Handles and manages client profile",
                    "scalability": "Horizontally scalable via Azure Functions.",
                    "deployment": "CI/CD pipeline with Azure DevOps.",
                    "trigger": "HTTP Trigger"
                },
                {
                    "name": "CRM.API.Client.Appointment",
                    "description": "Handles and manages client appointments",
                    "scalability": "Horizontally scalable via Azure Functions.",
                    "deployment": "CI/CD pipeline with Azure DevOps.",
                    "trigger": "HTTP Trigger"
                },
                {
                    "name": "CRM.API.Client.Service",
                    "description": "Handles nearby services",
                    "scalability": "Horizontally scalable via Azure Functions.",
                    "deployment": "CI/CD pipeline with Azure DevOps.",
                    "trigger": "HTTP Trigger"
                },
                {
                    "name": "CRM.API.Business.Identity",
                    "description": "Handles and manages business profile",
                    "scalability": "Horizontally scalable via Azure Functions.",
                    "deployment": "CI/CD pipeline with Azure DevOps.",
                    "trigger": "HTTP Trigger"
                },
                {
                    "name": "CRM.API.Business.Appointment",
                    "description": "Handles and manages business appointments",
                    "scalability": "Horizontally scalable via Azure Functions.",
                    "deployment": "CI/CD pipeline with Azure DevOps.",
                    "trigger": "HTTP Trigger"
                },
                {
                    "name": "CRM.API.Business.Management",
                    "description": "Handles and manage all business related jobs",
                    "scalability": "Horizontally scalable via Azure Functions.",
                    "deployment": "CI/CD pipeline with Azure DevOps.",
                    "trigger": "HTTP Trigger"
                }
            ],
            "devOps": "CI/CD implemented via Azure DevOps for continuous deployments.",
            "sourceCodeUrl": "",
            "seeAlso": [
                {
                    "name": "A secured microservice template",
                    "url": "/5"
                },
                {
                    "name": "Auth Flow",
                    "url": "/6"
                },
                {
                    "name": "GoogleMaps Client",
                    "url": "/3"
                },
            ],
            "tags": [".NET", "Azure", "Microservices", "CosmosDB", "Service Bus"]
        }
    },
    {
        "id": 2,
        "name": "POD",
        "description": "Print-on-Demand platform with full integration capabilities.",
        "demoUrl": "https://pod.fulfill3d.com/",
        "imageUrl": "/images/pod.png",
        "tags": ["3D Print", "Print-on-Demand", "E-commerce"],
        "status": "draft",
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
        "id": 3,
        "name": "DStudio",
        "description": "3D project design studio SaaS",
        "demoUrl": "https://dstudio.fulfill3d.com/",
        "wikiUrl": "/projects/[id]/",
        "imageUrl": "/images/dstudio.png",
        "tags": ["3D", "Product Designer", "SaaS"],
        "status": "draft",
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
        "id": 3,
        "name": "SimplePayment",
        "description": "A simple payment system to demonstrate loosely coupled microservices architecture.",
        "demoUrl": "https://fulfill3d.com/simple-payment-demo",
        "wikiUrl": "/projects/[id]/",
        "imageUrl": "/images/simple-payment.png",
        "tags": ["Stripe", "Customer", "Payment"],
        "status": "draft",
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
        "id": 4,
        "name": "ChatBox",
        "description": "This is a SaaS for AI backed live chat box for a customer service",
        "demoUrl": "https://fulfill3d.com/chat-box-demo",
        "wikiUrl": "/projects/[id]/",
        "imageUrl": "/images/chat-box.png",
        "tags": ["OpenAI", "Customer", "SaaS"],
        "status": "draft",
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
        "id": 5,
        "name": "AzureWheels",
        "description": "A bike rent application inspired from AZ 204",
        "demoUrl": "https://fulfill3d.com/azure-wheels-demo",
        "wikiUrl": "/projects/[id]/",
        "imageUrl": "/images/azure-wheels.png",
        "tags": ["Bike", "Rental", "MVP"],
        "status": "draft",
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
        "name": "AzurePlates",
        "description": "A nearby restaurants app to order from",
        "demoUrl": "https://fulfill3d.com/azure-plates-demo",
        "wikiUrl": "/projects/[id]/",
        "imageUrl": "/images/azure-plates.png",
        "tags": ["Food", "Restaurant", "Delivery"],
        "status": "draft",
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
