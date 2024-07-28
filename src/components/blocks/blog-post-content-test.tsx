import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const code = `
using System; // Provides fundamental classes and base classes that define commonly-used value and reference data types
using Azure.Identity; // Provides classes for Azure identity management
using Microsoft.Azure.Functions.Extensions.DependencyInjection; // Provides dependency injection capabilities for Azure Functions
using Microsoft.Extensions.Configuration; // Provides the configuration framework
using ProductDesigner.API.Client.Serve.DI; // Custom namespace for dependency injection in the ProductDesigner API
using ProductDesigner.Common.Database; // Custom namespace for common database-related functionality

// Specifies the startup class to use for the Azure Functions host
[assembly: FunctionsStartup(typeof(ProductDesigner.API.Client.Serve.Startup))]

namespace ProductDesigner.API.Client.Serve
{
    // Startup class for configuring the Azure Functions application
    public class Startup : FunctionsStartup
    {
        // Configures the application configuration
        public override void ConfigureAppConfiguration(IFunctionsConfigurationBuilder builder)
        {
            builder.ConfigurationBuilder.AddAzureAppConfiguration(config =>
            {
                // Obtains an Azure credential using the DefaultAzureCredential class
                var token = new DefaultAzureCredential();

                // Gets the App Configuration URL from environment variables
                var appConfigUrl = Environment.GetEnvironmentVariable("AppConfigUrl");

                // Connects to the Azure App Configuration using the obtained credential
                config.Connect(new Uri(appConfigUrl), token);

                // Configures Key Vault integration with the App Configuration, using the same credential
                config.ConfigureKeyVault(kv => kv.SetCredential(token));
            });
        }

        // Configures the services and the application
        public override void Configure(IFunctionsHostBuilder builder)
        {
            // Gets the application configuration
            var configuration = builder.GetContext().Configuration;

            // Adds custom services to the service collection
            builder.Services.AddServeServices(
                new DbConnectionOptions
                {
                    // Sets the connection string for the database from the configuration
                    ConnectionString = configuration["DatabaseConnectionString"]
                },
                (tokenValidation) =>
                {
                    // Sets the security key for token validation from the configuration
                    tokenValidation.SecurityKey = configuration["TokenValidationSecurityKey"];
                }
            );
        }
    }
}
`

export default function BlogPostContentTest() {
    return (
        <div className="bg-gray-100 text-gray-800">
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
                <h1 className="text-3xl font-bold mb-4">Configuring Azure Functions with Dependency Injection and App Configuration</h1>

                <p className="mb-4">In this blog post, we will walk through the process of configuring an Azure Functions application using dependency injection and Azure App Configuration. The provided code demonstrates how to set up a startup class for an Azure Functions host, including the use of custom namespaces and integration with Azure services.</p>

                <h2 className="text-2xl font-semibold mb-2">Code Breakdown</h2>

                <SyntaxHighlighter language="csharp" style={materialDark}>
                    {code}
                </SyntaxHighlighter>

                <h2 className="text-2xl font-semibold mb-2">Understanding the Code</h2>

                <p className="mb-4">Let`s break down the key parts of this code:</p>

                <h3 className="text-xl font-semibold mb-2">Namespaces and Usings</h3>
                <p className="mb-4">The code begins with using directives to include essential namespaces. These namespaces provide fundamental classes and support for Azure identity management, dependency injection, configuration framework, and custom functionalities related to the ProductDesigner API and database operations.</p>

                <h3 className="text-xl font-semibold mb-2">FunctionsStartup Attribute</h3>
                <p className="mb-4">The <code className="bg-gray-200 p-1 rounded">[assembly: FunctionsStartup(typeof(ProductDesigner.API.Client.Serve.Startup))]</code> attribute specifies the startup class for the Azure Functions host. This attribute ensures that the Startup class is used to configure the application during startup.</p>

                <h3 className="text-xl font-semibold mb-2">ConfigureAppConfiguration Method</h3>
                <p className="mb-4">This method configures the application configuration. It adds Azure App Configuration support by obtaining an Azure credential using the <code className="bg-gray-200 p-1 rounded">DefaultAzureCredential</code> class. It then connects to the Azure App Configuration using the URL obtained from environment variables. Additionally, it configures Key Vault integration using the same credential.</p>

                <h3 className="text-xl font-semibold mb-2">Configure Method</h3>
                <p className="mb-4">The <code className="bg-gray-200 p-1 rounded">Configure</code> method is responsible for configuring the services and the application. It retrieves the application configuration and adds custom services to the service collection. This method sets the database connection string and token validation security key from the configuration.</p>

                <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
                <p className="mb-4">By following the structure of this code, you can set up an Azure Functions application with dependency injection and Azure App Configuration. This approach ensures that your application is modular, secure, and scalable.</p>
            </div>
        </div>
    );
}
