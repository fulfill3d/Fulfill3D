export const projectList = [
    {
        "id": 1,
        "uuid": "eee2bdbd-e460-46b9-b793-5b3c9a02e98a",
        "name": "CRM",
        "description": "A cloud-based customer relationship management platform tailored for small businesses to manage services, appointments, and client relationships effectively.",
        "imageUrl": "/crm.png",
        "tags": ["CRM", "Appointment", "Small Business"],
        "status": "active",
        "wiki": {
            "name": "CRM (Customer Relationship Management)",
            "tags": [
                ".NET 8",
                "Azure Functions",
                "Azure SQL Server",
                "Azure App Configuration",
                "Azure Key Vault",
                "Azure AD B2C",
                "JWT",
                "RESTful API",
                "CI/CD",
                "FluentMigrator",
                "Entity Framework Core",
                "Google Maps API",
                "Azure DevOps",
                "Microservices",
                "Serverless",
                "Dependency Injection",
                "TailwindCSS",
                "NextJS",
                "OAuth 2.0",
                "JSON Web Tokens"
            ],
            "technologyStack": [
                ".NET 8",
                "Azure Functions",
                "Azure SQL Server",
                "Azure App Configuration",
                "Azure Key Vaults",
                "Azure AD B2C",
                "NextJS",
                "TailwindCSS"
            ],
            "overview": "CRM is a cloud-based backend system designed for small businesses to manage their stores, employees, services, and appointments, while clients can find and book nearby services with ease. The platform supports secure APIs with JWT-based authentication and authorization, integrates with Azure AD B2C for identity management, and follows a microservices architecture for scalable and efficient operations. Admins can manage business profiles, service offerings, and employee schedules, while clients can explore services using Google Maps integration and book appointments based on real-time availability. The system leverages Azure services like App Configuration for managing settings, Key Vaults for secure storage, and FluentMigrator for database migrations, making it a robust solution for managing customer relationships and appointments effectively.",
            "features": [
                "Microservice architecture built with .NET 8 for modular, maintainable, and scalable services.",
                "Asynchronous processing using Azure Functions for scalable and resilient service execution.",
                "Scalable and extensible RESTful API design, adhering to best practices for future integrations.",
                "JWT-based authentication and authorization to secure APIs and manage scope-based permissions.",
                "Integration with Azure AD B2C for identity management, providing a scalable identity provider.",
                "Centralized configuration management using Azure App Configuration for dynamic setting updates.",
                "Secure storage of sensitive data using Azure Key Vaults for API keys, secrets, and certificates.",
                "Real-time data management and appointment booking using Azure SQL Server for efficient handling.",
                "Automated database schema management using FluentMigrator for version control and migrations.",
                "Google Maps API integration via RestSharp client for location-based services and navigation.",
                "Automated CI/CD pipelines with Azure DevOps for continuous integration and deployment."
            ],
            "useCases": [
                "Businesses managing their profiles, stores, store employees, store services, and store appointments.",
                "Clients managing their profiles, finding nearby services, and booking or canceling appointments."
            ],
            "architecture": {
                "description": [
                    "Microservice architecture with event-driven design using Azure Functions. Each microservice is responsible for specific tasks such as managing business profiles, store services, employees, and client appointments. Azure Functions provide serverless execution and scalability, supporting real-time appointment booking and data management. The system is built with clean code principles, ensuring it remains maintainable, scalable, and adaptable for future enhancements."
                ],
                "diagram": {
                    "description": "Image shows the basic architecture diagram",
                    "url": "/crm-architecture.png"
                }
            },
            "microservices": [
                {
                    "name": "CRM.API.Client.Identity",
                    "type": "Azure Function App",
                    "description": "Manage client profiles and authentication.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "devOps": [
                        {
                            "name": "ci-client-identity.yml",
                            "description": "Continuous integration pipeline for the microservice, that also benefits from the project pipeline template.",
                            "type": "CI",
                            "yml": "trigger:\n  branches:\n    include:\n      - main\n  paths:\n    include:\n        // list of paths that is related to the microservice\n\nvariables:\n  vmImageName: 'windows-latest'\n  workingDirectory: '$(System.DefaultWorkingDirectory)/${function-project-path}'\n  packageName: ${package-name}\n\nsteps:\n  - template: ${ci-pipeline-template-path}\n"
                        },
                        {
                            "name": "cd-client-identity.yml",
                            "description": "Continuous deployment pipeline for the microservice, that also benefits from the project pipeline template.",
                            "type": "CD",
                            "yml": "trigger: none\npr: none\n\npool:\n  vmImage: 'windows-latest'\n\nvariables:\n  ciPipeline: ${ci-pipeline}\n  functionAppName: ${function-app-name}\n  packageName: ${package-name}\n  project: ${project-name}\n\nresources:\n  pipelines:\n    - pipeline: ${ci-pipeline}\n      source: ${ci-pipeline}\n      trigger: true\n\nsteps:\n  - template: ${cd-pipeline-template-path}\n"
                        }
                    ],
                    "functions": [
                        {
                            "name": "PostRegister",
                            "path": "/post-register",
                            "description": "This is a callback function of Azure Active Directory B2C. B2C callbacks here after successful sign up/sign in with authorization_code. PostRegister verifies that authorization_code, get an id_token and create a Client entity in the database",
                            "trigger": "HTTP",
                            "method": ["GET", "POST"],
                            "request": "",
                            "response": ""
                        },
                        {
                            "name": "PostUpdate",
                            "path": "/post-update",
                            "description": "This is a callback function of Azure Active Directory B2C. B2C callbacks here after successful profile edit in with authorization_code. PostUpdate verifies that authorization_code, get an id_token and update the Client entity in the database",
                            "trigger": "HTTP",
                            "method": ["GET", "POST"],
                            "request": "",
                            "response": ""
                        }
                    ]
                },
                {
                    "name": "CRM.API.Client.Appointment",
                    "type": "Azure Function App",
                    "description": "Handle client appointments and bookings.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "devOps": [
                        {
                            "name": "ci-client-appointment.yml",
                            "description": "Continuous integration pipeline for the microservice, that also benefits from the project pipeline template.",
                            "type": "CI",
                            "yml": "trigger:\n  branches:\n    include:\n      - main\n  paths:\n    include:\n        // list of paths that is related to the microservice\n\nvariables:\n  vmImageName: 'windows-latest'\n  workingDirectory: '$(System.DefaultWorkingDirectory)/${function-project-path}'\n  packageName: ${package-name}\n\nsteps:\n  - template: ${ci-pipeline-template-path}\n"
                        },
                        {
                            "name": "cd-client-appointment.yml",
                            "description": "Continuous deployment pipeline for the microservice, that also benefits from the project pipeline template.",
                            "type": "CD",
                            "yml": "trigger: none\npr: none\n\npool:\n  vmImage: 'windows-latest'\n\nvariables:\n  ciPipeline: ${ci-pipeline}\n  functionAppName: ${function-app-name}\n  packageName: ${package-name}\n  project: ${project-name}\n\nresources:\n  pipelines:\n    - pipeline: ${ci-pipeline}\n      source: ${ci-pipeline}\n      trigger: true\n\nsteps:\n  - template: ${cd-pipeline-template-path}\n"
                        }
                    ],
                    "functions": [
                        {
                            "name": "GetAppointments",
                            "path": "/appointment/get-all",
                            "description": "Returns client appointments",
                            "trigger": "HTTP",
                            "method": ["GET"],
                            "request": "",
                            "response": "[{\n  \"appointment_id\": 0,\n  \"appointment_notes\": \"string\",\n  \"appointment_start_date\": \"2024-10-04T02:45:05.620Z\",\n  \"appointment_status\": 0,\n  \"appointment_address\": {\n    \"location_lat\": 0,\n    \"location_lon\": 0,\n    \"address_street1\": \"string\",\n    \"address_street2\": \"string\",\n    \"address_city\": \"string\",\n    \"address_state\": \"string\",\n    \"address_country\": \"string\",\n    \"address_zip_code\": \"string\"\n  },\n  \"appointment_service\": {\n    \"service_id\": 0,\n    \"service_duration\": 0,\n    \"service_price\": 0,\n    \"service_currency\": \"string\",\n    \"service_name\": \"string\",\n    \"service_description\": \"string\"\n  }\n}]"
                        },
                        {
                            "name": "SetAppointment",
                            "path": "/appointment/set",
                            "description": "Set the appointment",
                            "trigger": "HTTP",
                            "method": ["POST"],
                            "request": "{\n  \"store_service_id\": 0,\n  \"start_date\": \"2024-10-04T02:48:09.829Z\",\n  \"note\": \"string\"\n}",
                            "response": ""
                        },
                        {
                            "name": "UpdateAppointment",
                            "path": "/appointment/update",
                            "description": "Update the appointment",
                            "trigger": "HTTP",
                            "method": ["PATCH"],
                            "request": "{\n  \"store_service_id\": 0,\n  \"start_date\": \"2024-10-04T02:48:09.829Z\",\n  \"note\": \"string\"\n}",
                            "response": ""
                        },
                        {
                            "name": "CancelAppointment",
                            "path": "/appointment/cancel/{appointmentId}",
                            "description": "Cancel the appointment",
                            "trigger": "HTTP",
                            "method": ["DELETE"],
                            "request": "",
                            "response": ""
                        }
                    ]
                },
                {
                    "name": "CRM.API.Client.Service",
                    "type": "Azure Function App",
                    "description": "Provide nearby service listings for clients.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "devOps": [
                        {
                            "name": "ci-client-service.yml",
                            "description": "Continuous integration pipeline for the microservice, that also benefits from the project pipeline template.",
                            "type": "CI",
                            "yml": "trigger:\n  branches:\n    include:\n      - main\n  paths:\n    include:\n        // list of paths that is related to the microservice\n\nvariables:\n  vmImageName: 'windows-latest'\n  workingDirectory: '$(System.DefaultWorkingDirectory)/${function-project-path}'\n  packageName: ${package-name}\n\nsteps:\n  - template: ${ci-pipeline-template-path}\n"
                        },
                        {
                            "name": "cd-client-service.yml",
                            "description": "Continuous deployment pipeline for the microservice, that also benefits from the project pipeline template.",
                            "type": "CD",
                            "yml": "trigger: none\npr: none\n\npool:\n  vmImage: 'windows-latest'\n\nvariables:\n  ciPipeline: ${ci-pipeline}\n  functionAppName: ${function-app-name}\n  packageName: ${package-name}\n  project: ${project-name}\n\nresources:\n  pipelines:\n    - pipeline: ${ci-pipeline}\n      source: ${ci-pipeline}\n      trigger: true\n\nsteps:\n  - template: ${cd-pipeline-template-path}\n"
                        }
                    ],
                    "functions": [
                        {
                            "name": "GetServices",
                            "path": "/services/get-all",
                            "description": "The Services within given range and filter query parameters. Provide a correct zip code to get nearby services",
                            "trigger": "HTTP",
                            "method": ["GET"],
                            "request": "",
                            "response": "[{\n  \"id\": 0,\n  \"duration\": 0,\n  \"price\": 0,\n  \"name\": \"string\",\n  \"description\": \"string\",\n  \"categories\": [\n    {\n      \"id\": 0,\n      \"name\": \"string\",\n      \"description\": \"string\",\n      \"sub_categories\": [\n        {\n          \"id\": 0,\n          \"name\": \"string\",\n          \"description\": \"string\"\n        }\n      ]\n    }\n  ]\n}]"
                        },
                        {
                            "name": "GetService",
                            "path": "/services/get/{serviceId}",
                            "description": "Get a service in detail",
                            "trigger": "HTTP",
                            "method": ["GET"],
                            "request": "",
                            "response": "[{\n  \"service_id\": 0,\n  \"service_duration\": 0,\n  \"service_price\": 0.0,\n  \"service_name\": \"string\",\n  \"service_description\": \"string\",\n  \"store_id\": 0,\n  \"store_name\": \"string\",\n  \"store_description\": \"string\",\n  \"location_lat\": 0.0,\n  \"location_lon\": 0.0,\n  \"address_street1\": \"string\",\n  \"address_street2\": \"string\",\n  \"address_city\": \"string\",\n  \"address_state\": \"string\",\n  \"address_country\": \"string\",\n  \"address_zip_code\": \"string\",\n  \"store_employees\": [\n    {\n      \"employee_id\": 0,\n      \"employee_nick_name\": \"string\"\n    }\n  ]\n}]"
                        }
                    ]
                },
                {
                    "name": "CRM.API.Business.Identity",
                    "type": "Azure Function App",
                    "description": "Manage business profiles and authentication.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "devOps": [
                        {
                            "name": "ci-business-identity.yml",
                            "description": "Continuous integration pipeline for the microservice, that also benefits from the project pipeline template.",
                            "type": "CI",
                            "yml": "trigger:\n  branches:\n    include:\n      - main\n  paths:\n    include:\n        // list of paths that is related to the microservice\n\nvariables:\n  vmImageName: 'windows-latest'\n  workingDirectory: '$(System.DefaultWorkingDirectory)/${function-project-path}'\n  packageName: ${package-name}\n\nsteps:\n  - template: ${ci-pipeline-template-path}\n"
                        },
                        {
                            "name": "cd-business-identity.yml",
                            "description": "Continuous deployment pipeline for the microservice, that also benefits from the project pipeline template.",
                            "type": "CD",
                            "yml": "trigger: none\npr: none\n\npool:\n  vmImage: 'windows-latest'\n\nvariables:\n  ciPipeline: ${ci-pipeline}\n  functionAppName: ${function-app-name}\n  packageName: ${package-name}\n  project: ${project-name}\n\nresources:\n  pipelines:\n    - pipeline: ${ci-pipeline}\n      source: ${ci-pipeline}\n      trigger: true\n\nsteps:\n  - template: ${cd-pipeline-template-path}\n"
                        }
                    ],
                    "functions": [
                        {
                            "name": "PostRegister",
                            "path": "/post-register",
                            "description": "This is a callback function of Azure Active Directory B2C. B2C callbacks here after successful sign up/sign in with authorization_code. PostRegister verifies that authorization_code, get an id_token and create a Business entity in the database",
                            "trigger": "HTTP",
                            "method": ["GET", "POST"],
                            "request": "",
                            "response": ""
                        },
                        {
                            "name": "PostUpdate",
                            "path": "/post-update",
                            "description": "This is a callback function of Azure Active Directory B2C. B2C callbacks here after successful profile edit in with authorization_code. PostUpdate verifies that authorization_code, get an id_token and update the Business entity in the database",
                            "trigger": "HTTP",
                            "method": ["GET", "POST"],
                            "request": "",
                            "response": ""
                        }
                    ]
                },
                {
                    "name": "CRM.API.Business.Appointment",
                    "type": "Azure Function App",
                    "description": "Manage business appointments and scheduling.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "devOps": [
                        {
                            "name": "ci-business-appointment.yml",
                            "description": "Continuous integration pipeline for the microservice, that also benefits from the project pipeline template.",
                            "type": "CI",
                            "yml": "trigger:\n  branches:\n    include:\n      - main\n  paths:\n    include:\n        // list of paths that is related to the microservice\n\nvariables:\n  vmImageName: 'windows-latest'\n  workingDirectory: '$(System.DefaultWorkingDirectory)/${function-project-path}'\n  packageName: ${package-name}\n\nsteps:\n  - template: ${ci-pipeline-template-path}\n"
                        },
                        {
                            "name": "cd-business-appointment.yml",
                            "description": "Continuous deployment pipeline for the microservice, that also benefits from the project pipeline template.",
                            "type": "CD",
                            "yml": "trigger: none\npr: none\n\npool:\n  vmImage: 'windows-latest'\n\nvariables:\n  ciPipeline: ${ci-pipeline}\n  functionAppName: ${function-app-name}\n  packageName: ${package-name}\n  project: ${project-name}\n\nresources:\n  pipelines:\n    - pipeline: ${ci-pipeline}\n      source: ${ci-pipeline}\n      trigger: true\n\nsteps:\n  - template: ${cd-pipeline-template-path}\n"
                        }
                    ],
                    "functions": []
                },
                {
                    "name": "CRM.API.Business.Store",
                    "type": "Azure Function App",
                    "description": "Manage business stores.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "devOps": [
                        {
                            "name": "ci-business-management.yml",
                            "description": "Continuous integration pipeline for the microservice, that also benefits from the project pipeline template.",
                            "type": "CI",
                            "yml": "trigger:\n  branches:\n    include:\n      - main\n  paths:\n    include:\n        // list of paths that is related to the microservice\n\nvariables:\n  vmImageName: 'windows-latest'\n  workingDirectory: '$(System.DefaultWorkingDirectory)/${function-project-path}'\n  packageName: ${package-name}\n\nsteps:\n  - template: ${ci-pipeline-template-path}\n"
                        },
                        {
                            "name": "cd-business-management.yml",
                            "description": "Continuous deployment pipeline for the microservice, that also benefits from the project pipeline template.",
                            "type": "CD",
                            "yml": "trigger: none\npr: none\n\npool:\n  vmImage: 'windows-latest'\n\nvariables:\n  ciPipeline: ${ci-pipeline}\n  functionAppName: ${function-app-name}\n  packageName: ${package-name}\n  project: ${project-name}\n\nresources:\n  pipelines:\n    - pipeline: ${ci-pipeline}\n      source: ${ci-pipeline}\n      trigger: true\n\nsteps:\n  - template: ${cd-pipeline-template-path}\n"
                        }
                    ],
                    "functions": [
                        {
                            "name": "GetStores",
                            "path": "/store/get-all",
                            "description": "Get all stores of the business",
                            "trigger": "HTTP",
                            "method": ["GET"],
                            "request": "",
                            "response": "[\n  {\n    \"id\": 0,\n    \"name\": \"string\",\n    \"description\": \"string\",\n    \"created_at\": \"2024-10-06T19:16:51.985Z\",\n    \"updated_at\": \"2024-10-06T19:16:51.985Z\",\n    \"location\": {\n      \"location_id\": 0,\n      \"address_id\": 0,\n      \"created_at\": \"2024-10-06T19:16:51.985Z\",\n      \"updated_at\": \"2024-10-06T19:16:51.985Z\",\n      \"location_name\": \"string\",\n      \"latitude\": 0,\n      \"longitude\": 0,\n      \"address_first_name\": \"string\",\n      \"address_last_name\": \"string\",\n      \"street1\": \"string\",\n      \"street2\": \"string\",\n      \"city\": \"string\",\n      \"state\": \"string\",\n      \"country\": \"string\",\n      \"zip_code\": \"string\"\n    },\n    \"employees\": [\n      {\n        \"id\": 0,\n        \"nick_name\": \"string\",\n        \"first_name\": \"string\",\n        \"last_name\": \"string\",\n        \"e_mail\": \"string\",\n        \"phone\": \"string\",\n        \"created_at\": \"2024-10-06T19:16:51.986Z\",\n        \"updated_at\": \"2024-10-06T19:16:51.986Z\"\n      }\n    ]\n  }\n]"
                        },
                        {
                            "name": "GetStore",
                            "path": "/store/get/{storeId}",
                            "description": "Get a store of the business",
                            "trigger": "HTTP",
                            "method": ["GET"],
                            "request": "",
                            "response": "{\n  \"id\": 0,\n  \"name\": \"string\",\n  \"description\": \"string\",\n  \"created_at\": \"2024-10-06T19:18:55.821Z\",\n  \"updated_at\": \"2024-10-06T19:18:55.821Z\",\n  \"location\": {\n    \"location_id\": 0,\n    \"address_id\": 0,\n    \"created_at\": \"2024-10-06T19:18:55.821Z\",\n    \"updated_at\": \"2024-10-06T19:18:55.821Z\",\n    \"location_name\": \"string\",\n    \"latitude\": 0,\n    \"longitude\": 0,\n    \"address_first_name\": \"string\",\n    \"address_last_name\": \"string\",\n    \"street1\": \"string\",\n    \"street2\": \"string\",\n    \"city\": \"string\",\n    \"state\": \"string\",\n    \"country\": \"string\",\n    \"zip_code\": \"string\"\n  },\n  \"employees\": [\n    {\n      \"id\": 0,\n      \"nick_name\": \"string\",\n      \"first_name\": \"string\",\n      \"last_name\": \"string\",\n      \"e_mail\": \"string\",\n      \"phone\": \"string\",\n      \"created_at\": \"2024-10-06T19:18:55.821Z\",\n      \"updated_at\": \"2024-10-06T19:18:55.821Z\"\n    }\n  ]\n}"
                        },
                        {
                            "name": "AddStore",
                            "path": "/store/add",
                            "description": "Add a store to the business",
                            "trigger": "HTTP",
                            "method": ["POST"],
                            "request": "{\n  \"id\": 0,\n  \"name\": \"string\",\n  \"description\": \"string\",\n  \"address\": {\n    \"id\": 0,\n    \"location_name\": \"string\",\n    \"first_name\": \"string\",\n    \"last_name\": \"string\",\n    \"street1\": \"string\",\n    \"street2\": \"string\",\n    \"city\": \"string\",\n    \"state\": \"string\",\n    \"country\": \"string\",\n    \"zip_code\": \"string\"\n  }\n}",
                            "response": ""
                        },
                        {
                            "name": "EditStore",
                            "path": "/store/edit",
                            "description": "Edit a store of the business",
                            "trigger": "HTTP",
                            "method": ["PATCH"],
                            "request": "{\n  \"id\": 0,\n  \"name\": \"string\",\n  \"description\": \"string\",\n  \"address\": {\n    \"id\": 0,\n    \"location_name\": \"string\",\n    \"first_name\": \"string\",\n    \"last_name\": \"string\",\n    \"street1\": \"string\",\n    \"street2\": \"string\",\n    \"city\": \"string\",\n    \"state\": \"string\",\n    \"country\": \"string\",\n    \"zip_code\": \"string\"\n  }\n}",
                            "response": ""
                        },
                        {
                            "name": "DeleteStore",
                            "path": "/store/delete/{storeId}",
                            "description": "Delete a store of the business",
                            "trigger": "HTTP",
                            "method": ["DELETE"],
                            "request": "",
                            "response": ""
                        }
                    ]
                },
                {
                    "name": "CRM.API.Business.Employee",
                    "type": "Azure Function App",
                    "description": "Manage business employees.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "devOps": [
                        {
                            "name": "ci-business-management.yml",
                            "description": "Continuous integration pipeline for the microservice, that also benefits from the project pipeline template.",
                            "type": "CI",
                            "yml": "trigger:\n  branches:\n    include:\n      - main\n  paths:\n    include:\n        // list of paths that is related to the microservice\n\nvariables:\n  vmImageName: 'windows-latest'\n  workingDirectory: '$(System.DefaultWorkingDirectory)/${function-project-path}'\n  packageName: ${package-name}\n\nsteps:\n  - template: ${ci-pipeline-template-path}\n"
                        },
                        {
                            "name": "cd-business-management.yml",
                            "description": "Continuous deployment pipeline for the microservice, that also benefits from the project pipeline template.",
                            "type": "CD",
                            "yml": "trigger: none\npr: none\n\npool:\n  vmImage: 'windows-latest'\n\nvariables:\n  ciPipeline: ${ci-pipeline}\n  functionAppName: ${function-app-name}\n  packageName: ${package-name}\n  project: ${project-name}\n\nresources:\n  pipelines:\n    - pipeline: ${ci-pipeline}\n      source: ${ci-pipeline}\n      trigger: true\n\nsteps:\n  - template: ${cd-pipeline-template-path}\n"
                        }
                    ],
                    "functions": [
                        {
                            "name": "GetEmployees",
                            "path": "/employee/get-all",
                            "description": "Get employees of a store",
                            "trigger": "HTTP",
                            "method": ["GET"],
                            "request": "",
                            "response": "[\n  {\n    \"id\": 0,\n    \"nick_name\": \"string\",\n    \"first_name\": \"string\",\n    \"last_name\": \"string\",\n    \"e_mail\": \"string\",\n    \"phone\": \"string\",\n    \"created_at\": \"2024-10-06T19:23:17.191Z\",\n    \"updated_at\": \"2024-10-06T19:23:17.191Z\"\n  }\n]"
                        },
                        {
                            "name": "AddEmployee",
                            "path": "/employee/add/{storeId}",
                            "description": "Add employee to a store",
                            "trigger": "HTTP",
                            "method": ["POST"],
                            "request": "{\n  \"id\": 0,\n  \"nick_name\": \"string\",\n  \"first_name\": \"string\",\n  \"last_name\": \"string\",\n  \"e_mail\": \"string\",\n  \"phone\": \"string\"\n}",
                            "response": ""
                        },
                        {
                            "name": "EditEmployees",
                            "path": "/employee/edit",
                            "description": "Edit employee of a store",
                            "trigger": "HTTP",
                            "method": ["PATCH"],
                            "request": "{\n  \"id\": 0,\n  \"nick_name\": \"string\",\n  \"first_name\": \"string\",\n  \"last_name\": \"string\",\n  \"e_mail\": \"string\",\n  \"phone\": \"string\"\n}",
                            "response": ""
                        },
                        {
                            "name": "DeleteEmployee",
                            "path": "/employee/delete/{employeeId}",
                            "description": "Delete employee of a store",
                            "trigger": "HTTP",
                            "method": ["DELETE"],
                            "request": "",
                            "response": ""
                        }
                    ]
                },
                {
                    "name": "CRM.API.Business.Service",
                    "type": "Azure Function App",
                    "description": "Manage business services.",
                    "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
                    "devOps": [
                        {
                            "name": "ci-business-management.yml",
                            "description": "Continuous integration pipeline for the microservice, that also benefits from the project pipeline template.",
                            "type": "CI",
                            "yml": "trigger:\n  branches:\n    include:\n      - main\n  paths:\n    include:\n        // list of paths that is related to the microservice\n\nvariables:\n  vmImageName: 'windows-latest'\n  workingDirectory: '$(System.DefaultWorkingDirectory)/${function-project-path}'\n  packageName: ${package-name}\n\nsteps:\n  - template: ${ci-pipeline-template-path}\n"
                        },
                        {
                            "name": "cd-business-management.yml",
                            "description": "Continuous deployment pipeline for the microservice, that also benefits from the project pipeline template.",
                            "type": "CD",
                            "yml": "trigger: none\npr: none\n\npool:\n  vmImage: 'windows-latest'\n\nvariables:\n  ciPipeline: ${ci-pipeline}\n  functionAppName: ${function-app-name}\n  packageName: ${package-name}\n  project: ${project-name}\n\nresources:\n  pipelines:\n    - pipeline: ${ci-pipeline}\n      source: ${ci-pipeline}\n      trigger: true\n\nsteps:\n  - template: ${cd-pipeline-template-path}\n"
                        }
                    ],
                    "functions": [
                        {
                            "name": "GetServiceCategories",
                            "path": "/service/category/get",
                            "description": "Get all system defined service categories/sub categories",
                            "trigger": "HTTP",
                            "method": ["GET"],
                            "request": "",
                            "response": "{\n  \"categories\": [\n    {\n      \"id\": 0,\n      \"name\": \"string\",\n      \"description\": \"string\"\n    }\n  ],\n  \"sub_categories\": [\n    {\n      \"id\": 0,\n      \"name\": \"string\",\n      \"description\": \"string\"\n    }\n  ]\n}"
                        },
                        {
                            "name": "GetServices",
                            "path": "/service/{storeId}/get",
                            "description": "Get services provided by a store",
                            "trigger": "HTTP",
                            "method": ["GET"],
                            "request": "",
                            "response": "[\n  {\n    \"id\": 0,\n    \"duration\": 0,\n    \"price\": 0,\n    \"name\": \"string\",\n    \"description\": \"string\",\n    \"categories\": [\n      {\n        \"id\": 0,\n        \"name\": \"string\",\n        \"description\": \"string\",\n        \"sub_categories\": [\n          {\n            \"id\": 0,\n            \"name\": \"string\",\n            \"description\": \"string\"\n          }\n        ]\n      }\n    ]\n  }\n]"
                        },
                        {
                            "name": "AddServices",
                            "path": "/service/{storeId}/add",
                            "description": "Add service to a store",
                            "trigger": "HTTP",
                            "method": ["POST"],
                            "request": "{\n  \"store_service_id\": 0,\n  \"service_name\": \"string\",\n  \"description\": \"string\",\n  \"duration\": 0,\n  \"price\": 0,\n  \"categories\": [\n    0\n  ],\n  \"sub_categories\": [\n    0\n  ]\n}",
                            "response": ""
                        },
                        {
                            "name": "EditService",
                            "path": "/service/edit",
                            "description": "Edit service of a store",
                            "trigger": "HTTP",
                            "method": ["PATCH"],
                            "request": "{\n  \"store_service_id\": 0,\n  \"service_name\": \"string\",\n  \"description\": \"string\",\n  \"duration\": 0,\n  \"price\": 0,\n  \"categories\": [\n    0\n  ],\n  \"sub_categories\": [\n    0\n  ]\n}",
                            "response": ""
                        },
                        {
                            "name": "DeleteService",
                            "path": "/service/{serviceId}/delete",
                            "description": "Delete service of a store",
                            "trigger": "HTTP",
                            "method": ["DELETE"],
                            "request": "",
                            "response": ""
                        }
                    ]
                }
            ],
            "devOps": [
                {
                    "name": "ci-crm-template.yml",
                    "description": "Continuous integration pipeline template for the project. Each microservices use the template",
                    "type": "CI",
                    "yml": "steps:\n- task: DotNetCoreCLI@2\n  displayName: Build\n  inputs:\n    command: 'build'\n    projects: |\n      $(workingDirectory)/*.csproj\n    arguments: --output $(System.DefaultWorkingDirectory)/publish_output --configuration Release\n    version: '8.x'\n\n- task: ArchiveFiles@2\n  displayName: 'Archive files'\n  inputs:\n    rootFolderOrFile: '$(System.DefaultWorkingDirectory)/publish_output'\n    includeRootFolder: false\n    archiveType: zip\n    archiveFile: $(Build.ArtifactStagingDirectory)/$(packageName).zip\n    replaceExistingArchive: true\n\n- publish: $(Build.ArtifactStagingDirectory)/$(packageName).zip\n  artifact: drop\n"
                },
                {
                    "name": "cd-crm-template.yml",
                    "description": "Continuous deployment pipeline template for the project. Each microservices use the template",
                    "type": "CD",
                    "yml": "steps:\n- task: DownloadPipelineArtifact@2\n  inputs:\n    buildType: 'specific'\n    project: $(project)\n    pipeline: $(ciPipeline)\n    specificBuildWithTriggering: true\n    buildVersionToDownload: 'latest'\n    artifactName: 'drop'\n    targetPath: '$(Pipeline.Workspace)'\n\n- task: AzureFunctionApp@1\n  displayName: 'Deploy'\n  inputs:\n    azureSubscription: $(subscription)\n    appType: functionApp\n    appName: $(functionAppName)\n    package: '$(Pipeline.Workspace)/**/$(packageName).zip'\n"
                }
            ],
            "database": {
                "description": [
                    "The application utilizes Azure SQL Database, a fully managed, scalable relational database service in the cloud. Azure SQL provides high availability, performance tuning, and built-in security features such as data encryption. Entity Framework (EF) Core, a modern object-relational mapper (ORM), is employed to simplify data access by allowing developers to interact with the database using strongly-typed .NET objects. This enables efficient querying and manipulation of data, reducing the need to write raw SQL while maintaining optimal performance.",
                    "Database migrations are handled using FluentMigrator, a migration framework that enables versioning of the database schema. FluentMigrator helps manage schema changes over time by defining migrations in C# code, which are then applied in a controlled and automated manner. This approach allows the application to evolve safely while ensuring that all changes are tracked and can be rolled forward or backward as needed."
                ],
                "diagram": {
                    "description": "Image shows the database diagram",
                    "url": "/crm-db-diagram.png"
                }
            },
            "idp": {
                "description": [
                    "Azure AD B2C is implemented as the identity provider, enabling seamless authentication and authorization across both business and client users. It supports customizable sign-up and sign-in flows, providing social login and multi-factor authentication (MFA) options. Azure AD B2C ensures secure and scalable identity management, making it easy to onboard users while maintaining robust protection of user credentials and sensitive information."
                ]
            },
            "security": {
                "description": [
                    "The application leverages JSON Web Tokens (JWT) to authenticate users and secure communication with the backend services. Each API request is authorized based on scope-based access control, where users are granted access to specific services and resources according to the scopes embedded in the token. This approach provides fine-grained control over permissions and enforces security policies dynamically at runtime.",
                    "Azure App Configuration is used to store and manage application settings across different environments. By centralizing configuration management, Azure App Configuration enables dynamic updates to configuration values without the need to redeploy services. This ensures better scalability, flexibility, and consistency in handling non-sensitive application settings.",
                    "Azure Key Vault is integrated to securely manage sensitive data, including API keys, database connection strings, and certificates. It ensures that only authorized services and applications can access the secrets stored in Key Vault. This integration provides secure management of sensitive information and reduces the risk of security breaches, ensuring compliance with best practices for sensitive data handling."
                ],
                "diagram": {
                    "description": "The diagram shows what the entire implicit sign-in flow looks like",
                    "url": "/crm-security-diagram.png"
                }
            },
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
            "furtherReading": [
                {
                    "name": "Azure Functions",
                    "url": "https://learn.microsoft.com/en-us/azure/azure-functions/"
                },
                {
                    "name": "Azure App Configuration",
                    "url": "https://learn.microsoft.com/en-us/azure/azure-app-configuration/"
                },
                {
                    "name": "Azure Key Vault",
                    "url": "https://learn.microsoft.com/en-us/azure/key-vault/general/"
                },
                {
                    "name": "Azure AD B2C",
                    "url": "https://learn.microsoft.com/en-us/azure/active-directory-b2c/"
                },
                {
                    "name": "Entity Framework Core",
                    "url": "https://learn.microsoft.com/en-us/ef/core/"
                },
                {
                    "name": "Dependency Injection",
                    "url": "https://learn.microsoft.com/en-us/azure/azure-functions/functions-dotnet-dependency-injection"
                },
                {
                    "name": "OAuth 2.0 Implicit Grant Flow",
                    "url": "https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-implicit-grant-flow"
                },
                {
                    "name": "OAuth 2.0 Authorization Code Flow",
                    "url": "https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow"
                },
                {
                    "name": "JSON Web Tokens",
                    "url": "https://auth0.com/docs/secure/tokens/json-web-tokens"
                }
            ],
        }
    },
    {
        "id": 2,
        "uuid": "4f7334bd-f946-446e-81e7-77ea52c5fb9c",
        "name": "POD",
        "description": "An enterprise level cloud-based ecommerce app with 3D print-on-demand business model having full integration capabilities to Shopify stores with Braintree and Stripe payment options.",
        "imageUrl": "/pod.png",
        "tags": ["Print-on-Demand", "E-commerce", "Shopify"],
        "status": "active",
    },
    {
        "id": 3,
        "uuid": "e3b0c442-98fc-4dfb-897e-4aa3e1c8506e",
        "name": "DStudio",
        "description": "A 3D product design SaaS enabling users to create, customize, and visualize products in real-time with high-quality 3D rendering, making it ideal for businesses offering custom or 3D printed products.",
        "imageUrl": "/dstudio.png",
        "tags": ["3D Design", "Product Design", "SaaS"],
        "status": "active",
    }
    // {
    //     "id": 2,
    //     "uuid": "4f7334bd-f946-446e-81e7-77ea52c5fb9c",
    //     "name": "POD",
    //     "description": "An enterprise level cloud-based ecommerce app with 3D print-on-demand business model having full integration capabilities to Shopify stores with Braintree and Stripe payment options.",
    //     "isDemoReady": false,
    //     "demoUrl": "",
    //     "imageUrl": "/pod.png",
    //     "tags": ["Print-on-Demand", "E-commerce", "Shopify"],
    //     "status": "active",
    //     "isWikiReady": false,
    //     "wiki": {
    //         "name": "POD (Print-On-Demand)",
    //         "purpose": "To provide a comprehensive print-on-demand solution that enables businesses to manage product customization, order fulfillment, and 3D printing operations efficiently, while seamlessly integrating with multiple e-commerce platforms to offer customers a personalized and scalable print-on-demand experience.",
    //         "projectType": "Scalable enterprise-level print-on-demand solution designed to manage and automate 3D printing operations for e-commerce platforms, optimized for seamless integration, resource management, and high-volume production in a 3D print farm environment.",
    //         "overview": "POD is a cloud-based backend system designed to integrate multiple Shopify stores for seamless print-on-demand order fulfillment. It connects to Shopify stores via a RestSharp client, allowing sellers to publish unlimited products effortlessly. The system supports payments through Braintree and Stripe, enabling automated fulfillment and shipping while adhering to best security practices using Azure products. Businesses can connect multiple stores under a single account, manage customized products, and automate payment processing for efficient operations. For administrators, POD offers robust features such as adding various filament types, materials, and generic products, empowering sellers to design and publish their offerings. It also includes advanced management tools for 3D printers, optimizing printbox volume usage and preventing product overflow. Additional admin features like order management, print job scheduling, shipping management, and filament inventory management provide complete control over the entire print-on-demand process. These capabilities make POD an enterprise-level project, ready to manage and scale 3D print farm operations with comprehensive integration, customization, and fulfillment features.",
    //         "features": [
    //             "Microservice architecture built with .NET 8 for modular, maintainable, and scalable components.",
    //             "Serverless execution using Azure Functions for high scalability and cost efficiency.",
    //             "Event-driven communication between microservices via Azure Service Bus for reliable message delivery and decoupled interactions.",
    //             "Data storage and management using Azure SQL Server, providing robust and secure database capabilities.",
    //             "Database migration support using FluentMigrator for version control and automated schema management.",
    //             "File and model storage in Azure Blob Storage, enabling efficient and scalable management of 3D model files and related data.",
    //             "Centralized configuration management using Azure App Configuration to streamline application settings across services.",
    //             "Secure storage and access to sensitive data such as API keys and secrets through Azure Key Vaults.",
    //             "Automated CI/CD pipelines with Azure DevOps for continuous integration and deployment, ensuring rapid and reliable application updates.",
    //             "Integration with Shopify using custom RestSharp clients for seamless interaction with e-commerce stores.",
    //             "Real-time order processing with asynchronous task handling, utilizing durable functions and service bus queues for effective job management.",
    //             "Dynamic print job scheduling and resource allocation using Azure Functions, ensuring optimal use of 3D printers and minimizing delays.",
    //             "Advanced error handling and retry mechanisms using Azure Service Bus to ensure resilience and reliability in message processing.",
    //             "Scalable API design with support for RESTful operations, adhering to best practices for maintainable and extensible endpoints."
    //         ],
    //         "technologyStack": [
    //             ".NET 8",
    //             "Azure Functions",
    //             "Azure Service Bus",
    //             "Azure SQL Server",
    //             "Azure Blob Storage",
    //             "Azure App Configuration",
    //             "Azure Key Vaults",
    //             "Azure AD B2C",
    //             "NextJS (Demo Frontend)"
    //         ],
    //         "architecture": "Microservice architecture leveraging an event-driven design using Azure Service Bus and Azure Functions. Each microservice is responsible for a specific functionality, such as order processing, payment management, print job scheduling, and shipping coordination. Azure Service Bus is used for reliable messaging and event propagation between services, ensuring decoupled communication and scalable event handling. Azure Functions are employed to execute discrete tasks within each microservice, enabling efficient, serverless execution and scalability. The architecture supports seamless integration with Shopify stores, allowing for real-time order tracking, automated payment processing, and dynamic 3D print job scheduling. The system is designed for high availability, resilience, and easy maintenance, making it ideal for managing a large-scale print-on-demand operation.",
    //         "useCases": [
    //             "Automating order processing and fulfillment for multiple Shopify stores.",
    //             "Managing 3D print job scheduling and resource allocation.",
    //             "Integrating payment gateways for seamless transaction processing.",
    //             "Handling real-time inventory management for filament and materials.",
    //             "Coordinating shipping and logistics for efficient order dispatch.",
    //             "Supporting multi-store management with centralized control."
    //         ],
    //         "microservices": [
    //             {
    //                 "name": "POD.API.Admin.Filament",
    //                 "type": "Azure Function App",
    //                 "description": "Manage filament types and inventory.",
    //                 "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
    //                 "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
    //                 "trigger": "HTTP"
    //             },
    //             {
    //                 "name": "POD.API.Admin.Model",
    //                 "type": "Azure Function App",
    //                 "description": "Manage 3D models and assets.",
    //                 "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
    //                 "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
    //                 "trigger": "HTTP"
    //             },
    //             {
    //                 "name": "POD.API.Seller.Address",
    //                 "type": "Azure Function App",
    //                 "description": "Manage business and store addresses.",
    //                 "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
    //                 "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
    //                 "trigger": "HTTP"
    //             },
    //             {
    //                 "name": "POD.API.Seller.Payment",
    //                 "type": "Azure Function App",
    //                 "description": "Manage seller payment methods.",
    //                 "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
    //                 "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
    //                 "trigger": "HTTP"
    //             },
    //             {
    //                 "name": "POD.API.Seller.Store",
    //                 "type": "Azure Function App",
    //                 "description": "Manage store information and settings.",
    //                 "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
    //                 "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
    //                 "trigger": "HTTP"
    //             },
    //             {
    //                 "name": "POD.API.User.Identity",
    //                 "type": "Azure Function App",
    //                 "description": "Manage user identities and authentication.",
    //                 "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
    //                 "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
    //                 "trigger": "HTTP"
    //             },
    //             {
    //                 "name": "POD.Functions.Geometry",
    //                 "type": "Azure Function App",
    //                 "description": "Analyze and calculate 3D model specifications.",
    //                 "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
    //                 "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
    //                 "trigger": "Blob"
    //             },
    //             {
    //                 "name": "POD.Functions.Payment.Schedule",
    //                 "type": "Azure Function App",
    //                 "description": "Schedule and collect payment information.",
    //                 "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
    //                 "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
    //                 "trigger": "Timer"
    //             },
    //             {
    //                 "name": "POD.Functions.Payment.Processing.Stripe",
    //                 "type": "Azure Function App",
    //                 "description": "Process payments via Stripe.",
    //                 "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
    //                 "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
    //                 "trigger": "Service Bus"
    //             },
    //             {
    //                 "name": "POD.Functions.Payment.Processing.Braintree",
    //                 "type": "Azure Function App",
    //                 "description": "Process payments via Braintree.",
    //                 "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
    //                 "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
    //                 "trigger": "Service Bus"
    //             },
    //             {
    //                 "name": "POD.Functions.Payment.PostProcessing",
    //                 "type": "Azure Function App",
    //                 "description": "Update database post-payment processing.",
    //                 "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
    //                 "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
    //                 "trigger": "Service Bus"
    //             },
    //             {
    //                 "name": "POD.Functions.PublishSchedule",
    //                 "type": "Azure Function App",
    //                 "description": "Schedule and publish products to store fronts.",
    //                 "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
    //                 "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
    //                 "trigger": "Timer"
    //             },
    //             {
    //                 "name": "POD.Functions.Shopify.AppInstall",
    //                 "type": "Azure Function App",
    //                 "description": "Handle new app installations on Shopify.",
    //                 "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
    //                 "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
    //                 "trigger": "Service Bus"
    //             },
    //             {
    //                 "name": "POD.Functions.Shopify.AppUninstall",
    //                 "type": "Azure Function App",
    //                 "description": "Handle app uninstallations on Shopify.",
    //                 "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
    //                 "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
    //                 "trigger": "Service Bus"
    //             },
    //             {
    //                 "name": "POD.Functions.Shopify.CallExecutes",
    //                 "type": "Azure Function App",
    //                 "description": "Route webhook notifications to the relevant microservices.",
    //                 "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
    //                 "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
    //                 "trigger": "Service Bus"
    //             },
    //             {
    //                 "name": "POD.Functions.Shopify.CreateWebhooks",
    //                 "type": "Azure Function App",
    //                 "description": "Create webhooks for newly integrated Shopify stores.",
    //                 "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
    //                 "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
    //                 "trigger": "Service Bus"
    //             },
    //             {
    //                 "name": "POD.Functions.Shopify.DeleteProducts",
    //                 "type": "Azure Function App",
    //                 "description": "Remove unpublished products from Shopify stores.",
    //                 "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
    //                 "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
    //                 "trigger": "Service Bus"
    //             },
    //             {
    //                 "name": "POD.Functions.Shopify.OrderFulfillment",
    //                 "type": "Azure Function App",
    //                 "description": "Fulfill orders post-payment clearance.",
    //                 "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
    //                 "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
    //                 "trigger": "Service Bus"
    //             },
    //             {
    //                 "name": "POD.Functions.Shopify.OrderProcessing",
    //                 "type": "Azure Function App",
    //                 "description": "Process orders before payment clearance.",
    //                 "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
    //                 "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
    //                 "trigger": "Service Bus"
    //             },
    //             {
    //                 "name": "POD.Functions.Shopify.PublishProcessing",
    //                 "type": "Azure Function App",
    //                 "description": "Publish products and match variants with images.",
    //                 "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
    //                 "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
    //                 "trigger": "Service Bus"
    //             },
    //             {
    //                 "name": "POD.Functions.Shopify.SellerStatusProcessing",
    //                 "type": "Azure Function App",
    //                 "description": "Update user status in Shopify stores.",
    //                 "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
    //                 "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
    //                 "trigger": "Service Bus"
    //             },
    //             {
    //                 "name": "POD.Functions.Shopify.UpdateInventory",
    //                 "type": "Azure Function App",
    //                 "description": "Update inventory levels in Shopify stores.",
    //                 "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
    //                 "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
    //                 "trigger": "Service Bus"
    //             },
    //             {
    //                 "name": "POD.Functions.Shopify.WebhookEndpoints",
    //                 "type": "Azure Function App",
    //                 "description": "Receive and process Shopify webhook notifications.",
    //                 "scalability": "Scales with Azure Functions' auto-scaling capabilities.",
    //                 "deployment": "Automated deployment using Azure DevOps CI/CD pipeline.",
    //                 "trigger": "HTTP"
    //             }
    //         ],
    //         "devOps": "CI/CD implemented via Azure DevOps for continuous deployments.",
    //         "sourceCodeUrl": "",
    //         "seeAlso": [
    //             {
    //                 "name": "A Secured Microservice",
    //                 "url": "/a05ecc86-9313-4959-a644-f1e59fde6eeb"
    //             },
    //             {
    //                 "name": "A Custom Auth Flow using a Microservice",
    //                 "url": "/46fe9dc9-4adb-45e7-a024-58cb52e37c77"
    //             },
    //             {
    //                 "name": "Azure Service Bus Integration",
    //                 "url": "/8a593841-83ce-44de-a224-18a7f08cbbc1"
    //             },
    //             {
    //                 "name": "SendGrid Integration",
    //                 "url": "/c8bbefdb-e137-44ea-9614-4371b9e1cd54"
    //             },
    //             {
    //                 "name": "Azure Blob Storage Integration",
    //                 "url": "/d1ffeca0-1eb3-4cd8-89db-fac8c88dccf2"
    //             },
    //         ],
    //         "tags": [".NET", "Azure", "Microservices", "CosmosDB", "Service Bus"]
    //     }
    // },
    // {
    //     "id": 3,
    //     "uuid": "e3b0c442-98fc-4dfb-897e-4aa3e1c8506e",
    //     "name": "DStudio",
    //     "description": "A 3D product design SaaS enabling users to create, customize, and visualize products in real-time with high-quality 3D rendering, making it ideal for businesses offering custom or 3D printed products.",
    //     "isDemoReady": false,
    //     "demoUrl": "",
    //     "imageUrl": "/dstudio.png",
    //     "tags": ["3D Design", "Product Design", "SaaS"],
    //     "status": "active",
    //     "isWikiReady": false,
    //     "wiki": {
    //         "name": "DStudio (Design Studio)",
    //         "purpose": "To automate order processing and 3D printing jobs from e-commerce platforms.",
    //         "projectType": "Enterprise-Level Azure Function-Based Microservice Architecture",
    //         "overview": "A cloud-based backend system that integrates multiple e-commerce platforms and automates 3D printing processes.",
    //         "features": [
    //             "Webhook notifications for order updates",
    //             "Real-time inventory tracking",
    //             "Asynchronous job scheduling for 3D printing"
    //         ],
    //         "technologyStack": [
    //             ".NET Core",
    //             "Azure Functions",
    //             "Cosmos DB",
    //             "Azure Service Bus",
    //             "SQL Server"
    //         ],
    //         "architecture": "Microservice architecture with event-driven design using Azure Service Bus and Functions.",
    //         "useCases": [
    //             "Automated order management",
    //             "3D printing job scheduling",
    //             "E-commerce platform integration"
    //         ],
    //         "microservices": [
    //             {
    //                 "name": "3D Print Job Scheduler",
    //                 "description": "Schedules and assigns 3D print jobs based on printer availability.",
    //                 "scalability": "Queue-based scheduling via Azure Service Bus.",
    //                 "deployment": "Azure Functions triggered by Service Bus queues.",
    //                 "trigger": "HTTP Trigger"  // Added trigger type
    //             }
    //         ],
    //         "devOps": "CI/CD implemented via Azure DevOps for continuous deployments.",
    //         "sourceCodeUrl": "https://github.com/user/pod-backend",
    //         "seeAlso": [
    //             {
    //                 "name": "A secured microservice template",
    //                 "url": "#"
    //             },
    //             {
    //                 "name": "Auth Flow",
    //                 "url": "#"
    //             },
    //             {
    //                 "name": "GoogleMaps Client",
    //                 "url": "#"
    //             },
    //         ],
    //         "tags": [".NET", "Azure", "Microservices", "CosmosDB", "Service Bus"]
    //     }
    // },
];
