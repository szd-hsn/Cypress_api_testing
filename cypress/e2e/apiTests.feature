Feature: Get users from API

    Scenario: Fetch users from page 2
        When I send a GET request to fetch users on page 2
        Then I should get a 200 status code
        And the response should contain a list of users
        And the page number should be 2

    Scenario Outline: Fetch user by ID with valid and invalid IDs
        When I send a GET request to fetch the user with ID <userID>
        Then I should get a <status> status code

        Examples:
            | userID | status |
            | 1      | 200    |
            | 999    | 404    |

    Scenario: Fetch data from the API endpoint
        When I send a GET request to fetch the data
        Then I should get a 200 status code
        And the response should contain the expected data

    Scenario: Fetch a single resource from the API endpoint
        When I send a GET request to fetch the resource
        Then I should get a 200 status code
        And the response should contain the expected resource data

    Scenario: Fetch a single resource that does not exist
        When I send a GET request to fetch the non-existing resource
        Then I should get a 404 status code
        And the response body should be empty

    Scenario: Create a user with valid data
        When I send a POST request to create a user with valid data
        Then I should get a 201 status code
        And the response should contain the user name, job, ID, and creation timestamp

    Scenario: Update a user with valid data using PUT
        When I send a PUT request to update the user with valid data
        Then I should get a 200 status code
        And the response should contain the updated user name, job, and update timestamp

    Scenario: Update a user with valid data using PATCH
        When I send a PATCH request to update the user with valid data
        Then I should get a 200 status code
        And the response should contain the updated user name, job, and update timestamp

    Scenario: Delete a user by ID
        When I send a DELETE request to delete the user by ID
        Then I should get a 204 status code
        And the response body should be empty

    Scenario: Register a user successfully
        When I send a POST request to register a user with valid data
        Then I should get a 200 status code
        And the response should contain the user ID and token

    Scenario: Register a user unsuccessfully
        When I send a POST request to register a user with invalid data
        Then I should get a 400 status code
        And the response should contain the error message

    Scenario: Login with valid credentials
        When I send a POST request to login with valid credentials
        Then I should get a 200 status code
        And the response should contain the authentication token

    Scenario: Login with invalid credentials
        When I send a POST request to login with invalid credentials
        Then I should get a 400 status code
        And the response should contain the error message

    Scenario: Verify delayed response
        When I send a GET request to fetch data with a delay
        Then I should get a 200 status code
        And the response should be delayed by at least 3000 milliseconds
