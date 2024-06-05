export default class ReqresApis {
  fetchUsers(page) {
    return cy.request({
      method: "GET",
      url: `api/users?page=${page}`,
      failOnStatusCode: false,
    });
  }

  fetchUser(userID) {
    return cy.request({
      method: "GET",
      url: `/api/users/${userID}`,
      failOnStatusCode: false,
    });
  }

  fetchData() {
    return cy.request({
      method: "GET",
      url: "/api/unknown",
      failOnStatusCode: false,
    });
  }

  fetchSingleResource(user) {
    return cy.request({
      method: "GET",
      url: `/api/unknown/${user}`,
      failOnStatusCode: false,
    });
  }

  createUser(userData) {
    return cy.request({
      method: "POST",
      url: "/api/users",
      headers: {
        "Content-Type": "application/json",
      },
      body: userData,
      failOnStatusCode: false,
    });
  }

  updateUser(userId, userData) {
    return cy.request({
      method: "PUT",
      url: `/api/users/${userId}`,
      headers: {
        "Content-Type": "application/json",
      },
      body: userData,
      failOnStatusCode: false,
    });
  }

  patchUser(userId, userData) {
    return cy.request({
      method: "PATCH",
      url: `/api/users/${userId}`,
      headers: {
        "Content-Type": "application/json",
      },
      body: userData,
      failOnStatusCode: false,
    });
  }

  deleteUser(userId) {
    return cy.request({
      method: "DELETE",
      url: `/api/users/${userId}`,
      failOnStatusCode: false,
    });
  }

  registerUser(userData) {
    return cy.request({
      method: "POST",
      url: "/api/register",
      headers: {
        "Content-Type": "application/json",
      },
      body: userData,
      failOnStatusCode: false,
    });
  }

  loginUser(userData) {
    return cy.request({
      method: "POST",
      url: "/api/login",
      headers: {
        "Content-Type": "application/json",
      },
      body: userData,
      failOnStatusCode: false,
    });
  }

  fetchDelayedResponse(timestamp) {
    return cy.request({
      method: "GET",
      url: `/api/users?delay=${timestamp}`,
      failOnStatusCode: false,
    });
  }
}
