import { When, Then } from "cypress-cucumber-preprocessor/steps";
import ReqresApis from "../../support/apiCalls";

let response, userID, responseTime;
const reqresApisCall = new ReqresApis();

When("I send a GET request to fetch users on page 2", () => {
  reqresApisCall.fetchUsers(2).then((res) => {
    response = res;
  });
});

Then("I should get a 200 status code", () => {
  expect(response.status).to.eq(200);
});

Then("the response should contain a list of users", () => {
  expect(response.body.data).to.be.an("array").that.is.not.empty;
});

Then("the page number should be 2", () => {
  expect(response.body.page).to.eq(2);
});

When("I send a GET request to fetch the user with ID {int}", (id) => {
  userID = id;
  reqresApisCall.fetchUser(userID).then((res) => {
    response = res;
  });
});

Then("I should get a {int} status code", (statusCode) => {
  expect(response.status).to.eq(statusCode);
});

When("I send a GET request to fetch the data", () => {
  reqresApisCall.fetchData().then((res) => {
    response = res;
  });
});

Then("the response should contain the expected data", () => {
  expect(response.body).to.have.property("page", 1);
  expect(response.body).to.have.property("per_page", 6);
  expect(response.body).to.have.property("total", 12);
  expect(response.body).to.have.property("total_pages", 2);
  expect(response.body)
    .to.have.property("data")
    .that.is.an("array")
    .with.length(6);

  response.body.data.forEach((item) => {
    expect(item).to.have.all.keys(
      "id",
      "name",
      "year",
      "color",
      "pantone_value"
    );
  });

  expect(response.body.support).to.have.all.keys("url", "text");
});

When("I send a GET request to fetch the resource", () => {
  reqresApisCall.fetchSingleResource(2).then((res) => {
    response = res;
  });
});

Then("the response should contain the expected resource data", () => {
  expect(response.body).to.have.property("data");
  expect(response.body.data).to.include({
    id: 2,
    name: "fuchsia rose",
    year: 2001,
    color: "#C74375",
    pantone_value: "17-2031",
  });
});

When("I send a GET request to fetch the non-existing resource", () => {
  reqresApisCall.fetchSingleResource(23).then((res) => {
    response = res;
  });
});

Then("the response body should be empty", () => {
  expect(response.body).to.be.empty;
});

When("I send a POST request to create a user with valid data", () => {
  const userData = {
    name: "morpheus",
    job: "leader",
  };

  reqresApisCall.createUser(userData).then((res) => {
    response = res;
  });
});

Then(
  "the response should contain the user name, job, ID, and creation timestamp",
  () => {
    expect(response.body).to.include({
      name: "morpheus",
      job: "leader",
    });
    expect(response.body).to.have.property("id");
    expect(response.body).to.have.property("createdAt");
  }
);

When("I send a PUT request to update the user with valid data", () => {
  const userId = 2;
  const userData = {
    name: "morpheus",
    job: "zion resident",
  };

  reqresApisCall.updateUser(userId, userData).then((res) => {
    response = res;
  });
});

Then(
  "the response should contain the updated user name, job, and update timestamp",
  () => {
    expect(response.body).to.include({
      name: "morpheus",
      job: "zion resident",
    });
    expect(response.body).to.have.property("updatedAt");
  }
);

When("I send a PATCH request to update the user with valid data", () => {
  const userId = 2;
  const userData = {
    name: "morpheus",
    job: "zion resident",
  };

  reqresApisCall.patchUser(userId, userData).then((res) => {
    response = res;
  });
});

When("I send a DELETE request to delete the user by ID", () => {
  const userId = 2;

  reqresApisCall.deleteUser(userId).then((res) => {
    response = res;
  });
});

Then("the response body should be empty", () => {
  expect(response.body).to.be.empty;
});

When("I send a POST request to register a user with valid data", () => {
  const userData = {
    email: "eve.holt@reqres.in",
    password: "pistol",
  };

  reqresApisCall.registerUser(userData).then((res) => {
    response = res;
  });
});

When("I send a POST request to register a user with invalid data", () => {
  const userData = {
    email: "sydney@fife",
  };

  reqresApisCall.registerUser(userData).then((res) => {
    response = res;
  });
});

Then("the response should contain the user ID and token", () => {
  expect(response.body).to.have.property("id");
  expect(response.body).to.have.property("token");
});

Then("the response should contain the error message", () => {
  expect(response.body).to.have.property("error");
});

When("I send a POST request to login with valid credentials", () => {
  const userData = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  };

  reqresApisCall.loginUser(userData).then((res) => {
    response = res;
  });
});

When("I send a POST request to login with invalid credentials", () => {
  const userData = {
    email: "peter@klaven",
  };

  reqresApisCall.loginUser(userData).then((res) => {
    response = res;
  });
});

Then("the response should contain the authentication token", () => {
  expect(response.body).to.have.property("token");
});

When("I send a GET request to fetch data with a delay", () => {
  reqresApisCall.fetchDelayedResponse(3).then((res) => {
    responseTime = res.duration;
    response = res;
  });
});

Then(
  "the response should be delayed by at least {int} milliseconds",
  (delay) => {
    expect(responseTime).to.be.at.least(delay);
  }
);
