export { default } from "next-auth/middleware";
export const config = {
  matcher: ["/memnber/new", "/profile", "/member/edit"],
};
