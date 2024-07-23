
import {
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { expect, test } from 'vitest'
import UserList from "./UserList";

test("renders loader data", async () => {
  render(<UserList />);
  expect(screen.getByText("UserList")).toBeDefined();
});
