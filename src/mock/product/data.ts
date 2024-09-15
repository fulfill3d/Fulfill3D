export const mockProductList = [
    {
        "id": "pod",
        "name": "POD",
        "description": "Print-on-Demand platform with full integration capabilities.",
        "demoUrl": "https://fulfill3d.com/pod-demo",
        "wikiUrl": "/projects/wiki/",
        "imageUrl": "/images/pod.png",
        "tags": ["Integration", "E-commerce", "Print"]
    },
    {
        "id": "dstudio",
        "name": "DStudio",
        "description": "3D design studio for custom project creation.",
        "demoUrl": "https://fulfill3d.com/dstudio-demo",
        "wikiUrl": "/projects/wiki/",
        "imageUrl": "/images/dstudio.png",
        "tags": ["3D", "Design", "Customization"]
    },
    {
        "id": "crm",
        "name": "CRM",
        "description": "Customer Relationship Management platform tailored for small businesses.",
        "demoUrl": "https://fulfill3d.com/crm-demo",
        "wikiUrl": "/projects/wiki/",
        "imageUrl": "/images/crm.png",
        "tags": ["Business", "Customer", "Management"]
    },
    {
        "id": "simple-payment",
        "name": "SimplePayment",
        "description": "A simple payment system to demonstrate loosely coupled microservices architecture.",
        "demoUrl": "https://fulfill3d.com/simple-payment-demo",
        "wikiUrl": "/projects/wiki/",
        "imageUrl": "/images/simple-payment.png",
        "tags": ["Stripe", "Customer", "Payment"]
    },
    {
        "id": "chat-box",
        "name": "ChatBox",
        "description": "This is a SaaS for AI backed live chat box for a customer service",
        "demoUrl": "https://fulfill3d.com/chat-box-demo",
        "wikiUrl": "/projects/wiki/",
        "imageUrl": "/images/chat-box.png",
        "tags": ["OpenAI", "Customer", "SaaS"]
    },
    {
        "id": "azure-wheels",
        "name": "AzureWheels",
        "description": "A bike rent application inspired from AZ 204",
        "demoUrl": "https://fulfill3d.com/azure-wheels-demo",
        "wikiUrl": "/projects/wiki/",
        "imageUrl": "/images/azure-wheels.png",
        "tags": ["Bike", "Rental", "MVP"]
    },
    {
        "id": "azure-plates",
        "name": "AzurePlates",
        "description": "A nearby restaurants app to order from",
        "demoUrl": "https://fulfill3d.com/azure-plates-demo",
        "wikiUrl": "/projects/wiki/",
        "imageUrl": "/images/azure-plates.png",
        "tags": ["Food", "Restaurant", "Delivery"]
    }
];


export const mockProductWiki = [
    {
        "id": "1",
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
        "apiDocumentation": "Swagger documentation available for all microservices.",
        "performance": "Optimized to handle 10,000+ daily orders with minimal latency.",
        "scalingStrategies": "Horizontally scalable using Azure Functions and Service Bus.",
        "devOps": "CI/CD implemented via Azure DevOps for continuous deployments.",
        "ciCdPipeline": "Automated testing and deployment pipelines ensure quality and reliability.",
        "challenges": [
            "Managing concurrency with Cosmos DB",
            "Scaling APIs for large e-commerce platforms"
        ],
        "learnings": [
            "Gained expertise in Azure Functions and Cosmos DB",
            "Improved skills in event-driven architecture"
        ],
        "futureDevelopment": "Add support for additional e-commerce platforms like Amazon.",
        "demoUrl": "https://demo.pod.com",
        "sourceCodeUrl": "https://github.com/user/pod-backend",
        "tags": [".NET", "Azure", "Microservices", "CosmosDB", "Service Bus"]
    }
]
