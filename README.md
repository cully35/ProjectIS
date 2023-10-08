# ProjectIS.github.io
Project 1: Audit Trail Viewer (ATV)
Overview
The Audit Trail Viewer (ATV) is a user-friendly web application designed to display and analyze audit trail data for entities in Manhattan Active Omni (MAO). 

Project Description
Features
The ATV project focuses on implementing the following key features:

Fetch Audit Data: The application fetches audit trail data from the following endpoint:

Audit Trail JSON Endpoint
Parse Audit Data: The ATV parses the JSON response to extract and display the necessary audit information. Manhattan Active will provide guidance on identifying the required attributes.

Display Audit Information: The application presents the audit attributes in an easy-to-understand format on a web browser.

Filtering: Users can filter audit records based on selected filters to view specific subsets of data.

Sorting: The application allows users to sort audit records based on selected columns.

Pagination: Pagination capabilities are included to display no more than 10 records per page, making it easier to navigate through large datasets.

Additional Features
The project also offers opportunities for extra credit with the following features:

Export to CSV or PDF: The ability to export audit results to CSV or PDF files for further analysis or reporting.

Authentication: Using alternate endpoints to generate an authentication token and invoke the audit trail API from a live MA environment.

Implementation Details
Here are some important implementation notes for the project:

Technology Stack: The application will be built using Angular (or any JavaScript framework of your choice).

Deployment: You can deploy the application in a public cloud environment or on your local machine. Share the results via screen sharing during demonstrations.

Data Source: Utilize the provided endpoint to pull audit data.

Collaboration: Manhattan Active (MA) will assist in explaining the JSON structure for parsing.

Getting Started
To start using the Audit Trail Viewer, follow these steps:

Clone this repository to your local machine.
Install the necessary dependencies.
Implement the specified features and additional credits.
Configure the application to fetch data from the provided endpoint.
Deploy the application.
Conclusion
The Audit Trail Viewer project aims to enhance the usability of audit trail data from MAO by providing a user-friendly interface for viewing, filtering, and analyzing configuration change details.
For any questions or further guidance, please reach out to the project team or Manhattan Active.
